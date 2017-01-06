var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue, specialty) {
  if (medicalIssue == '') {
    searchType = 'specialty_uid=' + specialty;
  } else {
    searchType = 'query=' + medicalIssue;
  }
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?'+ searchType + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    console.log(result)
      $('#doctor-list').empty()
      result.data.forEach(function(doctor) {
        $('#doctor-list').append("<li class='panel panel-default'><h4 class='panel-heading'>" + doctor.profile.first_name + ' ' + doctor.profile.middle_name + ' ' + doctor.profile.last_name + ', ' + doctor.profile.title + "</h4><div class='panel-body'>" + doctor.profile.bio + "</div></li>");
      });
    })
  .fail(function(error){
    console.log("fail");
  });
};

exports.getSpecialties = function() {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
  .then(function(result) {
      $('#specialty').empty()
      console.log(result)
      result.data.forEach(function(specialty) {
        $('#specialty').append("<option value=" + specialty.uid + ">" + specialty.name + "</option>")
      });
    })
  .fail(function(error){
    console.log("fail");
  });
};
