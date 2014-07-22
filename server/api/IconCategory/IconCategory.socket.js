/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Iconcategory = require('./IconCategory.model');

exports.register = function(socket) {
  Iconcategory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Iconcategory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('IconCategory:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('IconCategory:remove', doc);
}