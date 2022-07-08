// Instructions // 

/* Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number. */
 
// Summary //

/* Return the length of the longest word as a number. */

// P: There will only be one 'longest' word.

// R: Return the value. 

// E: 
// findLongest("The quick white fox jumped around the massive dog") // =>  7
// findLongest("Take me to tinseltown with you") // => 10

/* P: Create a function called findLongest which takes in a string parameter called str. 
Using split, split the string into words.
Create a variable to hold the longest word
Loop through the array of words and create a comparison between each word and the longest word. 
Return the length of the longest word. 
The given code to debug is: 
function findLongest(str) (
  var spl = str.split(" ");
  var longest = 0
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
) */

// Solution for Codewars//

let findLongest = (str) => {
    let splitStr = str.split(" "); 
    let longest = '';
        for (let index = 0; index < splitStr.length; index++) {
            const element = splitStr[index];
            if(element.length > longest.length) {
                longest = element; 
            }
        }
    return(longest.length);
}
  
// Solution for showing on console in Browser // 

let findLongest1 = (str) => {
    let splitStr = str.split(" "); 
    let longest = '';
        for (let index = 0; index < splitStr.length; index++) {
            const element = splitStr[index];
            if(element.length > longest.length) {
                longest = element; 
            }
        }
    console.log(longest.length);
}

/* Tests */ 

findLongest1("The quick white fox jumped around the massive dog") // => 7
findLongest1("Take me to tinseltown with you") // => 10