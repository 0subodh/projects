const passport = require("passport");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Home Page");
  });

  app.get("/auth/google", passport.authenticate("google"));

  app.get("/auth/google/callback", passport.authenticate("google"));

  // removes user property from req object, does not destroy the cookie
  app.get("/logout", (req, res) => {
    req.logout(req.user, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  });

  app.get("/api/user", (req, res) => {
    res.send(req.user);
  });
};
