// Instructions // 
/* Write a function to convert a name into initials. */
 
// Summary //
/* Convert a name into initials. */

// P: This kata strictly takes two words with one space in between them. The two words will not always be capital

// R: Return two capital letters with a dot separating them. 

// E: 
// abbrevName("Sam Harris"), "S.H"
// abbrevName("Evan Cole"), "E.C"

/* P: Create a function called abbrevName that takes in a string as a parameter
split the string into two words
using map and slice grab the first letter of each new word
using touppercase to take the letters that were grabbed and uppercase them
join the two resulting letters into a string with a period between them
return the variable */

// Solution for Codewars//

function abbrevName(name){
    let result = name.split(' ')
        .map(x => x.slice(0,1).toUpperCase())
        .join('.')
    return(result);
}
  
// Solution for showing on console in Browser // 

function abbrevName(name){
    let result = name.split(' ')
        .map(x => x.slice(0,1).toUpperCase())
        .join('.')
    console.log(result);
}

/* Tests */ 
abbrevName("Sam Harris") // => "S.H"
abbrevName("Evan Cole")  // => "E.C"
abbrevName("cFlXGOG fJkTJyVmIvZGtJrEfc") // "C.F"