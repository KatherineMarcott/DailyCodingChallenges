// Instructions // 

/* The Task

Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!

Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'*/
 
// Summary //

/* Create an object that holds the languages key-value pairs. Then return the correct value for the string parameter that is passed in.*/

// P: IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

// R: Return the correct value from the key-value pair for the parameter provided

// E: 
// greet('english')             => 'Welcome'
// greet('dutch')               => 'Welkom'
// greet('IP_ADDRESS_INVALID')  => 'Welcome'

/* P: function greet(language) {
    Declare the given database of languages / the key-value pairs inside of an object
    declare a default language variable that holds english 'welcome' as the default. 
    Use bracket notation that is object[propertyname] = value to put the given parameter (which is equal to the key) inside of our object to grab the correct value. 
    return this value Or the default value if there is an invalid data type. 
} */

// Solution for Codewars//

let languages1 = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  function greet(language) {
      let defaultLanguage = languages1.english;
      return(languages1[language] || defaultLanguage);
  }
  
// Solution for showing on console in Browser // 

let languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  function greet(language) {
      let defaultLanguage = languages.english;
      console.log(languages[language] || defaultLanguage);
  }

/* Tests */ 

greet('english')            // => 'Welcome'
greet('dutch')              // => 'Welkom'
greet('IP_ADDRESS_INVALID') // => 'Welcome'