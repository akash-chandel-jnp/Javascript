// 'use strict'

let hasDriversLicence = false
const hasPassedTest = true

if (hasPassedTest) {
    hasDriverLicence = true // note there is a spelling mistake it should be Drivers not Driver : but without strict mode on JS will not tell about this error , but if strict mode is on then JS will tell that this variable is not defined 
}

if (hasDriversLicence) console.log('I have driver licence')

const interface = 50; // interface is a reserved word // so it should not be used // but if strict mode is not on then JS will not inform 

const private = 60; // reserved word // should not be allowed