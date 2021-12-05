// Instructions // 

/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?". */
 
// Summary //

/* Given a parameter, return the given statement with the parameter inside */

// P: The given parameter will always be a string. 

// R: Return "Hello, <name> how are you doing today?"

// E: 
// greet("Ryan"), "Hello, Ryan how are you doing today?"
// greet("Shingles"), "Hello, Shingles how are you doing today?"

/* P:
  create a function that takes in the name parameter
  create a template literal to include the phrase and the given parameter. 
  return this template literal  */

// Solution for Codewars//

let greet1 = (name) => `Hello, ${name} how are you doing today?`
  
// Solution for showing on console in Browser // 

let greet = (name) => console.log(`Hello, ${name} how are you doing today?`)

/* Tests */ 

greet("Ryan")     // => "Hello, Ryan how are you doing today?"
greet("Shingles") // => "Hello, Shingles how are you doing today?"