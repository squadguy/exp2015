var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	name: String,
	age: String
})

mongoose.model('users', usersSchema);
