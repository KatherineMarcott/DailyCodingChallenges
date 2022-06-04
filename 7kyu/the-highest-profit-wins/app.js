// Instructions // 
/* Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest. Write a function that returns both the minimum and maximum number of the given list/array. */
 
// Summary //
/* Write a function that returns both the minimum and maximum number of the given list/array. */

// P: All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// R: Return an array with the minimum and maxinum number of the given array. 

// E: 
// minMax([1,2,3,4,5]) --> [1,5]
// minMax([2334454,5]) --> [5, 2334454]
// minMax([1])         --> [1, 1]

/* P: Create a function called minMax with the parameters of arr.
Using the Math.min and Math.max methods, return a new array with the min and max numbers.  */

// Solution for Codewars//

let minMax = (arr) => [Math.min(...arr), Math.max(...arr)]
  
// Solution for showing on console in Browser // 

let minMax1 = (arr) => console.log([Math.min(...arr), Math.max(...arr)])

/* Tests */ 

minMax1([1,2,3,4,5]) // --> [1,5]
minMax1([2334454,5]) // --> [5, 2334454]
minMax1([1])         // --> [1, 1]