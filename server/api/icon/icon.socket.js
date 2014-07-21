/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Icon = require('./icon.model');

exports.register = function(socket) {
  Icon.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Icon.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('icon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('icon:remove', doc);
}