Array.prototype.customFilter = function (func, thisParam) {
    if (!func || typeof func !== "function") {
        throw new Error("Invalid argument.")
    } else if (
        (thisParam && typeof thisParam !== "object") ||
        thisParam === null ||
        Array.isArray(thisParam)
    ) {
        throw new Error("Invalid argument.")
    } else {
        const result = []
        for (let i = 0; i < this.length; i++) {
            if (func.call(thisParam, this[i], i, this)) {
                result.push(this[i])
            }
        }
        return result
    }
}

function bubbleSort(arr) {
    const arrCopy = [...arr]
    if (arr.length === 0) {
        return arrCopy
    }
    for (const element of arrCopy) {
        if (
            typeof element !== "number" ||
            isNaN(element) ||
            !isFinite(element)
        ) {
            throw new Error("Invalid argument.")
        }
    }
    for (let j = 0; j < arrCopy.length - 1; j++) {
        for (let i = 0; i < arrCopy.length - 1; i++) {
            if (arrCopy[i] > arrCopy[i + 1])
                [arrCopy[i], arrCopy[i + 1]] = [arrCopy[i + 1], arrCopy[i]]
        }
    }
    return arrCopy
}

function storageWrapper(func, arr){
    if (
        typeof func !== "function" ||
        arguments[0] === undefined
    ) {
        throw new Error("Invalid argument.")
    } else if (arguments.length === 2 && !(Array.isArray(arguments[1]))) {
        throw new Error("Invalid argument.")
    }
    result = []
    return function(){
        const resultCallBack = func()
        if (Array.isArray(arr)) {
            arr.push(resultCallBack)
            return resultCallBack
        } else {
            result.push(resultCallBack)
        }
        return result
    }
}