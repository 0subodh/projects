const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const Users = require("../models/Users");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  Users.findById(id).then((user) => {
    return done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);

      const existingUser = await Users.findOne({ googleID: profile.id });
      if (existingUser) {
        console.log("User Already Registered");
        done(null, existingUser);
      } else {
        const user = await new Users({
          googleID: profile.id,
        }).save();
        if (user) {
          done(null, user);
        }
      }
    }
  )
);
