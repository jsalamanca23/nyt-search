"use strict";

$(document).ready(function () {
    
  function nytSearch(queryObj) {

    var API_KEY = "ec31f6bbf356401ca9ac776ffb8a42fc";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";


    $('#searchTerm').attr('data-term', 'searchTerm');
    $('#numOfRecords').attr('data-term', 'records');
    $('#startYear').attr('data-term', 'startYear');
    $('#endYear').attr('data-term', 'endYear');

    var usedByParam = {};
    usedByParam['api-key'] = API_KEY;
    usedByParam['q'] = queryObj.searchTerm;
    
    if(queryObj.startYear) {
      usedByParam['begin_date'] = queryObj.startYear;
    }

    if(queryObj.endYear) {
      usedByParam['end_date'] = queryObj.endYear;
    }

    // console.log(usedByParam);

    queryURL += $.param((usedByParam));

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function (response) {
      console.log('Then!')
      console.log(response);
    })

  }

  $("#search").on("click", function (event) {
    event.preventDefault();

    // We trim off the -'s because the form returns the date format as YYYY-MM-DD
    // The NYT search API wants the dates formatted ads YYMMDD
    var startDate = $('#startYear').val().replace(/-/g, "");
    var endDate = $('#endYear').val().replace(/-/g, "");
  
    var queryObj = {};

    queryObj.searchTerm = $("#searchTerm").val().trim();
    queryObj.numOfRecords = $('#numOfRecords').val();

    if(startDate.length > 0) {
      queryObj.startYear = startDate;
    } 
    
    if(endDate.length > 0) {
      queryObj.endYear = endDate;
    }
    nytSearch(queryObj);
  });

});
