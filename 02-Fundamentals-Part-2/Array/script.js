// How to create an array
// method 1  using [] --> literal syntax
const friends = ['Anjali', 'Ankit' , 'Anurag', 'Rohan']
console.log(friends);
// method 2 : using Array function : 
const vegetables = new Array('ladyfinger' , 'peas' , 'brinjal', 'potato')

// How to find the length of an array
friends.length

// how to access the elements of an array
friends[0] // first element

// How to access the last element of an array
console.log(friends[friends.length-1]);

console.log(friends[-1])   // this does not work like in python

console.log(friends.slice(-1));


// how to change the elments of an array
friends[2] = 'Pratyush'
console.log(friends);

// Question : How were we able to change the array element when array was stored inside a const variable name
// Answer  :  only the primitive values are immutable if stored inside a const variable , but array is a not a primitive but a object and objects are mutable
friends = ['Akash', 'Ravi'] // this is not allowed // we can change array elements only not change change the whole array if friends is of const variable type
// so if variable is of const type then it is referencing to a value (which may or may not be primitive ) then we can not change this reference although we can change that value only, provided it is not of primitive type 
console.log(friends)

// Types of values an array can store 

// javascript stores different types of values in the same array . More specifically javascript expects an expression for each value, so we can write an expression instead of some value for any element

//we can also store any variable, an array, or any other object inside an aray

// example
const data = ['Akash' , 'Chandel', 1985, 2023-1985, friends]

// we can make a function call inside an array and store the result in place of an element of an array
const calAge = function(age){
    return 2023 - age
}
const birthYears = [2000, 1985, 1990, 2015 , 2010]
const ages = [calAge(birthYears[0]) , calAge(birthYears[1]), calAge(birthYears[2]) , calAge(birthYears[3]), calAge(birthYears[4])]