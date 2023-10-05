// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers=['Antonia','Nuru','Amari','Mo']) {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers=['Antonia','Nuru','Amari','Mo']) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (integer) {
    return function (fare) {
      return fare * integer;
    }
}
    
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb){
    return cb(drivers)
}