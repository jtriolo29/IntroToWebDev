
var testArray1 = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum1 = 0;

var newElement = prompt("Enter a number of your choice:");
testArray1.push(parseInt(newElement));

for (var position = 0; position < testArray1.length; position++) {
    sum1 += testArray1[position];
}

console.log("The sum of " + testArray1 + " is: " + sum1);


// Challenge
// Define an empty array
var testArray2 = [];

// Prompt the user for five numbers and add each number to the array
for (var i = 0; i < 5; i++) {
  var num = parseInt(prompt("Enter a number:"));
  testArray2.push(num);
}

// Calculate the sum of the numbers the user entered
var sum2 = 0;
for (var i = 0; i < testArray2.length; i++) {
  sum2 += testArray2[i];
}

console.log("The sum of " + testArray2 + " is: " + sum2);
