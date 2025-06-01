
/* first we have to create a function that takes an array from the user as a parameter */
function removeMiddleElement(arr){

    //here we initialized or defined an empty array to push the elements of the array without the middle element later
    const arr_result = [];

    /* now here we want to reach the middle element of the array by subtracting the array length by 1
    and dividing it by 2 */
    const middleElement = Math.ceil((arr.length - 1) / 2);

    //simply we create a for loop to iterate through the array
    for(let i = 0 ; i < arr.length ; i++){

        /* this if statement is to ask if the element we have reached while iterating is not equal to the middle
        element that we calculated , if it's not equal we push it through the empty array , and if it's equal simply
        it doesn't include it inside the result array that we defined earlier */
        if(i !== middleElement){

            arr_result.push(arr[i]);

        }

    }

    return arr_result;

}

console.log(removeMiddleElement([1 , 8 , 9 , 6 , 4 , 5]));

console.log(removeMiddleElement([1 , 5 , 6 , 7 , 8]));

