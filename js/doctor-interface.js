var getDoctors = require('./../js/doctor.js').getDoctors;
var getSpecialties = require('./../js/doctor.js').getSpecialties;
var apiKey = require('./../.env').apiKey;

$(function() {
  getSpecialties()
  $('#malady').submit(function(event) {
    event.preventDefault();
    malady = $('#malady-input').val();
    specialty = $('#specialty').val();
    getDoctors(malady, specialty);
  });
});
