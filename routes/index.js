var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongo = require('mongodb');
var Patient = require('../models/pacientes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/pacientelist', function(req, res){

Patient.find({}, function (err, docs) {
  res.render('pacientelist', {
    data: docs
  
  });

});

});

router.get('/pacientedata1', function(req, res){

Patient.find({}, function (err, docs) {
  res.render('pacientedata1', {
    data: docs
  
  });

});

});





router.post('/addpact', function(req, res){

  // we're connected!

  var paciente = new Patient();
  paciente.name = req.body.pactname;
  paciente.disease = req.body.disease;
  paciente.history = req.body.history;
  paciente.evolution = req.body.evolution;


  paciente.save(function (err){
    if (err) {
            // If it failed, return error
            res.send(err);
        }
        else {
            // And forward to success page
            res.redirect('/pacientelist');
        }
  });
});


module.exports = router;
