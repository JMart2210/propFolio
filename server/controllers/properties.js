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
      // Validate address input
      const address = `${req.body.address}${req.body.address2 ? ` ${req.body.address2}` : ""}`;
      const city = req.body.city;
      const state = req.body.state;
      const zip = req.body.zip;

      // Define url & headers for attom api
      const url = `https://api.gateway.attomdata.com/propertyapi/v1.0.0/attomavm/detail?address1=${address}&address2=${city} ${state}`
      const headers = {
        accept: "application/json",
        apikey: process.env.ATTOM_API_KEY,
      }

      // Fetch data from attom api
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (response.ok && data.property) {
        // Create Property object if API call is successful
        const createdProperty = await Property.create({
          address,
          city,
          state,
          zip,
          user: req.user.id,
          attomId: data.property[0].identifier.attomId || "N/A",
          attomInfo: data.property[0] || "N/A",
          propertyValues:[{value: data.property[0].sale.amount.saleamt, date: new Date(data.property[0].sale.saleTransDate)}],
          lastValue: data.property[0].sale.amount.saleamt,
          dateValue: new Date(data.property[0].sale.saleTransDate),
        });
        console.log("Property has been added!");
        console.log(data)
        res.redirect(`/property/${createdProperty._id}`);
      } else {
        // Handle error if API call is unsuccessful
        console.log(`Error: ${data.error}`);
        res.status(response.status).send(`Error: ${data.error}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },

  updatePropertyValue: async (req, res) => {
    try {
      const property = await Property.findById(req.params.id);
      const newValue = req.body.value;
      const newDate = req.body.date;
      property.propertyValues.push({value: newValue, date: newDate});

      property.propertyValues.sort((a, b) => new Date(b.date) - new Date(a.date));
      property.lastValue = property.propertyValues[0].value;
      property.dateValue = property.propertyValues[0].date;
      await property.save();
      // await Property.findOneAndUpdate(
      //   { _id: req.params.id },
      //   {
          
      //   }
      // );
      res.render("property.ejs", { property: property, user: req.user});
      // res.redirect(`/property/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteProperty: async (req, res) => {
    try {
      // Find property by id
      let property = await Property.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(property.cloudinaryId);
      // Delete property from db
      await Property.deleteOne({ _id: req.params.id });
      console.log("Deleted Property");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
