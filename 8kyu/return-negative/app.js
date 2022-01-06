// Instructions // 
/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? */
 
// Summary //
/* Take a given number and return the negative value of it.  */

// P: Whole Numbers and Floats can be given. Only numbers, no symbols or letters. Zero is not checked for any given sign, if Zero, return zero. 

// R: Return result

// E: 
// makeNegative(1); // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

/* P: function makeNegative(num) {
  Do conditional statements that take in 3 different comparisons. 

  Using the Math.sign() function for the comparisons.

  The first comparison is to check if the num parameter is zero by using the Math.sign() and looking for the output of zero. 
 
  The second comparison is to check if the num is negative with a -1 output from the Math.sign()

  Else return -num. 
} */

// Solution for Codewars//

function makeNegative(num) {
    if(Math.sign(num) === -1 || Math.sign(num) === 0){
        return num;
    }else {
        return -num;
    }
}
  
// Solution for showing on console in Browser // 

function makeNegative(num) {
    if(Math.sign(num) === -1 || Math.sign(num) === 0){
        console.log(num);
    }else {
        console.log(-num);
    }
}

/* Tests */ 

makeNegative(0);
makeNegative(-5);
makeNegative(1);
makeNegative(0.12);