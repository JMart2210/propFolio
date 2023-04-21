const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const propertyRoutes = require("./routes/properties");
const commentRoutes = require("./routes/comments");
const apiRoutes = require("./routes/api");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database then have server Running. Cyclic is a serverless runtime so I chained listen method after DB connection to make sure that mongoose.connect is finished before allowing app to serve requests, per cyclic docs. (re:https://docs.cyclic.sh/how-to/using-mongo-db#connections-in-a-serverless-runtime)
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at Port:${process.env.PORT}, you better catch it!`);
  });
})

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/property", propertyRoutes);
app.use("/comment", commentRoutes);
app.use("/api", apiRoutes);
