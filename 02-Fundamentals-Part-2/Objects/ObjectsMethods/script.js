'use strict'

// just like array which can store any type of value, Objects can also store any type for value corresponding to its properties. 
// it can store any value, like string , number, array, other objects, or even a function as function can be be written as an expression.

const praveen = {
    firstName : 'Praveen',
    lastName : 'Singh',
    birthYear : 1990,
    city : 'Mumbai',
    country : 'India',
    friends : ['Nikhil', 'Gagan', 'Bunty', 'Akash'],
    hasDriverLicense : true,

    calcAge : function(birthYear){return 2023 - birthYear}, // birthyear will need to be passed while calling the object 
    // what if we could automatically pass the birthyear of same object --> this can be done using the this keyword --> this means the object calling the method
    calcAgee : function(){return 2023 - this.birthYear}

    // now you might be thinking why not just write praveen.birthYear instead of this.birthYear -> well both are correct but if in future we changed the name of the object praveen to something say pradeep, then we will have to manually change the praveen.birthYear to pradeep.birthYear -> that is against DRY principle.


}


console.log(praveen.calcAge(1990)); // 
console.log(praveen.calcAgee()); // here this refers to the object calling calcAgee .. which is praveen object so birthYear of praveen will be to the calAgee function .


//========================================= Some efficient tricks ===========================================
const anjali = {
    firstName : 'Anjali',
    lastName : 'Singh',
    birthYear : 2005,
    city : 'Amritsar',
    country : 'India',
    friends : ['Rakhi', 'Sashi', 'Rikki', 'Preeti'],
    hasDriverLicense : false,
    // ages: 2025 - this.birthYear, // this is not valid as this keyword cant be used before 

    findAge : function(){return 2023 - this.birthYear},
    /* there is a problem with above findAge function --> everytime someone calls this function , then age will be calculated , so if 100 time this fucntion is called the 100 times this calculation is done. 
    Would it not be smart if we could just save this result in some age variable as a property and just return this value everytime this fucntion is called */
    
    findAgee : function(){
        if (!this.age) {
        this.age = 2025 - this.birthYear;} // this is similar code we use for adding any property in an object --> so now anjali object has one more property listed as age .. 

        return this.age ; 
        // now age will be calculated for the first time this function is called and this value will be stored in the object with property name age. next time we call the same function , then age will not be calculated as it has already been calculated.
    },
    
    getSummary : function(){
        return `${this.firstName} is a ${this.findAgee()} years old person , who lives in ${this.city} and she ${(this.hasDriverLicense)? 'has a':'does not have any '} driverLicense. `;
    }
}

console.log('This is test');
// console.log(anjali);    
// console.log(anjali.findAgee());
// console.log(anjali);
// console.log(anjali.findAgee());
console.log(anjali.ages);



//Read this querries on stackOverflow for more clarification
// https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers
// https://www.youtube.com/watch?v=YOlr79NaAtQ

// To know more about use of this read this chatGpt querry
// https://chat.openai.com/share/685d16cf-feae-40dc-9d88-cf67fd365012


// ================================ CHALLENGE ======================================
// print the sentence : `Anjali is a 23 years old person , who lives in cityname and she has/does'nt have a driver license

// console.log(`${anjali.firstName} is a ${anjali.findAgee()} years old person , who lives in ${anjali.city} and she ${(anjali.hasDriverLicense)? 'has a':'does not have any '} driverLicense. `); 

 // we can also do this by defining the function getSummary() inside the object


console.log(anjali.getSummary());











