import Quiz from "./Quiz.js";

export default class CardMemoryQuiz extends Quiz {
    constructor(_options) {
        super()
        this.suits = "CSDH";
        this.ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        this.cards = [];
        this.started = false;
        this.currentCard = 0;
        this.answers = [];
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.ranks.length; j++) {
                this.cards.push(this.ranks[j]+this.suits[i]);
            }
        }
        this._generateRandomCardSequence();
    }
    _generateRandomCardSequence() {
        for(let i = 1; i < this.cards.length; i++) {
            const random = Math.floor((Math.random()*this.cards.length-i))+i;
            let tempCard = this.cards[i-1];
            this.cards[i-1] = this.cards[random];
            this.cards[random] = tempCard;
        }
        console.log(this.cards);
    }

    handleInput(message) {
        if(this.started) {
            if(this.currentCard < this.cards.length) {
            if(message.toLowerCase()==this.cards[this.currentCard].toLowerCase()) {
                console.log("correct");
            }
            else {
                console.log("incorrect");
            }
            this.answers.push(message);
            this.currentCard++;
            }
            else {
                for(let i = 0; i < this.cards.length; i++) {
                    console.log(this.answers[i], this.cards[i]);
                }
            }
        }
        else {
            if(this.currentCard<this.cards.length) {
            console.log(this.cards[this.currentCard]);
            this.currentCard++;
            }
            else {
                // this.started = true;
                this.currentCard = 0;
                // console.log("Start!");
            }
        }
    }

}