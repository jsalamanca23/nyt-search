
$(document).ready(function() {

  var API_KEY = "ec31f6bbf356401ca9ac776ffb8a42fc";
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  

  // $('.form-group’).each(function() {
  //   $(this).attr(‘data-’ + id,‘PickleRick’);
  // })

  $('#searchTerm').attr('data-term','searchTerm');
  $('#numOfRecords').attr('data-term','records');
  $('#startYear').attr('data-term','startYear');
  $('#endYear').attr('data-term','endYear');


  queryURL += $.param({
    'api-key': API_KEY,
    'q': 'Terrorists'
    // 'begin_date': null,
    // 'end_date': null
  })

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
  })

});
