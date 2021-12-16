// Instructions // 

/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. */
 
// Summary //

/* Create a function that returns the sum of the two lowest positive numbers */

// P: No floats or non-positive integers will be passed. 

// R: Return the sum

// E: 
// sumTwoSmallestNumbers([19, 5, 42, 2, 77]) => 7
// sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) => 3453455

/* P: function sumTwoSmallestNumbers(numbers) {  
  sort array from smallest to largest 
  then add the first two (arr[0] and arr[1]) together
  return the result  
} */

// Solution for Codewars//

function sumTwoSmallestNumbers(numbers) {  
    let newN = numbers.sort((a, b) => a -b);
    return(newN[0] + newN[1]);
  }
  
// Solution for showing on console in Browser // 

function sumTwoSmallestNumbers(numbers) {  
    let newN = numbers.sort((a, b) => a -b);
    console.log(newN[0] + newN[1]);
  }

/* Tests */ 

sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // => 7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // => 3453455