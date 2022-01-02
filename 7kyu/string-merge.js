// Instructions // 
/* Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter. */
 
// Take the two words provided and merge them together where the instance of the letter provided first appears.

// P: Numbers, symbols, always string provided, both words will ALWAYS contain the dividing letter.
// R: Return the result
// E: 
// ("hello", "world", "l")  ==>  "held" 
// ("coding", "anywhere", "n")   ==>  "codinywhere"
/* P: function stringMerge(string1, string2, letter){
    loop through each letter in string 1 and string 2
    after the first occurrence of the letter parameter in string 1, replace the rest of the word with the ending of the string 2 after the first occurence of the letter parameter
} */

// Solution //

  function stringMerge(string1, string2, letter){
    `${string1.split(letter, 1)}${string2.slice(string2.indexOf(letter))}`
  }
  