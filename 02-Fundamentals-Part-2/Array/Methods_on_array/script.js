'use strict'


// --------------------- ADD TO ARRAY -----------


// How to add new element at the last , in an existing array 
// For this there is an inbiild function in array object .push() which takes an argument add it to the end of the array and return the new length of the array
const dob = [2015, 2000, 1999, 1975, 2003]
dob.push(2005)
console.log(dob) ; //  [2015, 2000, 1999, 1975, 2003 , 2005]

let new_length = dob.push(2011) // now this time we are also storing the result that push method returns i.e the length of the array

// How to add an element at the beginning of the array
new_length = dob.unshift(1998) // unshift also returns the new length of the array so we can store it if we want to 

// ----------------------- REMOVING --------------------
// How to remove elements
// pop() ---> removes from the last and return the removed elements
dob.pop() // from the last
let removed_item = dob.pop()

// shift() -- > remove from the start and return the element removed 
removed_item = dob.shift()

// --------------------- CHECK FOR AN ELEMENT IN ARRAY------------

// using array.indexOf() -- > return the index if element present , else return nothing
console.log(dob.indexOf(1999));

// array.includes() --> returns boolean value true or false
console.log(dob.includes(2000))

//note : .includes() uses strict equality : so '50' and 50 are not same for it. and return false if checked for 




