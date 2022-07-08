// Instructions // 
/* The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough. Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.*/
 
// Summary //
/* Given an array of integers, remove the smallest value. */

// P: Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left. 

// R: Return a new array with the lowest number removed from the original given array. 

// E: 
// removeSmallest([1, 2, 3, 4, 5]) // => [2, 3, 4, 5]
// removeSmallest([5, 3, 2, 1, 4]) // => [5, 3, 2, 4]
// removeSmallest([2, 2, 1, 2, 1]) // => [2, 2, 2, 1]
// removeSmallest([])              // => []

/* P:  Create a function called removeSmallest with a parameter of numbers. 
using Math.min to find the smallest number. 
Create a new array of numbers by using slice on the numbers array.  
Using splice remove the smallest number from the array and return the new array */

// Solution for Codewars//

function removeSmallest(numbers) {
    if(!numbers)return [];
    let min=Math.min.apply(null,numbers);
    let newArr = numbers.slice(0);
    newArr.splice(newArr.indexOf(min),1);
    return newArr;
}
  
// Solution for showing on console in Browser // 

function removeSmallest(numbers) {
    if(!numbers)return [];
    let min=Math.min.apply(null,numbers);
    let newArr = numbers.slice(0);
    newArr.splice(newArr.indexOf(min),1);
    console.log(newArr);
}

/* Tests */ 

removeSmallest([1, 2, 3, 4, 5]) // => [2, 3, 4, 5]
removeSmallest([5, 3, 2, 1, 4]) // => [5, 3, 2, 4]
removeSmallest([2, 2, 1, 2, 1]) // => [2, 2, 2, 1]
removeSmallest([])              // => []