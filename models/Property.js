const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: false,
  // },
  // cloudinaryId: {
  //   type: String,
  //   required: false,
  // },
  // caption: {
  //   type: String,
  //   required: false,
  // },
  // likes: {
  //   type: Number,
  //   required: false,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Property", PropertySchema);
