// Instructions // 
/* Given an array of integers, return a new array with each value doubled. */
 
// Summary //
/* Given an array of integers, return a new array with each value doubled. */

// P: Will always be integers. No symbols or letters. 

// R: Return the result as a new array. 

// E: 
// maps([1, 2, 3])        => [2, 4, 6]
// maps([4, 1, 1, 1, 4])  => [8, 2, 2, 2, 8]

/* P:  
Create a function called maps that takes in a parameter called x
Using the map method, go through each item in the array and multiply by two
return the new array */

// Solution for Codewars//

let maps = (x) => {
    let newMap = x.map((element) => element * 2);
    return(newMap);
} 
  
// Solution for showing on console in Browser // 

let maps1 = (x) => {
    let newMap = x.map((element) => element * 2);
    console.log(newMap);
} 

/* Tests */ 

maps1([1, 2, 3])       // => [2, 4, 6]
maps1([4, 1, 1, 1, 4]) // => [8, 2, 2, 2, 8]