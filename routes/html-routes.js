// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models")
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // database queries
db.Protest.findAll().then(function(dateResults) {
  db.Stories.findAll().then(function(articleResults) {
    // db.links.findAll().then(function(linkResults) {
      const dataObj = {dateResults, articleResults};
      console.log("dataObj" + JSON.stringify(dataObj));
      res.render("index", {datesObj : dataObj});
      // res.render("index", {articlesObj : dataObj})
      // res.render("index", {linksObj : dataObj})
    // });
  });
});





  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
