const mongoose = require("mongoose");
const librarySchema = new mongoose.Schema({
title: { type: String, unique: true, trim: true},
  author: String,
  stockQuantity: Number,
  checkedOutQuantity: { type: Number, default: 0 },
});
const Book = mongoose.model("Book", librarySchema);

module.exports = Book;