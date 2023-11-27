const year_of_birth = 2000
let current_year = 2022
const age = current_year - year_of_birth

if (age >= 18) {
    console.log('You can drive');
    
} else {
    console.log(`You have to wait for another ${18-age} years to start driving.`)
}
