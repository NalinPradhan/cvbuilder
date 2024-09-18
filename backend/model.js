// backend/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cvSchema = new Schema({
  name: String,
  email: String,
  phone: String, // Adjusted to match the field name in your data
});

const Cv = mongoose.model('cvinfo', cvSchema);

module.exports = Cv;