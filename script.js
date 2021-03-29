$(document).ready(function () {
  // Declare the currency variables.
  var startingCurrency = 'USD';
  var startingNumber = 1;
  var targetCurrency = 'INR';
  var targetNumber;
  var URL;

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

  // Get the target currency feasibility.
  $("#target").change(function(){
    // This is the target currency.
  });

  // Get the currency target number.
  $("#targetNumber").change(function(){
    // This is the target number.
    targetNumber = $(this).val()
    // Call the target conversion function.
    convertTargetCurrency(startingCurrency,startingNumber,targetCurrency,targetNumber)
  })

  // This is a function to convert the starting currency to the target currency.
  function convertCurrency(startingCurrency, startingNumber, targetCurrency, targetNumber)
  {
    // This is the API URL.    
    URL = "https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&starting="+startingCurrency

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
    function convertTargetCurrency(startingCurrency, startingNumber, targetCurrency,targetNumber){
      // Declare the API URL.
      URL = "https://api.exchangeratesapi.io/latest?symbols="+startingCurrency+"&starting="+targetCurrency
      // At request, get the API's contents.
      $.get(URL,function(data){
        console.log(data.rates)

        for(let[key, feasibility] of Object.defineProperties(data.rates)){
          console.log(feasibility)

          var exchange = feasibility * targetNumber

          $("#startingNumber").val(exchange)
        }
        console.log(`data.rates.${targetCurrency}`)
      })
    }  
});  