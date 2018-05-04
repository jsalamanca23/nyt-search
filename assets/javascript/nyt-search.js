
$(document).ready(function () {

  function nytSearch(queryObj) {

    console.log(queryObj);

    var API_KEY = "ec31f6bbf356401ca9ac776ffb8a42fc";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    // $('.form-group’).each(function() {
    //   $(this).attr(‘data-’ + id,‘PickleRick’);
    // })

    $('#searchTerm').attr('data-term', 'searchTerm');
    $('#numOfRecords').attr('data-term', 'records');
    $('#startYear').attr('data-term', 'startYear');
    $('#endYear').attr('data-term', 'endYear');

    var usedByParam = {};
    usedByParam['api-key'] = queryObj.searchTerm;
    usedByParam['q'] = queryObj.searchTerm;
    
    if(queryObj.startYear) {
      usedByParam['begin_date'] = queryObj.startYear;
    }

    if(queryObj.endYear) {
      usedByParam['end_date'] = queryObj.endYear;
    }

    console.log(usedByParam);
    
    // queryURL += $.param(usedByParam);

    // $.ajax({
    //   url: queryURL,
    //   method: 'GET'
    // }).then(function (response) {
    //   console.log('Then!')
    //   console.log(response);
    // })
  }

  $("#search").on("click", function (event) {
    event.preventDefault();
    console.log($('#startYear').val().length);
    console.log($('#endYear').val())
    var startDate = $('#startYear').val().replace(/-/g, "");
    var endDate = $('#endYear').val().replace(/-/g, "");

    var queryObj = {};

    if(!startDate.length === 0) {
      queryObj.startYear = startDate;
    } 
    
    if(!endDate.legnth === 0) {
      queryObj.endYear = endDate;
    }

    queryObj.searchTerm = $("#searchTerm").val().trim();
    queryObj.numOfRecords = $('#numOfRecords').val();

    nytSearch(queryObj);
  });

});
