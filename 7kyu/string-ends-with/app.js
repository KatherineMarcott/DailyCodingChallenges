// Instructions // 
/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). */
 
// Summary //
/* Given two parameters determine if the first parameter ends with the second parameter. */

// P: The parameters will always be strings. 

// R: Return true or false depending on the result.

// E: 
// solution('abcde', 'cde') => true
// solution('abcde', 'abc') => false

/* P: 
Create a function called solution that takes in two parameters called str and ending
Use the endsWith() method to determine if the first string ends with the second.
 */

// Solution for Codewars//

let solution = (str, ending) => str.endsWith(ending);
  
// Solution for showing on console in Browser // 

let solution1 = (str, ending) => console.log(str.endsWith(ending));

/* Tests */ 

solution1('abcde', 'cde') // => true
solution1('abcde', 'abc') // => false