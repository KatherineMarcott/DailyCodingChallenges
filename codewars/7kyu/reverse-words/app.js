// Instructions // 
/* Complete the function that accepts a string parameter, and reverses each word in the string. */
 
// Summary //
/* Reverse the letters of each word but do not change the order of the words.  */

// P: All spaces in the string should be retained. 

// R: Return the result

// E: 
// reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god'
// reverseWords('apple'), 'elppa'

/* P: Create a function called reverseWords that takes in a parameter called str. 
Using split() split the string into letters in an array
using reverse() reverse the array
using join() join the letters back into a str
Now all the letters are backwards AND the words are in the wrong order so you have to do the split/reverse/join again for the words to be reversed back into the correct position */

// Solution for Codewars//

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }
  
// Solution for showing on console in Browser // 

function reverseWords1(str) {
    console.log(str.split('').reverse().join('').split(' ').reverse().join(' '));
  }

/* Tests */ 

reverseWords1('The quick brown fox jumps over the lazy dog.') // => 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords1('apple') // => 'elppa'

