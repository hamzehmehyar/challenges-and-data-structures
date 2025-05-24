// first we have to create a function called reverseString
function reverseString(str){

    /*inside that function we initialize an empty string to 
    add the reversed elements of the string later*/

    let reversedString = "";

    /* here we create a for loop that iterates through the string elements starting from the
    last element of the string */

    for(let i = str.length - 1 ; i >= 0 ; i--){

        /*here we simply store inside the empty string each elements that the for loop iterates through 
        starting from the last element of the string ending with the first one untill the string elements
         becomes equals to zero and the string becomes empty */

        reversedString += str[i];

    }
        //returning the value
    return reversedString;

}

console.log(reverseString("Hello"));