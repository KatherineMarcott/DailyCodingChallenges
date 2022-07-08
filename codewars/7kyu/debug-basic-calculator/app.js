// Instructions // 
/* Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null. 
The Given Code is: 
var calculate = function calculate(a, o, b) {
 var result = 0;
 
 if(O === "+") { 
   return a + b;
   else if(o =!= "-") {
     return a - b;
   }
 if(o !== "/" || b === 0) { 
   return a / b;
 if(0 === "*") 
   return a * b;
 }
 
 return result; 
}*/
 
// Summary //
/* Fix the code until it is working. Given three parameters, two being numbers, and one being a string, add/multiply/divide/subtract the two numbers. Return the result. */

// P: Can be floats and negative numbers. 

// R: Return the result. 

// E: 
// calculate(2,"+", 4)   // => 6
// calculate(6,"-", 1.5) // => 4.5
// calculate(-4,"*", 8)  // => -32
// calculate(49,"/", -7) // => -7
// calculate(8,"m", 2)   // => null

/* P: Go through and fix the debug code. */

// Why is the given code not working? (ONLY FOR DEBUG QUESTIONS)

var calculate = function calculate(a, o, b) {
    var result = 0;
    
    if(o === "+") {  // Changed O to o
      result += a + b; // changed return to result +=
    }                // added a "}"
    else if(o === "-") { // Changed =!= to ===
        result += a - b; // changed return to result +=
    }
    else if(o === '/' && b !== 0) { // Changed the else if statement to: === '/' && b!== 0
      result += a / b; // changed return to result +=
    }               // added a "}"
    else if(o === "*") { // Changed 0 to o // Added "{"
      result += a * b;
    } else {            // Added another else statement to handle other cases such as invalid strings
        result = null; // changed return to result =
    }
    return(result); 
} 

/* Tests */ 

calculate(2,"+", 4)   // => 6
calculate(6,"-", 1.5) // => 4.5
calculate(-4,"*", 8)  // => -32
calculate(49,"/", -7) // => -7
calculate(8,"m", 2)   // => null
calculate(8,"/", 0)   // => null