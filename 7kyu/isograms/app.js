// Instructions // 

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. */
 
// Summary //

/* Create a function that returns true or false based on if a word parameter contains any duplicate letters*/

// P: Assume the empty string is an isogram. Ignore letter case. Ignore letter case. 

// R: Return true or false depending on if the word parameter is a isogram. 

// E: 
// isIsogram("Dermatoglyphics"), true
// isIsogram("isogram"), true
// isIsogram(""), true
// isIsogram("aba"), false
// isIsogram("moOse"), false

/* P: Create a function called isIsogram that takes in str as a parameter
create a for loop that goes through each letter
do a comparison using the indexOf and lastIndexOf to determine if the letter has been repeated
return the answer */

// Solution for Codewars//

function isIsogram(str){
    for (let index = 0; index < str.length; index++) {
        let newStr = str.toLowerCase();
        if(newStr.indexOf(newStr[index]) !== newStr.lastIndexOf(newStr[index])){
            return(false)
        }
    }
        return(true);
  }
  
// Solution for showing on console in Browser // 

function isIsogram(str){
    for (let index = 0; index < str.length; index++) {
        let newStr = str.toLowerCase();
        if(newStr.indexOf(newStr[index]) !== newStr.lastIndexOf(newStr[index])){
            console.log(false)
        }
    }
        console.log(true);
  }

/* Tests */ 

isIsogram("Dermatoglyphics") // => true
isIsogram("isogram")         // => true
isIsogram("")                // => true
isIsogram("aba")             // => false
isIsogram("moOse")           // => false