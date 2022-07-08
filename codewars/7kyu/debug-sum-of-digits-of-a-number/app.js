// Instructions // 

/* Debug function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer. The Given Code to Debug is:  function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
} */
 
// Summary //

/* Return the sum of the digits of a number given */

// P: The parameter is always a positive integer. 

// R: Return the sum of the digits. 

// E: 
// getSumOfDigits(123) // => 6
// getSumOfDigits(223) // => 7

/* P: Create a function called getSumOfDigits with a parameter of integer.  
Turn the given integer parameter into a string and put it into an array using the from() method. 
Then change the array of strings into an array of integers and use the reduce method to sum the array.
Return the sum.  */

// Solution for Codewars//

let getSumOfDigits = (integer) => {
    let numsArray = Array.from(String(integer), Number);
    return(numsArray.reduce((a,b) => a + b)); 
}
  
// Solution for showing on console in Browser // 

let getSumOfDigits1 = (integer) => {
    let numsArray = Array.from(String(integer), Number);
    console.log(numsArray.reduce((a,b) => a + b)); 
}

/* Tests */ 

getSumOfDigits1(123) // => 6
getSumOfDigits1(223) // => 7