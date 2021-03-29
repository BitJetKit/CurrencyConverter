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

    // Call the currency converting function.
    convertCurrency(startingCurrency,startingNumber,targetCurrency,targetNumber)
  });

  // Get the currency target number.
  $("#targetNumber").change(function(){
    // Call the target conversion function.
    convertTargetCurrency(startingCurrency,startingNumber,targetCurrency,targetNumber)
  })

  // This is a function to convert the starting currency to the target currency.
  function convertCurrency(startingCurrency, startingNumber, targetCurrency, targetNumber)
  {
    // This is the API URL.    
    URL = "https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&base="+startingCurrency

    // At request, get the API's contents.
    $.get(URL,function(data){
      console.log(data.rates)

      for(let[key, feasibility] of Object.defineProperties(data.rates)){
        var exchange = feasibility * startingNumber

        $("#targetNumber").val(exchange)
      }
      console.log(`data.rates.${targetCurrency}`)
    })
  }
});  