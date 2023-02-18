
// Used by both methods  
var outputMessage = document.getElementById("outputMess");
var outputEvenNums = document.getElementById("outputEvens"); 
var evenNumbers = [];


function showEvenNumbers() {
    // Get user input values from textboxes
    var start = parseInt(document.getElementById("startInput").value);
    var end = parseInt(document.getElementById("endInput").value);
    var step = parseInt(document.getElementById("stepInput").value);

    // Check if inputs are numeric and step is positive
    if (isNaN(start) || isNaN(end) || isNaN(step) || step <= 0) {
      outputMessage.style.display = "block";
      outputMessage.style.color = "red";
      outputMessage.innerHTML = "Please enter numeric values for start, end, and step (step must be positive)";
      return false;
    }
  
    // Check if end value is greater than start value
    if (end <= start) {
      outputMessage.style.display = "block";
      outputMessage.style.color = "red";
      outputMessage.innerHTML = "Ending number must be greater than starting number";
      return false;
    }
  
    // Calculate even numbers between start and end values using step value
    evenNumbers = [];
    for (var i = start; i <= end; i += step) {
      if (i % 2 === 0) {
        evenNumbers.push(i); 
      }
    }
  
    // Output even numbers to page
    if (evenNumbers.length > 0) {
      var numList = "";
      for (var j = 0; j < evenNumbers.length; j++){
        numList += "<li style='list-style: none;'>" + evenNumbers[j] + "</li>";
      }
      document.getElementById("outputMess").innerHTML = "Even numbers between " + start + " and " 
      + end + " with a step of " + step + ":";
      document.getElementById("outputEvens").innerHTML = numList;
    } else {
      document.getElementById("outputMess").innerHTML = "No even numbers between " + start + " and " 
      + end + " with a step of " + step;
    }
    outputMessage.style.color = "black";
    outputMessage.style.display = "block";
    outputEvenNums.style.display = "block";   
    return false;
  }

  function resetDisplay() {
    evenNumbers = [];
    outputMessage.style.display = "none";
    outputEvenNums.style.display = "none";    
  }