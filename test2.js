class Stack{

    numberCheck(value) {
        if (typeof value === "number" &&
            isFinite(value) &&
            !isNaN(value) &&
            value % 1 === 0) { 
            return true
        } else {
            return false
        }
    }

    constructor(elemAmmount) {
        if (this.numberCheck(elemAmmount) && elemAmmount > 0) {
            if (elemAmmount === undefined) {
                this.elemAmmount = 10
            } else {
                this.elemAmmount = elemAmmount
            }
        } else {
            throw new Error("Invalid limit value")
        }
    }

    push(elem) {

    }

    pop() {

    }

    peek() {

    }

    isEmpty() {

    }

    toArray() {

    }
}