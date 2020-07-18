// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // database queries
    db.Events.findAll().then(function(eventResults, err) {
      if (err) {
        throw err
      }
      console.log("events");
      db.Articles.findAll().then(function(articleResults, err) {
        if (err) {
          throw err
        }
        console.log("articles");
        db.Links.findAll().then(function(linkResults, err) {
          console.log("links");
            if (err) {
              throw err
            }
          const dataObj = { eventResults, articleResults, linkResults };
          console.log("dataObj" + JSON.stringify(dataObj));
          res.render("index", { eventsObj: dataObj });
          res.render("index", { articlesObj: dataObj });
          res.render("index", { linksObj: dataObj });
        }).catch();
      }).catch();
    }).catch();
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
  res.render("signup");
  });

  app.get("/messageboard", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
   res.render("messageBoard");
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
