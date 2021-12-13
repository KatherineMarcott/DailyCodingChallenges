// Instructions // 

/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */
 
// Summary //
/* reverse the digits in a number and put it into an array */

// P: Will only give a non-negative number. 

// R: Return the resulting array

// E: 
// digitize(35231)    => [1,3,2,5,3]
// digitize(0)        => [0]

/* P: function digitize(n) {
    use the tostring method to turn n into a string

    use the split method to create an array

    use the reverse method to reverse the array

    use the map to create an array that is changed to numbers

    return the array
} */

// Solution for Codewars//

let digitize1 = (n) => (n.toString().split('').reverse().map(Number))
  
// Solution for showing on console in Browser // 

let digitize = (n) => console.log(n.toString().split('').reverse().map(Number))

/* Tests */ 

digitize(35231)    // => [1,3,2,5,3]
digitize(0)        // => [0]