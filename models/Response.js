const mongoose = require('mongoose');

const responseText = mongoose.Schema({
  initiative: String,
  rating: String,
  likeText: String,
  dislikeText: String,
  suggestionText: String,
});

module.exports = mongoose.model('responseText', responseText);