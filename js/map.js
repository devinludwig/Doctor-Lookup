var googleMapsKey = require('./../.env').googleMapsKey;
var getDoctors = require('./../js/doctor.js').getDoctors;

exports.drawMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5231, lng: -122.6765},
    zoom: 12
  });
};
