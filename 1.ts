

//冒泡排序
function sort1(array:number[]):number[]{
    for(let i = 0,flage=true;i<array.length&&flage;i++){
        flage = false
        for(let j=0;j<array.length-i-1;j++){
            if(array[j] > array[j+1]){
                //交换两个值
                [array[j],array[j+1]] = [array[j+1],array[j]]
                flage = true
            }
        }
    }
    return array
}

console.log(sort1([1,3,5,7,9,2,4,6,8,10]))


interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);