var mongoose = require('mongoose');

var paciente = new mongoose.Schema({
	name: String,
	disease: String,
	history: String,
	evolution: String
});

var Patient = mongoose.model('Patient', paciente);

module.exports = Patient;
