const Property = require("../models/Property");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getDash: async (req, res) => {
    try {
      const properties = await Property.find({ user: req.user.id });
      res.render("dash.ejs", { properties: properties, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
