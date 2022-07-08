// Instructions // 
/* The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0. */
 
// Summary //
/* Compare the two given arrays, for each element, if the arrays match give +1, if they don't match give -1, and if there is an empty element, do +/- 0. Return the result. */

// P: The arrays will always have the same amount of elements. The arrays will not be empty. If the score < 0 return 0. 

// R: Return the final result. 

// E: 
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])// => 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])// => 7
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])// => 0

/* P: Create a function called checkExam with the parameters of array1 and array2 
create a variable that holds the result
Loop through each element of both arrays using forEach
Using comparison, determine if we need to add 1 or subtract 1 from the result
return the result */

// Solution for Codewars//

let checkExam = (array1, array2) => {
    let result = 0; 

    array1.forEach((x, i) => {
        const element2 = array2[i];
        if(x === element2){
            result += 4; 
        } else if(x === '' || element2 === '') {
            result += 0;  
        } else {
            result -= 1; 
        }
    });

    if(result > 0) {
        return(result);
    } else {
        return(0);
    }
}
  
// Solution for showing on console in Browser // 

let checkExam1 = (array1, array2) => {
    let result = 0; 

    array1.forEach((x, i) => {
        const element2 = array2[i];
        if(x === element2){
            result += 4; 
        } else if(x === '' || element2 === '') {
            result += 0;  
        } else {
            result -= 1; 
        }
    });

    if(result > 0) {
        console.log(result);
    } else {
        console.log(0);
    }
}

/* Tests */ 

checkExam1(["a", "a", "b", "b"], ["a", "c", "b", "d"]) // => 6
checkExam1(["a", "a", "c", "b"], ["a", "a", "b",  ""]) // => 7
checkExam1(["b", "c", "b", "a"], ["",  "a", "a", "c"]) // => 0