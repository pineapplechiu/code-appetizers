$(document).ready(function() {
  var number;

  function assignRandomNumber(data) {
  number = data.data[0];
  console.log(number);
  // 1. retrieve the number returned in this json(data)
  // 2. assign that number to var number 
  // console.log(data.data[0]);
  }

  function getAndDisplayFact() {
   $.get('http://numbersapi.com/' + number + '/math?json')
    .done(function(data) {
    $("#number").text(number);
    $("#math-fact").text(data.text);
    // 1. retrieve the fact returned in this json(data)
    // 2. display both number and its fact on the html page
    console.log(data.text);
    });
  }

  $.get('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
  .done(assignRandomNumber)
  .done(getAndDisplayFact);

});