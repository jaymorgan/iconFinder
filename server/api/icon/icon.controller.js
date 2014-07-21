'use strict';

var _ = require('lodash');
var Icon = require('./icon.model');

// Get list of icons
exports.index = function(req, res) {
  Icon.find(function (err, icons) {
    if(err) { return handleError(res, err); }
    return res.json(200, icons);
  });
};

// Get a single icon
exports.show = function(req, res) {
  Icon.findById(req.params.id, function (err, icon) {
    if(err) { return handleError(res, err); }
    if(!icon) { return res.send(404); }
    return res.json(icon);
  });
};

// Creates a new icon in the DB.
exports.create = function(req, res) {
  Icon.create(req.body, function(err, icon) {
    if(err) { return handleError(res, err); }
    return res.json(201, icon);
  });
};

// Updates an existing icon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Icon.findById(req.params.id, function (err, icon) {
    if (err) { return handleError(res, err); }
    if(!icon) { return res.send(404); }
    var updated = _.merge(icon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, icon);
    });
  });
};

// Deletes a icon from the DB.
exports.destroy = function(req, res) {
  Icon.findById(req.params.id, function (err, icon) {
    if(err) { return handleError(res, err); }
    if(!icon) { return res.send(404); }
    icon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}