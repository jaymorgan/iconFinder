'use strict';

var _ = require('lodash');
var Iconcategory = require('./iconcategory.model');

// Get list of IconCategorys
exports.index = function(req, res) {
  Iconcategory.find(function (err, IconCategorys) {
    if(err) { return handleError(res, err); }
    return res.json(200, IconCategorys);
  });
};

// Get a single IconCategory
exports.show = function(req, res) {
  Iconcategory.findById(req.params.id, function (err, IconCategory) {
    if(err) { return handleError(res, err); }
    if(!IconCategory) { return res.send(404); }
    return res.json(IconCategory);
  });
};

// Creates a new IconCategory in the DB.
exports.create = function(req, res) {
  Iconcategory.create(req.body, function(err, IconCategory) {
    if(err) { return handleError(res, err); }
    return res.json(201, IconCategory);
  });
};

// Updates an existing IconCategory in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Iconcategory.findById(req.params.id, function (err, IconCategory) {
    if (err) { return handleError(res, err); }
    if(!IconCategory) { return res.send(404); }
    var updated = _.merge(IconCategory, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, IconCategory);
    });
  });
};

// Deletes a IconCategory from the DB.
exports.destroy = function(req, res) {
  Iconcategory.findById(req.params.id, function (err, IconCategory) {
    if(err) { return handleError(res, err); }
    if(!IconCategory) { return res.send(404); }
    IconCategory.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}