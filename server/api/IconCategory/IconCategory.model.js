'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IconcategorySchema = new Schema({
  name: String,
  category: String,
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Iconcategory', IconcategorySchema);