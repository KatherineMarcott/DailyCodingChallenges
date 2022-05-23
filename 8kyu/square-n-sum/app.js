// Instructions // 
/* Complete the square sum function so that it squares each number passed into it and then sums the results together. */
 
// Summary //
/* Take in a parameter called numbers that will be an array of 3 numbers. Square each of the numbers and then sum the results of the squares. Return result. */

// P: if given an empty array return zero.

// R: Return result. 

// E: 
// squareSum([1,2])        => 5
// squareSum([0, 3, 4, 5]) => 50
// squareSum([])           => 0

/* P: function squareSum(numbers){
   create a new array using the map method which will hold the list of numbers after performing the Math.pow method on them. 
   using the reduce method with an initial value of 0, create a sum of the new array. 
   return the resulting array. 
} */

// Solution for Codewars//

function squareSum(numbers){
    let result = numbers.map((x) => x * x).reduce((a, b) => a + b, 0);
    return(result);
}
  
// Solution for showing on console in Browser // 

function squareSum(numbers){
    let result = numbers.map((x) => x * x).reduce((a, b) => a + b, 0);
    console.log(result);
}

/* Tests */ 

squareSum([1,2]);
squareSum([0, 3, 4, 5]);
squareSum([]) 