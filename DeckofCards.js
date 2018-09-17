var suits = ["CLUBS", "DIAMONDS", "HEARTS", "SPADES"]
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
var temp;
var n = parseInt(suits.length * ranks.length)
console.log(n)
var deck = new Array(n)
for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
        deck[suits.length * i + j] = ranks[i] + ' of ' + suits[j]
    }
}
// shuffle the cards
for (var i = 0; i < deck.length; i++) {
    var r = parseInt(Math.random() * (deck.length - i))
    temp = deck[i]
    deck[i] = deck[r]
    deck[r] = temp
}
for (var i = 0; i < 4; i++) {
    console.log("Player" + (i + 1));
    for (var j = 0; j < 9; j++) {
        var array = [];
        array.push(deck[i + j * 4]);
        console.log(array)
    }
}





