const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const propertiesController = require("../controllers/properties");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Property Routes - simplified for now
router.get("/:id", ensureAuth, propertiesController.getProperty);

router.post("/createProperty", upload.single("file"), propertiesController.createProperty);

router.put("/likeProperty/:id", propertiesController.likeProperty);

router.delete("/deleteProperty/:id", propertiesController.deleteProperty);

module.exports = router;
