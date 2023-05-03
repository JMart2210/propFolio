const User = require("../models/User");
const Property = require("../models/Property");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find({ user: req.user.id });
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
