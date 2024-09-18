// backend/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  phone: String, // Adjusted to match the field name in your data
});

const User = mongoose.model('User', userSchema);

module.exports = User;