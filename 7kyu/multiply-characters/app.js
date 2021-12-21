// Instructions // 

/* Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why... Code That is Not working: function spam(number){
  //TODO: Not returning the expected value.
  return "hue" * number;
} */
 
// Summary //

/* So given a parameter of n that is an integer, return the string "hue" n times. */

// P: n will always be a positive valid integer. 

// R: return result of the spam function

// E: 
// spam(1) -> 'hue'
// spam(6)  // -> 'huehuehuehuehuehue'
// spam(14) // -> 'huehuehuehuehuehuehuehuehuehuehuehuehuehue'

/* P: function spam(number){
  //TODO: Not returning the expected value.
  return "hue" * number;
} ^ Give this code, fix it so that it returns the correct number of "hue" instead of NaN
    Create a function that holds the parameter n
    create a variable to hold our result string
    loop through each number starting at 1 going up to n
    for each number going to n add "hue" to the result string
    return our result
*/

// Solution for Codewars//

function spam(n){
    let result = '';
    for (let index = 1; index <= n; index++) {
        result += "hue";  
    }
    return(result)
  }
  
// Solution for showing on console in Browser // 

function spam(n){
    let result = '';
    for (let index = 1; index <= n; index++) {
        result += "hue";  
    }
    console.log(result)
  }

/* Tests */ 

spam(1)  // -> 'hue'
spam(6)  // -> 'huehuehuehuehuehue'
spam(14) // -> 'huehuehuehuehuehuehuehuehuehuehuehuehuehue'