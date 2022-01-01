// Instructions 

/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty. */

// PREP

// Take the helper function provided and fix it. Capitalize the first letter of the str provided with the parameter 'word' 

// P: String. From 1 to 10 characters in length. It will never be empty. 
// R: Return the capitalized word. 
// E: Word = 'i' should return 'I'. Word = 'case' should return ='Case'
/* P: function capitalizeWord(word) {
 create variable to hold the result in 
 toUpperCase on the first index of the string
 add word.slice(1) method to add the rest of the string to result 
 return the result
}
*/

/* Solution */ 

function capitalizeWord(word) {
    let result = word[0].toUpperCase() + word.slice(1);
    return result; 
  }

