function makeDeepCopy(srcObj) {
    if (!srcObj || 
        typeof srcObj !== 'object' || 
        srcObj instanceof Set || 
        srcObj instanceof Map) {
        throw new Error('')
    }

    function makeCopy(sourceObject) {
        if (typeof sourceObject !== 'object' || sourceObject === null) {
            return sourceObject
        }

        let targetObject = {}

        for (let key in sourceObject) {
            let value = sourceObject[key]
            targetObject[key] = makeCopy(value)
        }

        return targetObject
    }
    return makeCopy(srcObj)
}


function createIterable(num1, num2) {
    if(num1 >= num2) {
        throw new Error()
    }
    for (const num of arguments) {
        if (
          !Number.isFinite(num) ||
          Number.isNaN(num) ||
          typeof num !== "number" ||
          arguments.length < 2 ||
          arguments.length > 2 ||
          num % 1 !== 0
        ) {
          throw new Error()
        }
    }
    let range = {
        from: num1,
        to: num2,
        [Symbol.iterator]() {
            this.current = this.from
            return this;
        },
        next() {
            if (this.current <= this.to) {
            return { done: false, value: this.current++ }
            } else {
            return { done: true }
            }
        }
    }
    return range
}

function createProxy(srcObj) {
    if (!srcObj ||
        typeof srcObj !== 'object' ||
        Array.isArray(srcObj) ||
        srcObj === null) {
        throw new Error('')
    }
    function insideProxyMagic(obj) {
        const op = new Proxy(obj, {
            set(target, prop, value) {
                let readAmount = 0
                if (!(prop in target)) {
                    return target[prop] = `value: ${value}, readAmount: ${readAmount += 1}`
                } else if (typeof (value) === typeof (target[prop])) {
                    return target[prop] = value
                } else {
                    return `value!: ${target[prop]}, readAmount: ${readAmount = 0}`
                }
            },
            get(target, prop) {
                let readAmount = 0
                return `value: ${target[prop]}, readAmount: ${readAmount += 1}`
            
            }
        })
        return op
    }
    return insideProxyMagic(srcObj)
}