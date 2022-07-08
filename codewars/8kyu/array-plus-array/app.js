// Instructions // 

/* Task: I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help. */
 
// Summary //

/* Return the sum of two arrays and their elements.  */

// P: Each array includes only integer numbers. Output is a number too.

// R: Return the sum of the two arrays. 

// E: 
// arrayPlusArray([1, 2, 3], [4, 5, 6])       // => 21
// arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // => -21

/* P: Create a function that is called arrayPlusArray that takes in two parameters arr1, arr2.
Using the reduce method, sum all the elements in both arrays
Add the two reduced results together and return the value 
The given code to sort through and debug is:
 function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}*/

// Solution for Codewars//

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = arr1.reduce((a,b) => a + b);
    let sumArr2 = arr2.reduce((a,b) => a + b);
    let totalSum = sumArr1 + sumArr2;
    return(totalSum); 
}

// Solution for showing on console in Browser // 

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = arr1.reduce((a,b) => a + b);
    let sumArr2 = arr2.reduce((a,b) => a + b);
    let totalSum = sumArr1 + sumArr2;
    console.log(totalSum); 
}

/* Tests */ 

arrayPlusArray([1, 2, 3], [4, 5, 6])       // => 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // => -21