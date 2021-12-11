// Instructions // 

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */
 
// Summary //

/* Given a non negative integer as a parameter, order each indivial integer inside the original negative integer from highest to lowest. */

// P: It will always be a non negative integer. No symbols or letters. 

// R: Return the resulting integer. 

// E: 
// descendingOrder(0)    => 0
// descendingOrder(1021) => 2110

/* function descendingOrder(n){
  turn the integer into a string
  then using the split method, turn the string into an array
  then using the sort method, sort the array from highest to smallest
  then using the join method, turn the array back into a single string
  then using Number, turn the string into a number
  return this result. 
}*/

// Solution for Codewars//

function descendingOrder(n){
    let result = n.toString().split('').sort((a,b) => b-a).join('');

    return(Number(result));
  }
  
// Solution for showing on console in Browser // 

function descendingOrder(n){
    let result = n.toString().split('').sort((a,b) => b-a).join('');

    console.log(Number(result));
  }

/* Tests */ 

descendingOrder(0)    // => 0
descendingOrder(1021) // => 2110