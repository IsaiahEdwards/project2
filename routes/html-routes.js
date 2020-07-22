// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // get method for content and users
  app.get("/", (req, res) => {
    // database queries
    db.Events.findAll()
      .then(function(eventResults, err) {
        if (err) {
          throw err;
        }
        console.log("events");

        db.Articles.findAll()
          .then(function(articleResults, err) {
            if (err) {
              throw err;
            }
            console.log("articles");

            db.Links.findAll()
              .then(function(linkResults, err) {
                if (err) {
                  throw err;
                }
                console.log("links");
                const dataObj = {
                  events: eventResults.map((elem) => {
                    return {
                      title: elem.title,
                      start: elem.start,
                      end: elem.end,
                      groupId: elem.groupId,
                      location: elem.location,
                      type: elem.type,
                    };
                  }),
                  articles: articleResults.map((elem) => {
                    console.log("articles" + articleResults);
                    return {
                      article_title: elem.article_title,
                      article_author: elem.article_author,
                      article_source: elem.article_source,
                      article_body: elem.article_body,
                      article_type: elem.article_type,
                    };
                  }),
                  links: linkResults.map((elem) => {
                    return {
                      link_title: elem.link_title,
                      link_text: elem.link_text,
                      link_type: elem.link_type,
                    };
                  }),
                };
                // console.log("dataObj" + JSON.stringify(dataObj));
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
    db.Events.findAll().then(function(eventResults, err) {
      if (err) {
        throw err;
      }
      console.log("events");
      console.log(eventResults);
      var hbsObject = {
        events: eventResults.map((elem) => {
          return {
            id: elem.id,
            title: elem.title,
            start: elem.start,
            end: elem.end,
            groupId: elem.groupId,
            location: elem.location,
            type: elem.type,
          };
        }),
      };
      res.render("events", hbsObject);
    });
  });

  app.get("/admin_articles", isAuthenticated, (req, res) => {
    db.Articles.findAll().then(function(articleResults, err) {
      if (err) {
        throw err;
      }
      console.log("articles");
      console.log(articleResults);
      var hbsObject = {
        articles: articleResults.map((elem) => {
          return {
            id: elem.id,
            article_title: elem.article_title,
            article_author: elem.article_author,
            article_source: elem.article_source,
            article_body: elem.article_body,
            article_type: elem.article_type,
          };
        }),
      };
      console.log("articles");
      res.render("admin_articles", hbsObject);
    });
  });

  app.get("/admin_links", isAuthenticated, (req, res) => {
    db.Links.findAll().then(function(linkResults, err) {
      if (err) {
        throw err;
      }
      console.log("links");
      console.log(linkResults);
      var hbsObject = {
        links: linkResults.map((elem) => {
          return {
            id: elem.id,
            link_title: elem.link_title,
            link_text: elem.link_text,
            link_type: elem.link_type,
          };
        }),
      };
      console.log(hbsObject);
      res.render("admin_links", hbsObject);
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
    db.Feedbacks.findAll().then(function(feedbackResults, err) {
      if (err) {
        throw err;
      }
      console.log("feedback");
      console.log(feedbackResults);

      var hbsObject = {
        feedback: feedbackResults.map((elem) => {
          return { name: elem.name, comment: elem.comment };
        }),
      };
      console.log(hbsObject);
      // console.log(feedbackResults);
      res.render("userFeedback", hbsObject);
      //  res.render("userFeedback", { dataObj: feedbackResults });
    });
  });
};
