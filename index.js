function getDistance (x1, y1, x2, y2) {
    for (let i = 0; i < 4; i++) {
        if (typeof arguments[i] === undefined || isNaN (arguments[i])) {
            throw new Error("Not a number")
        } else if (arguments[i] === Infinity || arguments[i] === -Infinity){
            throw new Error("Not correct number.")
        } else if (arguments[i] > 1000 || arguments[i] < -1000){
            throw new Error ("Not in the frames")
        }
    }
}

getDistance(1,2,3)