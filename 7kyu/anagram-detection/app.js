// Instructions // 
/* An anagram is the result of rearranging the letters of a word to produce a new word. Create a function that compares to words and return true if the two words are an anagram of each other, otherwise return false. */
 
// Summary //
/* Create a function that determines if two words given are anagrams. */

// P: The anagrams are case insensitive 

// R: Return the result. 

// E: 
// isAnagram("foefet", "toffee"), true
// isAnagram("Buckethead", "DeathCubeK"), true
// isAnagram("dumble", "bumble"), false

/* P: Create a function that takes in two parameters called test and original. 
for each parameter make it lowercase using toLowerCase()then turn it into an array using split() then sort the array, then turn it back into a string
Compare the two new sorted strings, if they are the same return true, if not return false. */

// Solution for Codewars//

let isAnagram = (test, original) => {
    let str1 = test.toLowerCase().split('').sort().join('');
    let str2 = original.toLowerCase().split('').sort().join('');
    if(str1 === str2){
        return(true);
    } else {
        return(false);
    }
}
  
// Solution for showing on console in Browser // 

let isAnagram1 = (test, original) => {
    let str1 = test.toLowerCase().split('').sort().join('');
    let str2 = original.toLowerCase().split('').sort().join('');
    if(str1 === str2){
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(str1, str2);
}

/* Tests */ 

isAnagram1("foefet", "toffee")         // => true
isAnagram1("Buckethead", "DeathCubeK") // => true
isAnagram1("dumble", "bumble")         // => false
