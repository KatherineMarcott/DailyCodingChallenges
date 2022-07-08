// Instructions // 

/* The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in. */
 
// Summary //

/* Given a year, return the century it is in.*/

// P: Will always be given an non negative integer

// R: Return the century number

// E: 
// century(1705), 18
// century(2000), 20

/* P: function century(year) {
  do a comparison, if year is divisible by 100, return year / 100
  if year is not divisible by 100, return year / 100 + 1
  using Math.floor()
  return;
} */

// Solution for Codewars//

let century1 = year => year % 100 === 0 ? year/100 : Math.floor(year/100) + 1; 
  
// Solution for showing on console in Browser // 

let century = year => year % 100 === 0 ? console.log(year/100) : console.log(Math.floor(year/100) + 1); 

/* Tests */ 

century(1705) // => 18
century(2000) // => 20