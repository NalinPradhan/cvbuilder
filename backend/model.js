  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
const cvSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  schoolName: { type: String },
  course: { type: String },
  date: { type: Date },
  companyName: { type: String },
  title: { type: String },
  rsb: { type: String },
  from: { type: Date },
  to: { type: Date },
});

module.exports = mongoose.model("cvinfo", cvSchema);
