const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
} 