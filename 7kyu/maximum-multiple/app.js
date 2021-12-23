// Instructions // 
/* Task: Given a Divisor and a Bound, Find the largest integer N, Such That, Conditions : N is divisible by divisor, N is less than or equal to bound, N is greater than 0. */
 
// Summary //

/* Given two n's as parameters, find the largest whole number that is divisible by the first parameter, smaller than the second parameter, and larger than zero */

// P: Both parameters will always be valid positive integers. 

// R: 

// E: 
// maxMultiple(7,100)     => 98
// maxMultiple(2,7)       => 6
// maxMultiple(3,10)      => 9

/* P:  function maxMultiple(divisor, bound){
  create a function with both the divisor and bound parameters
  create a loop where index starts at the bound and decrements by 1 each loop
  using a comparison, test every number if it is divisible by the divisor
  return the first number that meets that requirement
  then break from loop
}*/

// Solution for Codewars//

function maxMultiple(divisor, bound){
    for (let index = bound; index > 0; index--) {
        if(index % divisor === 0){
            return(index); 
            break
        } 
    }
}
  
// Solution for showing on console in Browser // 

function maxMultiple(divisor, bound){
    for (let index = bound; index > 0; index--) {
        if(index % divisor === 0){
            console.log(index); 
            break
        } 
    }
}

/* Tests */ 

maxMultiple(7,100)    // => 98
maxMultiple(2,7)      // => 6
maxMultiple(3,10)     // => 9