// Instructions // 

/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
... 
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
*/
 
// Summary //
/* Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output) */

// P: The triangle will always be the same. 

// R: Return the sum of the row. 

// E: 
// rowSumOddNumbers(1) -->  1
// rowSumOddNumbers(2) --> 3 + 5 = 8
// rowSumOddNumbers(42), 74088)

/* P: function rowSumOddNumbers(n) {
	Due to the relationship between the sums of each row and n, I can use the Math.pow method
}  */

// Solution for Codewars//

function rowSumOddNumbers(n) {
	return(Math.pow(n,3))
}
  
// Solution for showing on console in Browser // 

function rowSumOddNumbers(n) {
	console.log(Math.pow(n,3))
}

/* Tests */ 

rowSumOddNumbers(1)  // -->  1
rowSumOddNumbers(2)  // --> 3 + 5 = 8
rowSumOddNumbers(42) // --> 74088