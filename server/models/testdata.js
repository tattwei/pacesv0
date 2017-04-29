let mongoose = require('mongoose'),
	Schema = mongoose.Schema

var TestdataSchema = new Schema({
	record1: 	String,
	subectid:	String,
	timestamp:	{type: Date, default: Date.now()}
})

module.exports = mongoose.model('testdata', TestdataSchema)
