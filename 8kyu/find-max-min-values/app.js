// Instructions // 
/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list. */
 
// Summary //
/* Create two functions named max and min, that both take in a list of integers. Return the max or min depending on which function was called.  */

// P: You may consider that there will not be any empty arrays/vectors.

// R: return the result of both the max and min functions. 

// E: 
// min([-52, 56, 30, 29, -54, 0, -110]) // => -110
// max([4,6,2,1,9,63,-134,566])         // => 566
// (max([5])                            // => 5

/* P: Create two functions called max and min that will take in an array of integers. 
using Math.min find the minimum and return it. 
using Math.max find the max and return it.  */

// Solution for Codewars//

let max = (list) => Math.max(...list); 
let min = (list) => Math.min(...list);
  
// Solution for showing on console in Browser // 

let max1 = (list) => console.log(Math.max(...list));
let min1 = (list) => console.log(Math.min(...list));

/* Tests */ 

min1([-52, 56, 30, 29, -54, 0, -110]) // => -110
max1([4,6,2,1,9,63,-134,566])         // => 566
max1([5])                             // => 5