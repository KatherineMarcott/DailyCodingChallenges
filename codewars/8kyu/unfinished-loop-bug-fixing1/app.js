// Instructions // 
/* Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop! */
 
// Summary //
/* Fix the infinite for loop so that it counts up to the number parameter and adds each number as a new element to the array*/

// P: The parameter will always be whole, positive, valid integers. 

// R: Return the fixed for loop. 

// E: 
// createArray(5)    => [1,2,3,4,5]
// createArray(2)    => [1,2]

/* P:  function createArray(number){
  let newArray = [];
  
  for(let counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray; 
}
^ This is the initial code given. The loop is infinite because there is no incremental change to the counter during each new loop. I will add an incremental change to the loop for my solution. 
*/

// Solution for Codewars//

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

// Solution for showing on console in Browser // 

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    console.log(newArray);
  }

/* Tests */ 

createArray(5)   // => [1,2,3,4,5]
createArray(2)   // => [1,2]
