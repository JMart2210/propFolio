const cloudinary = require("../middleware/cloudinary");
const Property = require("../models/Property");
const Comment = require("../models/Comment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const properties = await Property.find({ user: req.user.id });
      res.render("profile.ejs", { properties: properties, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const properties = await Property.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { properties: properties });
    } catch (err) {
      console.log(err);
    }
  },
  getProperty: async (req, res) => {
    try {
      const property = await Property.findById(req.params.id);
      console.log(req.params.id);
      const comments = await Comment.find({ property : req.params.id }).sort({ createdAt: "asc" }).lean();
      res.render("property.ejs", { property: property, user: req.user, comments: comments});
    } catch (err) {
      console.log(err);
    }
  },
  createProperty: async (req, res) => {
    try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req.file.path);
      await Property.create({
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        // caption: req.body.caption,
        // likes: 0,
        user: req.user.id,
      });
      console.log("Property has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likeProperty: async (req, res) => {
    try {
      await Property.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/property/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteProperty: async (req, res) => {
    try {
      // Find property by id
      let property = await Property.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(property.cloudinaryId);
      // Delete property from db
      await Property.remove({ _id: req.params.id });
      console.log("Deleted Property");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
