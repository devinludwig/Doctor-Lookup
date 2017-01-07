var googleMapsKey = require('./../.env').googleMapsKey;

$('head').append("<script src=https://maps.googleapis.com/maps/api/js?key=" + googleMapsKey + "></script>"
);

$(function() {
  $('#malady').submit(function(event) {
  });
});
