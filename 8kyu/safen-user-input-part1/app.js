// Instructions // 
/* Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp; */
 
// Summary //
/* Convert all <,>,",& into &lt;,&gt;, &quot;,&amp; */

// P: Will always be a string parameter. 

// R: Return the modified string.

// E: 
// htmlspecialchars("Hello, how would you & I fare?")   => "Hello, how would you &amp; I fare?"
// htmlspecialchars("<h2>Hello World</h2>")             => "&lt;h2&gt;Hello World&lt;/h2&gt;"

/* P: function htmlspecialchars(formData) {
    *Due to the replaceAll function not working in codewars -> I will use if statements to replace each unwanted character
    loop through each character in the string and determine if it is equal to any of the unwanted characters.
    If it is then return the wanted characters as a replacement
    If it is not then return the characters unchanged
    return the resulting string
} */

// Solution for Codewars//

function htmlspecialchars(formData) {
    let result = '';
        for (let index = 0; index < formData.length; index++){
            const element = formData[index];
            switch (element) {
                case '<':
                    result += '&lt;';
                    break
                case '>':
                    result += '&gt;';
                    break
                case '"':
                    result += '&quot;';
                    break
                case '&':
                    result += '&amp;';
                    break
                default: 
                    result += element;
                    break
            }
        }
        return(result);
}
  
// Solution for showing on console in Browser // 

function htmlspecialchars(formData) {
    let result = '';
        for (let index = 0; index < formData.length; index++){
            const element = formData[index];
            switch (element) {
                case '<':
                    result += '&lt;';
                    break
                case '>':
                    result += '&gt;';
                    break
                case '"':
                    result += '&quot;';
                    break
                case '&':
                    result += '&amp;';
                    break
                default: 
                    result += element;
                    break
            }
        }
        console.log(result);
}

/* Tests */ 

htmlspecialchars("Hello, how would you & I fare?")   //=> "Hello, how would you &amp; I fare?"
htmlspecialchars("<h2>Hello World</h2>")             //=> "&lt;h2&gt;Hello World&lt;/h2&gt;"