// Instructions // 

/* Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between. */
 
// Summary //

/* Return the correct number starting at 1 given a list of strings inside of an array */

// P: If given an empty array, it should return empty array

// R: Return the resulting numbered array.

// E: 
// number([])               => []
// number(["a", "b", "c"])  => ["1: a", "2: b", "3: c"]

/* P: function number(array){
    create a new array
    loop through the array parameter and with each loop, add onto the new array the index + 1 followed by the string given. 
    return the new array
} */

// Solution for Codewars//

function number(array){
    let newArray = []
    for (let index = 0; index < array.length; index++) {
       const element = array[index];
       newArray.push(`${index + 1}: ${element}`);
   }
   return(newArray);
}
  
// Solution for showing on console in Browser // 

function number(array){
    let newArray = []
    for (let index = 0; index < array.length; index++) {
       const element = array[index];
       newArray.push(`${index + 1}: ${element}`);
   }
   console.log(newArray);
}

/* Tests */ 

number(["a", "b", "c"]); // => ["1: a", "2: b", "3: c"]
number([])               // => []