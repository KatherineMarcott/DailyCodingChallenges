// Instructions // 
/* Your task is to write a function which returns the sum of following series upto nth term(parameter). */
 
// Summary //
/* Given a pattern for a series of numbers and a parameter of a random number, loop through the series up to the parameter number and return the sum of those numbers rounded to 2 decimal places.  */

// P: If the given value is 0 then it should return 0.00, You will only be given Natural Numbers as arguments.

// R: Return a string that is rounded to 2 decimal places. 

// E: 
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

/* P: Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Given that the example series is ^: we can determine that the pattern is an= 1/3n-2. 

function SeriesSum(n){
  Create a loop that when passed through with a parameter it calculates the series
  
  Then with each loop it adds the series together. 

  At the end return the answer to two decimal places using toFixed().
}  */

// Solution for Codewars//

function SeriesSum(n){
    let series = 0; 
        for (let index = 1; index <= n; index++) {
            if(n === 0){
                return(0.00); 
            } else {
                let equation = 3 * index - 2;
                series += 1/equation; 
            }
        }
    return(series.toFixed(2));
}
  
// Solution for showing on console in Browser // 

function SeriesSum(n){
      let series = 0; 
  for (let index = 1; index <= n; index++) {
      if(n === 0){
          console.log(0.00); 
      } else {
        let equation = 3 * index - 2;
        series += 1/equation; 
      }
  }
  console.log(series.toFixed(2));
}

/* Tests */ 

SeriesSum(5); // --> "1.57"
SeriesSum(1); // --> "1.00"
SeriesSum(0); // --> "0.00"