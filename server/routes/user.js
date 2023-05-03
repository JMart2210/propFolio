const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { ensureAuth } = require("../middleware/auth");

router.get("/api/user", ensureAuth, userController.getUser);
router.get("/api/properties", ensureAuth, userController.getProperties);

module.exports = router;
