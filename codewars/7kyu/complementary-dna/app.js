// Instructions // 
/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */
 
// Summary //
/* Given a string, return a string that gives the complementary dna, A for T and vice versa, and C for G and vice versa. */

// P: The string can be empty, if so, return empty string. The data types passed in will always be an array. 

// R: Return the complementary dna string. 

// E: 
// DNAStrand("AAAA")     => "TTTT"
// DNAStrand("ATTGC")    => "TAACG"
// DNAStrand("GTAT")     => "CATA"
// DNAStrand []          => []

/* P: Create a function called DNAStrand that takes in the parameter dna. 
Use a for loop to go through each letter of the string
use switch case to determine the result
return the result */

// Solution for Codewars//

function DNAStrand(dna){
    let complementaryDNA = ''
    for (let index = 0; index < dna.length; index++) {
        const element = dna[index];
        switch (element) {
            case 'A':
                complementaryDNA += 'T';
                break;
            case 'T':
                complementaryDNA += 'A';
                break; 
            case 'G':
                complementaryDNA += 'C';
                break;
            case 'C':
                complementaryDNA += 'G';
                break;
        }   
    }
    return(complementaryDNA);
  }
  
// Solution for showing on console in Browser // 

function DNAStrand(dna){
    let complementaryDNA = ''
    for (let index = 0; index < dna.length; index++) {
        const element = dna[index];
        switch (element) {
            case 'A':
                complementaryDNA += 'T';
                break;
            case 'T':
                complementaryDNA += 'A';
                break; 
            case 'G':
                complementaryDNA += 'C';
                break;
            case 'C':
                complementaryDNA += 'G';
                break;
        }   
    }
    console.log(complementaryDNA);
  }

/* Tests */ 

DNAStrand("AAAA")    // => "TTTT"
DNAStrand("ATTGC")   // => "TAACG"
DNAStrand("GTAT")    // => "CATA"
DNAStrand('')          // => ('')