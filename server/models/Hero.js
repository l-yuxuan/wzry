const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: "String" },
  avatar: { type: "String" },
  title: { type: "String" },
  category: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  skills: [
    {
      icon: { type: String },
      name: { type: String },
      description: { type: String },
      icon: { type: String },
      tips: { type: String },
    },
  ],
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Items" }],
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Items" }],
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partner: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
      description: { type: String },
    },
  ],
});

module.exports = mongoose.model("Hero", schema);
