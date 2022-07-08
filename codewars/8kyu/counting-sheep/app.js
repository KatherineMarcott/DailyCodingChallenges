// Instructions // 

/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */
 
// Summary //

/* Count the amount of trues in the array and return the resulting amount */

// P: The test cases will say either true or false. 

// R: Return the total amount of sheep present

// E: 
// countSheeps([true,  true,  true,  false,
/* true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true]); -> 17 */


/* P: function countSheeps(arrayOfSheep) {
  create a total count variable
  then loop through the array
  add +1 to the total count if it === true. 
} */

// Solution for Codewars//

function countSheeps(arrayOfSheep) {
    let total = 0;
    arrayOfSheep.forEach(element => {
        if(element === true){
            total += 1; 
        }
    });
    return(total);
  }
  
// Solution for showing on console in Browser // 

function countSheeps(arrayOfSheep) {
    let total = 0;
    arrayOfSheep.forEach(element => {
        if(element === true){
            total += 1; 
        }
    });
    console.log(total);
  }

/* Tests */ 

countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]); // -> 17