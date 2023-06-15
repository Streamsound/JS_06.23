class Mono {
    push(elem) {
        this.#lengthCheck(++this.#currentLength);
        if (this.#last === null) {
            let newObj = {};
            newObj.val = elem;
            newObj.prev = null;
            this.#last = newObj;
        }
    }
}

