const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const Op = require("sequelize").Op
module.exports = app => {
  // Get all examples
  app.get("/api/examples", isAuthenticated, (req, res) => {
    db.Example.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(dbExamples => {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", isAuthenticated, (req, res) => {
    db.Example.create({
      UserId: req.user.id,
      text: req.body.text,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      image: req.body.image
    }).then(dbExample => {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", isAuthenticated, (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
      res.json(dbExample);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/profile");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log("api/", req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address
    })
      .then(() => {
        passport.authenticate('local')(req, res, function () {
          res.send(200, "/profile");
        })
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

  app.get("/api/users", function(req, res) {
    
    db.User.findAll({
      include: [db.Example],
      attributes: { 
        exclude: ["password"] 
      }
    }).then(function(data){
      console.log(data)
      res.json(data)
    })
  })
  // the code below will remove data from the DB every **2 DAYS**
  app.delete("/api/expiration", function (req, res) {
    console.log("expired stuff start")
    var date = Date.now() - 172800000;
    db.Example.destroy({
      where: {
        createdAt: {
          [Op.lt]: [date]
        }
      }
    }).then(function (data) {
      console.log(data)
      res.json(data)
    })
  })
}