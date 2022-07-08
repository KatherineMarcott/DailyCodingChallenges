// Instructions // 
/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value. */
 
// Summary //
/* Nathan drinks 0.5litres of water per hour, given the amount of hours return the amount of water he will drink */

// P: Will be given positive numbers that can include float values. No letters or symbols. Round to the smallest value. 

// R: Return the amount of water he needs to drink with an integer. 

// E: 
// litres(2)    => 1
// litres(12.3) => 6
// litres(0)    => 0

/* P: 
Create a function by the name of litres that takes in a time parameter
return the time parameter multiplied by 0.5 for the amount of litres rounded down to the nearest value. 
*/

// Solution for Codewars//

let litres = (time) => (Math.floor(time * 0.5));

  
// Solution for showing on console in Browser // 

let litres1 = (time) => console.log(Math.floor(time * 0.5));

/* Tests */ 

litres1(2)    // => 1
litres1(12.3) // => 6
litres1(0)    // => 0