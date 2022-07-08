// Instructions // 

/* You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division

Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number. */
 
// Summary //

/* Take the string provided and based off of the operator in the string, output the expected string value */

// P: Following Valid Operators: + addition, - subtraction, * multiplication, // integer division, there could be empty strings, input will always be strings, just '.' and the operator will be inside the string parameter 

// R: Return the expected output, if the output is = to 0, then return  an empty string

// E: 
// "..... + ..............." => "...................."
// "..... - ..."             => ".."
// "..... * ..."             => "..............."
// "..... // .."             => ".."

/* P:  
function dotCalculator (equation) {
    create variable that takes the parameter and splits it into an array. 
    
    create a conditional that will test which operator is included in the array

    based off of each operator will return the result
*/

// Solution for Codewars//

function dotCalculator (equation) {
    newEquation = equation.split("+" || "-" || "*" || "//").join("").split(" "); 
      
        if(equation.includes("+")){
            return(newEquation.join(""));

        } else if(equation.includes("-")){
            return('.'.repeat(newEquation[0].length - newEquation[2].length));

        } else if(equation.includes("*")){
            return('.'.repeat(newEquation[0].length * newEquation[2].length));

        } else if(equation.includes("//")){
            return('.'.repeat(newEquation[0].length / newEquation[2].length));
        } else {
          return ""
        }
    }
  
// Solution for showing on console in Browser // 

function dotCalculator (equation) {
    newEquation = equation.split("+" || "-" || "*" || "//").join("").split(" "); 
      
        if(equation.includes("+")){
            console.log(newEquation.join(""));

        } else if(equation.includes("-")){
            console.log('.'.repeat(newEquation[0].length - newEquation[2].length));

        } else if(equation.includes("*")){
            console.log('.'.repeat(newEquation[0].length * newEquation[2].length));

        } else if(equation.includes("//")){
            console.log('.'.repeat(newEquation[0].length / newEquation[2].length));
        } else {
          return ""
        }
    }

/* Tests */ 

dotCalculator("..... + ...............");
dotCalculator("..... - ...");
dotCalculator("..... * ...");
dotCalculator("..... // ..");
