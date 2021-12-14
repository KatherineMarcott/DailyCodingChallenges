// Instructions // 

/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even". */
 
// Summary //

/* Determine whether the sum of a given array is even or odd */

// P: if the sum is 0 consider it even, if the array is empty consider it 0. 

// R: Return "odd" or "even" 

// E: 
// oddOrEven([0])         => 'even'
// oddOrEven([1])         => 'odd'
// oddOrEven([0, -1, -5]) => 'even'
// oddOrEven([])          => 'even'
// oddOrEven([0, 1, 2])   => 'odd'

/* P: function oddOrEven(array) {
   use reduce to add the numbers in the array together
   use comparison to determine if it is odd or even
}*/

// Solution for Codewars//

function oddOrEven(array) {
    return(array.reduce((a,b) => a+b,0)% 2 === 0 ? 'even' : 'odd')
}
  
// Solution for showing on console in Browser // 

function oddOrEven(array) {
    console.log(array.reduce((a,b) => a+b,0)% 2 === 0 ? 'even' : 'odd')
}

/* Tests */ 

oddOrEven([0])         // => 'even'
oddOrEven([1])         // => 'odd'
oddOrEven([0, -1, -5]) // => 'even'
oddOrEven([])          // => 'even'
oddOrEven([0, 1, 2])   // => 'odd'