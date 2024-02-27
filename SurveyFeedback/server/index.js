const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const keys = require("./config/keys");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
// connect to database first before creating models
const connectToDB = require("./models/mongodb");
connectToDB();
require("./services/passport");

const app = express();
app.use(cors());

app.use(
  cookieSession({
    name: "session",
    keys: [
      keys.cookieKey,
      /* secret keys */
    ],
    // Cookie Options
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })
);

// function to fix error generated, solution from stack overflow
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (done) => {
      done();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (done) => {
      done();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
