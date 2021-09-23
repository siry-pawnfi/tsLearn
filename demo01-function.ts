

//可选参数
function add(n1:number,n2?:number) :string{
    return n1+' '+n2
}
console.log(add(1))
console.log(add(12,3))

//默认参数
function add2(n1:number,n2=3):number{
    return n1+n2
}
console.log(add2(1,2))
console.log(add2(1))


//剩余参数
function add3(n1:string,...ns:string[]):string{
    return n1+ns.join(' ')
}

console.log(add3('213','vb','3333','nnnn'))

let lambda = (val:any):any=>{
    return val
}

interface Card{
    suit:string
    card:number
}

interface Deck{
    suits:string[]
    cards:number[]
    createCardPicker(this:Deck):()=>Card
}

let deck:Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck

    createCardPicker:function(this:Deck){
        return ()=>{
            let pickedCard = Math.floor(Math.random()*52)
            let pickedSuit = Math.floor(pickedCard / 13)
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13,
            }
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


//也可以将this作为参数进行传递

class Handler {
    info:string
    onClickGood(this:Handler,e:string){
        console.log('clicked')
    }
}

let h = new Handler()

//重载
//js本身是一个动态语言,js里函数根据传入不同的参数而返回不同类型的数据很常见

function str1(x:string):string;
function str1(x:number):number;
function str1(x):any{
    if(typeof x === 'string'){
        return x
    }else if(x === 'number'){
        return x
    }
}
