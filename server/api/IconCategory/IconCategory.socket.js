/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Iconcategory = require('./iconcategory.model');

exports.register = function(socket) {
  Iconcategory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Iconcategory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('iconcategory:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('iconcategory:remove', doc);
}