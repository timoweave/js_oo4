function Deck() {
    this.cards = this.reset();
    this.cards = this.shuffle();
    this.cardDealt = undefined;
    return this;
}

Deck.prototype.deal = function () {
    this.cardDealt = this.cards.splice(0, 1);
    return this.cardDealt;
};

Deck.prototype.reset = function () {
    return ['s-1', 's-2', 's-3', 's-4', 's-5', 's-6', 's-7', 
            's-8', 's-9', 's-10', 's-j', 's-q', 's-k',
            'h-1', 'h-2', 'h-3', 'h-4', 'h-5', 'h-6', 'h-7', 
            'h-8', 'h-9', 'h-10', 'h-j', 'h-q', 'h-k',
            'c-1', 'c-2', 'c-3', 'c-4', 'c-5', 'c-6', 'c-7', 
            'c-8', 'c-9', 'c-10', 'c-j', 'c-q', 'c-k',
            'd-1', 'd-2', 'd-3', 'd-4', 'd-5', 'd-6', 'd-7', 
            'd-8', 'd-9', 'd-10', 'd-j', 'd-q', 'd-k'
           ];
};

Deck.prototype.shuffle = function () {

    for (var index1 = this.cards.length - 1; index1 > 0; index1 -= 1) {
        var temp = this.cards[index1];
        var index2 = Math.floor(Math.random() * (index1 + 1));
        this.cards[index1] = this.cards[index2];
        this.cards[index2] = temp;
    }
    return this.cards;
};


function Player(name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.takeACard = function(deck) {
    var card = deck.deal()
    this.hand.push(card);
};

Player.prototype.discardACard = function(index) {
    this.hand.splice(index, 1);
}

var deck = new Deck();
var player1 = new Player('north');
var player2 = new Player('east');
var player3 = new Player('south');
var player4 = new Player('west');

deck.shuffle();

for (var ith = 0; ith < 3; ith ++) {
    player1.takeACard(deck);
    player2.takeACard(deck);
    player3.takeACard(deck);
    player4.takeACard(deck);
}

console.log(player1.name + " hand = " + player1.hand);
console.log(player2.name + " hand = " + player2.hand);
console.log(player3.name + " hand = " + player3.hand);
console.log(player4.name + " hand = " + player4.hand);
