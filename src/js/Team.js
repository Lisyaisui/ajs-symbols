export default class Team {
    constructor() {
        this.party = [];
    }

    addCharacters(...characters) {
        this.party.push(...characters);
    }

    [Symbol.iterator]() {
        let index = 0;
        const { party } = this;
        return {
            next() {
            if (index < party.length) {
                return {
                value: party[index++],
                done: false,
                };
            }
            return {
                value: undefined,
                done: true,
            };
        },
    };
    }
}