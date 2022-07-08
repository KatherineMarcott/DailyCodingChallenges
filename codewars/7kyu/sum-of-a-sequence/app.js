// Instructions // 

/* Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive). */
 
// Summary //

/* Taking in 3 parameters that are non-negative number values, create a function that starts at the first parameter, ends at the second parameter, and increments by the third parameter. Then add all the numbers that were used to increment to the end parameter. */

// P: All parameters will be non-negative values. There will always be 3 parameters given. If the beginning parameter is greater than the end, return zero. 

// R: Return the sum of the sequence of values. 

// E: 
// 2,2,2  --> 2
// 2,6,2  --> 12 (2 + 4 + 6)
// 1,5,1  --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

/* P: const sequenceSum = (begin, end, step) => {
    Need to create a loop that will create a sequence based off of the parameters. 
    Create a variable that will hold the sum of the sequence
    return the sum
}; */

// Solution for Codewars//

let sequenceSum = (begin, end, step) => {
    let sequence = 0;

        if(begin > end) {
            return(0);
        } else {
                for (let index = begin; index <= end; index+= step){
                sequence += index; 
                }
            return(sequence);
        }
  };
  
// Solution for showing on console in Browser // 

let sequenceSum2 = (begin, end, step) => {
    let sequence = 0;

        if(begin > end) {
            console.log(0);
        } else {
                for (let index = begin; index <= end; index+= step){
                sequence += index; 
                }
            console.log(sequence);
        }
  };

/* Tests */ 

sequenceSum2(2,2,2);  // 2
sequenceSum2(2,6,2);  // 12
sequenceSum2(1,5,1);  // 15
sequenceSum2(1,5,3);  // 5
sequenceSum2(8,5,3);  // 0