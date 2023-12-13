const headquarters = 42;

function distanceFromHqInBlocks(pickupLocation) {
    let blocks;
    if (pickupLocation > 42) {
        blocks = pickupLocation - headquarters;
    } else if (pickupLocation < 42) {
        blocks = headquarters - pickupLocation;
    } else {
        blocks = 0; 
    }
    return blocks;
}

function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}

function distanceTravelledInFeet(pickupLocation, destination) {
    let blocks;
    if (pickupLocation > destination) {
        blocks = pickupLocation - destination;
    } else if (pickupLocation < destination) {
        blocks = destination - pickupLocation;
    } else {
        blocks = 0; 
    }
    return blocks * 264;
}

function calculatesFarePrice(pickupLocation, destination) {
    let blocks;
    if (pickupLocation > destination) {
        blocks = (pickupLocation - destination) * 264;
    } else if (pickupLocation < destination) {
        blocks = (destination - pickupLocation) * 264;
    } else {
        blocks = 0 * 264; 
    }
    

    let fare;
    if (blocks <= 400) {
        return 0
    }
    else if (blocks > 400 && blocks <= 2000) {
        return (blocks - 400) * 0.02
    }
    else if (blocks > 2000 && blocks <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
    
}
console.log(calculatesFarePrice(34, 24))





