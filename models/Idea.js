var mongoose = require('mongoose');

var ideaSchema = mongoose.Schema({
  body: String,
  title: String,
  icon: String,
  author: String
});

module.exports = mongoose.model('Idea', ideaSchema);
