class Car {
    #brand = ''
    #model = ''
    #yearOfManufacturing = 1950
    #maxSpeed = 100
    #maxFuelVolume = 20
    #fuelConsumption = 1
    #damage = 1
    #currentFuelVolume = 0
    #isStarted = false
    #mileage = 0
    #health = 100

    stringCheck(value) {
        if (typeof value === "string" ||
            value instanceof String) {
            return true
        } else {
            return false
        }
    }

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

    lengthCheck(value) {
        if ((value.length <= 50) && (1 <= value.length)) {
            return true
        } else {
            return false
        }
    }


    get brand() {
        return this.#brand
    }
    set brand(value) {
        if ((this.stringCheck(value)) &&
            (this.lengthCheck(value))) {
            this.#brand = value
        } else {
            throw new Error("Invalid brand name")
        }
    }

    get model() {
        return this.#model
    }
    set model(value) {
        if ((!this.stringCheck(value)) ||
            (!this.lengthCheck(value))) {
            throw new Error("Invalid model name")
        } else {
            this.#model = value
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }
    set yearOfManufacturing(value) {
        if ((this.numberCheck(value)) &&
            ((value >= 1950) && (value <= new Date().getFullYear()))) {
            this.#yearOfManufacturing = value
        } else {
            throw new Error("Invalid year of manufacturing")
        }
    }

    get maxSpeed() {
        return this.#maxSpeed
    }
    set maxSpeed(value) {
        if ((this.numberCheck(value)) &&
            ((value >= 100) && (value <= 330))) {
            this.#maxSpeed = value
        } else {
            throw new Error("Invalid max speed")
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume
    }
    set maxFuelVolume(value) {
        if ((this.numberCheck(value)) &&
            ((value >= 20) && (value <= 100))) {
            this.#maxFuelVolume = value
        } else {
            throw new Error("Invalid max fuel volume")
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption
    }
    set fuelConsumption(value) {
        if ((this.numberCheck(value)) &&
            (value > 0)) {
            this.#fuelConsumption = value
        } else {
            throw new Error("Invalid fuel consumption")
        }
    }

    get damage() {
        return this.#damage
    }
    set damage(value) {
        if ((this.numberCheck(value)) &&
            ((value > 1) && (value < 5))) {
            this.#damage = value
        } else {
            throw new Error("Invalid damage")
        }
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume
    }

    get isStarted() {
        return this.#isStarted
    }

    get mileage() {
        return this.#mileage
    }

    get health() {
        return this.#health
    }

    start() {
        if (this.#isStarted === false) {
            return this.#isStarted = true
        } else {
            throw new Error("Car has already started")
        }
    }

    shutDownEngine() {
        if (this.#isStarted === true) {
            return this.#isStarted = false
        } else {
            throw new Error("Car hasn't started yet")
        }
    }

    fillUpGasTank(ammountGas) {
        if (this.#isStarted === true) {
            throw new Error("You have to shut down your car first")
        } else if (this.#currentFuelVolume + ammountGas > this.#maxFuelVolume) {
            throw new Error("Too much fuel")
        } else if (!this.numberCheck(ammountGas) || ammountGas < 0) {
            throw new Error("Invalid fuel amount")
        } else {
            this.#currentFuelVolume += ammountGas
        }

    }

    drive(speed, duration) {
        if(!this.numberCheck(speed) || speed < 0) {
            throw new Error("Invalid speed")
        } else if (!this.numberCheck(duration) || duration < 0 ) {
            throw new Error("Invalid duration")
        } else if (speed > this.#maxSpeed) {
            throw new Error("Car can't go this fast")
        } else if (!this.#isStarted) {
            throw new Error("You have to start your car first")
        } else if (this.#currentFuelVolume < ((speed*duration)/100)*this.#fuelConsumption){
            throw new Error("You don't have enough fuel")
        } else if (this.#health < ((speed*duration)/100)*this.#damage) {
            throw new Error("Your car won’t make it")
        } else {
            this.#mileage += speed * duration
            this.#currentFuelVolume -= ((speed*duration)/100)*this.#fuelConsumption
            this.#health -= ((speed*duration)/100)*this.#damage
        }
    }

    repair() {
        if (this.#isStarted) {
            throw new Error("You have to shut down your car first")
        } else if (this.#currentFuelVolume !== this.#maxFuelVolume) {
            throw new Error("You have to fill up your gas tank first")
        } else {
            this.#health = 100
        }

    }

    getFullAmount() {
        if (this.#currentFuelVolume === this.#maxFuelVolume) {
            return 0
        } else {
            return this.#maxFuelVolume - this.#currentFuelVolume
        }
    }
}