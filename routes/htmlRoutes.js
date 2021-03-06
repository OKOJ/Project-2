const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = app => {
  //Load main page
  app.get("/", (req,res) => res.render("front",{ user: req.user}));
  //Load market page
  app.get("/market",(req,res) => res.render("market",{ user: req.user}));
  //Load signin-login page
  app.get("/signin-login",(req,res) => res.render("signin-login"));

  app.get("/search",(req,res) => res.render("searchResults"));

  // Load signup page
  app.get("/signup", (req, res) => res.render("signup"));

  // Load login page
  app.get("/login", (req, res) => res.render("login"));

  // Load profile page
  app.get("/profile", isAuthenticated, (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db.Example]
    }).then(dbUser => {
      console.log("dbuser", dbUser);
      res.render("profile", { user: dbUser });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", isAuthenticated, (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
      res.render("example", {
        example: dbExample,
        user: req.user
      });
    });
  });


  //Load market stand page
  app.get("/marketstand",(req,res) => res.render("marketstand",{ user: req.user}));

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));
};
