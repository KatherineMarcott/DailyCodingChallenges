// Instructions // 
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */
 
// Summary //
/* Given a string parameter return the highest and lowest number that is within the string. */

// P: All numbers within the string are valid numbers. There will always be at least one number in  the input string. Output string must be two numbers separated by a single space. There can be negative numbers in the string. 

// R: Return result in the larger number first and smaller number last format. 

// E: 
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

/* P: function highAndLow(numbers){
    convert string into array using the split method
    convert individual letters into number using Number() and map
    use the sort method and return the first and last index in the result variable. 
} */

// Solution for Codewars//

function highAndLow(numbers){
    let newArr = numbers.split(" ");
    let arr = newArr.map((x) => Number(x))
    let result = arr.sort((a,b)=> b - a);

    return(`${result[0]} ${result[result.length - 1]}`);
  }
  
// Solution for showing on console in Browser // 

function highAndLow(numbers){
    let newArr = numbers.split(" ");
    let arr = newArr.map((x) => Number(x))
    let result = arr.sort((a,b)=> b - a);

    console.log(`${result[0]} ${result[result.length - 1]}`);
  }

/* Tests */ 
highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");