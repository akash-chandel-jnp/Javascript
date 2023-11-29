'use strict'
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions

// function fruitProcessor(fruit_name,count){
//     const juice = (`Hi , ${fruit_name} juice of ${count} ${fruit_name} is being getting ready`);
//     return juice
    
// }

// const appleJuice = fruitProcessor('apple', 2)

// console.log(appleJuice);



// Types of functions : a) Function Declaration  b) Function Expression  c) Arrow Function

// ==========================================FUNCTION DECLARATION ============================================================
// function declaration means using function keyword and not assigning it to a variable 
function squareNum(num){
    return num**2
}

const square_of_35  = squareNum(35) 
console.log(square_of_35);



// ===================================== FUNCTION EXPRESSION =================================================================
// note we can direclty assign function to a variable like below but when we do that it is not function declaration , it is called funciton expression , and variable to which it is assigned is the name of the funciton ( declaring the name of the function is useless)
const square_a_num = function square_the_num(num){ // this is function expression not a function declaration. 
    return num**2
}
const square_45 = square_a_num(45)
console.log(square_45);   

// const sq_100 = square_the_num(100)   // This will give error when function is defined as expression i.e. assigned to a variable then original name of function is not the actual function rather the variable name becomes the funciton name
// console.log(sq_100)

// Doubt : how the above code worked , if it was defined like function declaration , how could we assign it to a variable
// ans: function expression means when we declare a function and assign it to a variable then name of function is irrelevant because the variable name (square_a_num) now becomes the function and function can now be called only with this variable name and not with the function name (square_the_num)that we gave , so its better not to give name. 


// ======================================= ARROW FUNCTION ===================================================================

const cube_num = num=> num**3   // fucntion is taking an parameter num and returning num**3 and this is stored in a variable cube_num . Now this can only be called using this variable name cube_name(num) with an argument just like this was a funciton name.

console.log(`Cube of 5 is : $(cube_num(5)`);


// ex 2: multiple parameters and multiline code needed
const find_avg = (num1, num2 ) => {
    const sum = num1 + num2
    const avg = sum/2
    return avg
}

const avg_of_5_10 = find_avg(5,10)
console.log(avg_of_5_10);

