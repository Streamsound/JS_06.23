function createDebounceFunction(fn, num) {
    if (
        typeof num !== "number" ||
        num < 0 ||
        (!Number.isFinite(num)) ||
        isNaN(num) ||
        num % 1 !== 0) {
        throw new Error("Invalid argument.")
    }
    if (typeof fn !== "function") {
        throw new Error("Invalid argument.")
    }

    let timerId
    return function () {
        if (timerId !== undefined) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(fn, num)
    }
}

class RickAndMorty {
    getCharacter(characterId) {
        if (
            typeof characterId !== "number" ||
            characterId <= 0 ||
            (!Number.isFinite(characterId)) ||
            isNaN(characterId) ||
            characterId % 1 !== 0) {
            throw new Error("Invalid character id")
        }
        return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((res) => {
                switch (res.status) {
                    case 200:
                        const character = res.json()
                        return character;
                    case 404:
                        return null;
                    default:
                        throw new Error(`${res.statusText}`)
                }
            })
            .catch((error) => console.log(error))
    }
    async getEpisode(episodeId) {
        if (
            typeof episodeId !== "number" ||
            episodeId <= 0 ||
            (!Number.isFinite(episodeId)) ||
            isNaN(episodeId) ||
            episodeId % 1 !== 0) {
            throw new Error("Invalid episode id")
        }
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/episode/${episodeId}`
            )
            switch (res.status) {
                case 200:
                    const episode = await res.json()
                    return episode
                case 404:
                    return null
                default:
                    throw new Error(`${res.statusText}`)
            }
        } catch (error) {
            return console.log(error)
        }
    }
}