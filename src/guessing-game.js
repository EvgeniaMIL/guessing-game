class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return this.num = Math.round((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.num
    }

    greater() {
        this.min = this.num
    }
}

module.exports = GuessingGame;
