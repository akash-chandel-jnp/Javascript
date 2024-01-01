'use strict'
const mark ={
    fullName : 'Mark Miller',
    mass: 78, 
    height: 1.69,

    calcBMI : function(){
        this.BMI = Math.round((this.mass/this.height**2)*100)/100
        return this.BMI 
    }
}

const john ={
    fullName : 'John Smith',
    mass: 92, 
    height: 1.95,

    calcBMI : function(){
        this.BMI = Math.round((this.mass/this.height**2)*100)/100 // this BMI property will be saved inside the object only if atlest once the function calcBMI is calculated
        return this.BMI
    }
}


// Note : we have defined the same function calcBMI two times , one for each object. But this is not the ideal way. We will learn efficient method once we will start learning OOPs. i.e CLASSES 


// console.log(john.calcBMI());
// console.log(mark.calcBMI());



// John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!
console.log((`${mark.calcBMI() > john.calcBMI()}`) ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()}) `: `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()}) `)

// Notice how we can use ternary operator to print different thing based on conditions. 
// we can simply write if-else block also to check this thing


const checkHigherBMI = function(obj1, obj2){
    return (obj1.calcBMI() > obj2.calcBMI()) ? `${obj1.fullName}'s calcBMI() (${obj1.calcBMI()}) is higher than ${obj2.fullName}'s (${obj2.calcBMI()})` : `${obj2.fullName}'s calcBMI() (${obj2.calcBMI()}) is higher than ${obj1.fullName}'s (${obj1.calcBMI()})` 
}


console.log(checkHigherBMI(mark, john));



















