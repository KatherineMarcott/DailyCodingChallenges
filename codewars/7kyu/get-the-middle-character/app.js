// Instructions // 

/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */
 
// Summary //

/* Given a string as a parameter, return the middle character if odd, if even, return the two middle characters.  */

// P: Will always be given a string. 

// R: Return the middle or two middle characters as a string. 

// E: 
// getMiddle("test"),"es"
// getMiddle("testing"),"t"

/* P: Create a function that takes in a string as a parameter 
comparison to determine if the string is even or odd.
using the slice method we will grab the middle or the two middle depending on the result of the comparison
return the slice method result
*/

// Solution for Codewars//

let getMiddle1 = (s) => s.length % 2 === 0 ? s.substring(s.length / 2 - 1, s.length / 2 + 1) : s.substring(s.length/2, s.length/2 + 1)

// Solution for showing on console in Browser // 

let getMiddle = (s) => s.length % 2 === 0 ? console.log(s.substring(s.length / 2 - 1, s.length / 2 + 1)) : console.log(s.substring(s.length/2, s.length/2 + 1))

/* Tests */ 

getMiddle("test")    // => "es"
getMiddle("testing") // => "t"
getMiddle("middle")  // => "dd"