// Instructions // 

/*Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her? Her Code Is: function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
} */
 
// Summary //

/* Given the code above, fix it to greet Johnny differently*/

// P: The name parameter will always be a string 

// R: return "Hello, " + name + "!"; if not Johnny. return "Hello, my love!"; if Johnny.

// E: 
// greet("Jim")     => "Hello, Jim!"
// greet("Jane")    => "Hello, Jane!"
// greet("Johnny")  => "Hello, my love!"

/* P: Upon running the code, I noticed that it worked correctly until the parameter was "Johnny". When it was "Johnny", both the greeting meant for other people AND the greeting meant for him was displayed. To fix this, I will include the default greeting as an else statement in a comparison to the name "Johnny". */

// Solution for Codewars//

function greet(name){
    if(name === "Johnny")
      return("Hello, my love!");
    else{
      return("Hello, " + name + "!");
    }
}
  
// Solution for showing on console in Browser // 

function greet(name){
    if(name === "Johnny")
      console.log("Hello, my love!");
    else{
      console.log("Hello, " + name + "!");
    }
}

/* Tests */ 

greet("Jim")     // => "Hello, Jim!"
greet("Jane")    // => "Hello, Jane!"
greet("Johnny")  // => "Hello, my love!"