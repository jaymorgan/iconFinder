'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IconSchema = new Schema({
  name: String,
  char: String,
  class: String,
  unicode: String,
  active: Boolean,
  tags: { type: [String], index: true }
});

module.exports = mongoose.model('Icon', IconSchema);