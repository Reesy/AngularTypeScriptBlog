/// <reference path="../server.ts" />
var Server;
(function (Server) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var blogSchema = new Schema({
        title: { type: 'String', default: "No Title" },
        content: { type: 'String', default: "No Content" },
        author: { type: 'String', default: "Admin" },
        date: { type: Date, default: Date.now }
    });
    module.exports = mongoose.model('Blog', blogSchema);
})(Server || (Server = {}));
