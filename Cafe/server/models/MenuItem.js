const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g. "Hot Drink", "Pastry"
  description: String,
  price: Number,
  imageUrl: String
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
