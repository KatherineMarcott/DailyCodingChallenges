// Instructions // 
/* Given a number n, return the number of positive odd numbers below n, EASY! */
 
// Summary //
/* Given the parameter n, create a function that will count the number of positive odd numbers below n. */

// P: n will always be a valid integer. No symbols or letters. It will be a number input not a string. n will always be positive. MUST BE EFFICIENT. 

// R: Return the result.

// E: 
// oddCount(7)     -> 3 
// oddCount(15)    -> 7
// oddCount(15023) -> 7511

/* P: function oddCount(n){
  create a function that takes in the parameter n. 
  n/2 results in half the number and using math.floor(n/2) will give the result
  return result
} */

// Solution for Codewars//

function oddCount(n){
    return(Math.floor(n/2));
}
  
// Solution for showing on console in Browser // 

function oddCount(n){
    console.log(Math.floor(n/2));
}

/* Tests */ 

oddCount(7)     // -> 3 
oddCount(15)    // -> 7
oddCount(15023) // -> 7511