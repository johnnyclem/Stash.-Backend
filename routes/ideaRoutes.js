var Idea = require('../models/Idea');

module.exports.collection = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Idea.find({}, function(err, ideas) {
    if (err) {
      res.send(500, {err: err});
      return false;
    }
    res.send(ideas);
  })
}
