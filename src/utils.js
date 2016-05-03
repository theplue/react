"use strict";

var _ = require('lodash');
var URL_PREFIX = 'http://localhost:8181/';
// helper routines
module.exports = {
	
  // returns a jQuery GET promise
  makeGETPromise: function(url) {
      return $.getJSON(URL_PREFIX + url);    
  },
  
  // returns a jQuery POST promise
  makePOSTPromise: function(url, data) {
    return $.ajax({
            url: URL_PREFIX + url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data)
    });
  },

  // returns a jQuery PUT promise
  makePUTPromise: function(url, data) {
    return $.ajax({
            url: URL_PREFIX + url,
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data)
    });
  },

  // returns a jQuery DELETE promise
  makeDELETEPromise: function(url) {
      return $.ajax({
         url: URL_PREFIX + url,
         type: 'DELETE',
         contentType: 'application/json'
     });
   }
};