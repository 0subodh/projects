const passport = require("passport");

module.exports = (app) => {
  app.get("/api", (req, res) => {
    res.json({ users: ["Ram", "Shiva", "Gita"] });
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
    console.log(req.user);
    res.send(req.user);
  });
};
