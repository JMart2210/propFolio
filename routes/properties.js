const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const propertiesController = require("../controllers/properties");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Property Routes - simplified for now
router.get("/:id", ensureAuth, propertiesController.getProperty);

router.post("/createProperty", propertiesController.createProperty);

router.put("/updatePropertyValue/:id", propertiesController.updatePropertyValue);

router.delete("/deleteProperty/:id", propertiesController.deleteProperty);

module.exports = router;
