var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

var GameSchema   = new Schema({
    title: String,
    platform:String,
    score:Number,
    genre:String,
    editors_choice:String
});

module.exports = mongoose.model('Games', GameSchema);