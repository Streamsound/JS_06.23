/*function getDistance (x1, y1, x2, y2) {
    for (let i = 0; i < 4; i++) {
        if (typeof arguments[i] !== "number" || isNaN (arguments[i]) || typeof arguments[i] === undefined) {
            throw new Error("Not a number")
        } else if (arguments[i] === Infinity || arguments[i] === -Infinity){
            throw new Error("Not correct number.")
        } else if (arguments[i] > 1000 || arguments[i] < -1000){
            throw new Error ("Not in the frames")
        }
    }
    const distance = Math.hypot(x2-x1, y2-y1)
    if (Number.isInteger(distance)) {
        return distance
    } else {
        return distance.toFixed(2)
    }
}
*/

function switchPlaces(arr) {
    if(Array.isArray(arr)) {
        if (arr.length === 0) {
            return []
        } else {
            let result = []
            let middle = arr[Math.round((arr.length - 1) / 2)]
            if (arr.length % 2 === 0) {
                let first = arr.slice(0, arr.indexOf(middle))
                let second = arr.slice(arr.indexOf(middle))
                result = second.concat(first)
                return result
            } else {
                let first = arr.slice(0, arr.indexOf(middle))
                let second = arr.slice(arr.indexOf(middle) + 1)
                result = second.concat(middle,first)}
                return result
        }
    } else {
        throw new Error("Not array")
    }
}