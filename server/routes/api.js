const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const apiController = require("../controllers/api");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/data/:id", ensureAuth, apiController.getValues);

module.exports = router;