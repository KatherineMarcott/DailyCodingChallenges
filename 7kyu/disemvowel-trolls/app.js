// Instructions // 
/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". */
 
// Summary //
/* Create a function that takes in a string and output the string without any vowels */

// P: Y is not considered a vowel in this problem. The parameter given will always be a string. The string given can be uppercase or lowercase. 

// R: Return result.

// E: 
//  disemvowel("This website is for losers LOL!") => "Ths wbst s fr lsrs LL!"
//  disemvowel("What are you, a communist?")      => "Wht r y,  cmmnst?")

/* P: function disemvowel(str) {
  Way 1: Take in str parameter which will be in the form of a string. 
  use the replace all function to replace all vowels with ''. 
  return str

  Way 2(Due to replaceAll not working in codewars): 
  Take in str parameter. Define newStr as an empty string. 
  Create a loop that tests if each element in the string is either a lower case OR upper case vowel. 
  Add any non vowels to the newStr. 
  return newStr.
} */

// Solution for Codewars//

// Due to replaceAll not working in codewars -> Will be using the second solution

// Way 2: 

function disemvowel(str) {
    let newStr = '';
      
      for (let index = 0; index < str.length; index++) {
         const element = str[index];
         if(element === 'a' || element === 'e' || element === 
         'i' || element === 'o' || element === 'u' || element === 'A' || element === 'E' || element === 
         'I' || element === 'O' || element === 'U'){
            continue;
         } else {
             newStr += element; 
         }  
      }
      return(newStr);
}
  
// Solution for showing on console in Browser // 

// Way 1: 

// function disemvowel(str) {
//     console.log(str.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u', ''));
//   }

// Way 2: 

function disemvowel(str) {
let newStr = '';
  
  for (let index = 0; index < str.length; index++) {
     const element = str[index].toLowerCase();
     if(element === 'a' || element === 'e' || element === 
     'i' || element === 'o' || element === 'u' || element === 'A' || element === 'E' || element === 
     'I' || element === 'O' || element === 'U'){
        continue;
     } else {
         newStr += element; 
     }  
  }
  console.log(newStr);
}

/* Tests */ 
disemvowel("This website is for losers LOL!")
disemvowel("What are you, a communist?") 