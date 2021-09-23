

//创建一个返回传入值的函数
//1.不用泛型的样子
function identity(arg:number):number{
    return arg
}
//2.或者用any
function identity1(arg:any):any{
    return identity1
}
/*使用any类型会导致这个函数可以接收任何类型的arg参数，
这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。 */

//3.泛型
function identity2<T>(arg:T):T{
    return arg
}

//泛型使用

console.log(identity2<string>('23333'))
//或者
console.log(identity2('23333'))



function logLength<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
}

// console.log(logLength(222))


//泛型类型

function identity3<T>(arg:T):T{
    return arg
}
//<T>(arg:T) => T  这不分指明变量的类型.以及这个类型返回的值类型
let identity4:<T>(arg:T) => T = identity3

//使用不同的泛型参数名

let identity5:<R>(arg:R) => R = identity3



//泛型接口
interface gfn{
    <T>(arg:T):T;
}

function identity6<T>(params:T):T {
    return params
}

let myIdentity : gfn = identity6



//泛型类

class GenericNumber<T>{
    zeroValue:T;
    add:(x:T,y:T) => T;
}


let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = '2'
myGenericNumber.add = function (x,y) {
    return x+y
}




