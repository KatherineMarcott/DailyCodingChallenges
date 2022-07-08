// Instructions // 
/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */
 
// Summary //
/* Given an array of numbers, cube them, and then add the sum of the odd numbers. */

// P: Return undefined if any of the values are not numbers. 

// R: Return the result. 

// E: 
// cubeOdd([1, 2, 3, 4])      // => 28
// cubeOdd([-3,-2,2,3])       // => 0
// cubeOdd(["a",12,9,"z",42]) // => undefined

/* P: Create a function called cubeOdd that takes in a parameter called arr. 
Create a variable that will hold the result
Loop through each element with a for loop, and if the element is odd, cube the element and add it to the result. 
if the array has an invalid number return undefined  */

// Solution for Codewars//

let cubeOdd = (arr) => {
    let result = 0; 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(typeof(element) !== 'number'){
            result = undefined;
            break;
        }
        else if(element % 2 !== 0) {
            result += Math.pow(element, 3); 
        }
    }
    return(result);
}
  
// Solution for showing on console in Browser // 

let cubeOdd1 = (arr) => {
    let result = 0; 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(typeof(element) !== 'number'){
            result = undefined;
            break;
        }
        else if(element % 2 !== 0) {
            result += Math.pow(element, 3); 
        }
    }
    console.log(result);
}

/* Tests */ 

cubeOdd1([1, 2, 3, 4])      // => 28
cubeOdd1([-3,-2,2,3])       // => 0
cubeOdd1(["a",12,9,"z",42]) // => undefined