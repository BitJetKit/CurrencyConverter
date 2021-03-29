$(document).ready(function () {
  // Declare the currency variables.
  var startingCurrency = 'USD';
  var startingNumber = 1;
  var targetCurrency = 'INR';
  var targetNumber;
  var url;

  convertCurrency(startingCurrency, startingNumber, targetCurrency, targetNumber)

  // Get the starting currency value.
  $("#starting").change(function (){
    // This is the starting currency.
    startingCurrency = $(this).children("option:selected").val();

    // Call the currency converting function.
    convertCurrency(startingCurrency, startingNumber, targetCurrency, targetNumber)
  });

  // Get the starting currency number.
  $("#startingNumber").change(function(){
    // This is the base number.
    startingNumber = $(this).val()

    // Call the currency converting function
    convertCurrency(startingCurrency,startingNumber,targetCurrency,targetNumber)
  });

  // Get the currency target number.
  $("#targetNumber").change(function(){

  });
});  