const request = require('request');
//https://www.google.com/fdsafsafsa.html. 404
request('http://example.edu:80', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
