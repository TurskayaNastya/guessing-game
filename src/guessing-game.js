class GuessingGame {
    constructor() {
        this.guessed = null;
    }

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        this.guessed = this.start + Math.ceil((this.end - this.start) / 2);
        return this.guessed;

    }

    lower() {
        this.end = this.guessed;
    }

    greater() {
        this.start = this.guessed;
    }
}

module.exports = GuessingGame;
