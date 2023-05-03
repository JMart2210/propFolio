const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const propertiesController = require("../controllers/properties");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/dash", ensureAuth, homeController.getDash);
router.get("/profile", ensureAuth, propertiesController.getProfile);
router.get("/feed", ensureAuth, propertiesController.getFeed);
// router.get("/login", authController.getLogin); //This is the old way of doing it
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup); //This is the old way of doing it
router.post("/signup", authController.postSignup);

module.exports = router;
