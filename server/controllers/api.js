const Property = require("../models/Property");

module.exports = {
  getValues: async (req, res) => {
    try {
      const property = await Property.findById(req.params.id);
      res.json(property.propertyValues);
    } catch (err) {
      console.log(err);
    }
  },
};
