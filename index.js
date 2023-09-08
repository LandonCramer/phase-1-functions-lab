// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue); 
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    let traveledBlocks = Math.abs(start - destination);
    return Math.abs(traveledBlocks * 264);
}

function calculatesFarePrice(start, destination) {  
    let distanceInFeetTravel = distanceTravelledInFeet(start, destination);
    if (distanceInFeetTravel < 400) {
        return 0;
    } else if (distanceInFeetTravel < 2000) {
        let discountRate = (distanceInFeetTravel - 400) * .02;
        return discountRate;
    } else if (distanceInFeetTravel < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}