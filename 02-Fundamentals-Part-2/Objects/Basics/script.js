// Create an object using object literal syntax
const ankita_student = {
    firstName : 'Ankita',
    lastName : 'Singh',
    age : 28,
    city : 'Ambala',
    country : 'India',
    friends : ['anjali', 'roshni', 'akhil', 'akash' ]
}

// accessing the values 
//------------------------------------ method 1: Dot notation 
let fName = ankita_student.firstName
// console.log(fName);

let lName = ankita_student.lastName
// console.log(lName);

// -------------------------------------Using [] bracket notation :
fName = ankita_student['firstName']   // we wirte the property name within ' ' inside the [] brackets , but when we use .dot notation we dont do it.
console.log(fName);

lName =ankita_student['lastName']
console.log(lName);

// benefit of bracket notation over dot notation 
// using bracket notation we can use variable name inside square bracket to find the key value  

// it is mainly used when we not know in advance which property user want to access and store user input and pass it as property name in square bracket with the object name.

// example : 
const interestedIn = prompt("Which property value do you want to access the ankita_student object , Choose from 'firstName' , 'lastName' , 'age', 'city', 'country'")
console.log(`${interestedIn} is ${ankita_student[interestedIn]}`); // this will work
console.log(`${ankita_student.interestedIn}`); // this will not work // return undefined 


// How to handle the above error
const interestedInn = prompt("Which property value do you want to access the ankita_student object , Choose from 'firstName' , 'lastName' , 'age', 'city', 'country'")
if (ankita_student[interestedInn]){
    console.log(ankita_student[interestedInn]);
}else{
    console.log('Wrong request , please select from the given options only');
}

// How to add new properties to an object -- > just like we add values in an array using index , here we add value using property name
ankita_student.favSport = 'Cricket'
ankita_student.favMovie = 'LifeIsGood'
ankita_student['twitter'] = '@studentOfTheYear'
console.log(ankita_student);


// ------------------------ Challenge ---------------------------
// write the following sentence without hardcoding it: 
// ankita has 3 friends and her best friend is anjali

console.log(`${ankita_student['firstName']} has ${ankita_student[`friends`].length} friends and her best friend is ${ankita_student.friends[0]}.`);



























