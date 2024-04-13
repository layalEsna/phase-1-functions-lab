//let fare;
function distanceFromHqInBlocks(distance) {
    if (distance < 42) {
        return 42 - distance
    }
    else if (distance > 42) {
        return distance - 42
    }
}
//console.log(distanceFromHqInBlocks(50))

//foo x 264 = distance in feet 
//8 x 264 = 2112 start
// 3 x 264 = 792  end
//(8-3)x 264

function distanceTravelledInFeet(a, b) {
    if (a > b) {
        return (a - b) * 264
    } else if (a < b) {
        return (b - a) * 264
    }
}


function calculatesFarePrice(start, destination) {
    let fare;
    if (start > destination) {
        let result = (start - destination) * 264
        if (result <= 400) {
            fare = 0
            return fare
        }
    }
    if (start < destination) {
        let result = (destination - start) * 264
        if (result <= 400) {
            fare = 0
            return fare
        }
    }

    if (start > destination) {
        let result = (start - destination) * 264
        if (result > 400 && result < 2000) {
            fare = (result - 400) * 0.02
            return fare
        }
    }
    else if (start < destination) {
        let result = (destination - start) * 264
        if (result > 400 && result < 2000) {
            fare = (result - 400) * 0.02
            return fare
        }
    }
    if (start > destination) {
        let result = (start - destination) * 264
        if (result > 2000 && result <= 2500) {
            fare = 25
            return fare
        }
    }
    if (destination > start) {
        let result = (destination - start) * 264
        if (result > 2000 && result <= 2500) {
            fare = 25
            return fare
        }
    }
    if (start > destination) {
        let result = (start - destination) * 264
        if (result > 2500) {
            return 'cannot travel that far'
        }
    }
    if (start < destination) {
        let result = (destination - start) * 264
        if (result > 2500) {
            return 'cannot travel that far'

        }
    }
}

function distanceFromHqInFeet(distance) {
    if (distance < 42) {
        return (42 - distance) * 264
    }
    else if (distance > 42) {
        return (distance - 42) * 264
    }
}

////// I did ittttt

