// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // get method for content and users
  app.get("/", (req, res) => {
    // database queries
    db.Events.findAll()
      .then(function (eventResults, err) {
        if (err) {
          throw err;
        }
        console.log("events");

        db.Articles.findAll()
          .then(function (articleResults, err) {
            if (err) {
              throw err;
            }
            console.log("articles");

            db.Links.findAll()
              .then(function (linkResults, err) {
                if (err) {
                  throw err;
                }
                console.log("links");

                // db.User.findAll().then(function(userResults, err) {
                //   if (err) {
                //     throw err
                //   }
                //   console.log("User");

                const dataObj = { eventResults, articleResults, linkResults };

                console.log("dataObj" + JSON.stringify(dataObj));
                res.render("index", { dataObj: dataObj });

                // }).catch();
              })
              .catch();
          })
          .catch();
      })
      .catch();
  });

  //login queries
  app.get("/login", (req, res) => {

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

  app.get("/admin_events", isAuthenticated, (req, res) => {
    db.Events.findAll().then(function (eventResults, err) {
      if (err) {
        throw err;
      }
      console.log("events");
      res.render("admin_events", { dataObj: eventResults });
    });
  });

  app.get("/admin_articles", isAuthenticated, (req, res) => {
    db.Articles.findAll().then(function (articleResults, err) {
      if (err) {
        throw err;
      }
      console.log("articles");
      res.render("admin_articles", { dataObj: articleResults });
    });
  });

  app.get("/admin_links", isAuthenticated, (req, res) => {
    db.Links.findAll().then(function (linkResults, err) {
      if (err) {
        throw err;
      }
      console.log("links");
      res.render("admin_links", { dataObj: linkResults });
    });
  });

  app.get("/signup", isAuthenticated, (req, res) => {

    res.render("signup");
  });

  app.get("/messageboard", isAuthenticated, (req, res) => {

    // db.Messages.findAll().then(function(messageResults, err) {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log("feedback");
    res.render("messageBoard");
    // });
  });

  app.get("/feedback", isAuthenticated, (req, res) => {
    db.Feedbacks.findAll().then(function (feedbackResults, err) {
      if (err) {
        throw err;
      }
      console.log("feedback");
      res.render("userFeedback", { dataObj: feedbackResults });
    });
  });
};
