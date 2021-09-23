console.log('golb1');    // 1

setTimeout(function () {  //添加到宏任务队列1
    console.log('timeout1');
    process.nextTick(function () {
        console.log('timeout1_nextTick');
    })
    new Promise(function (resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function () {
        console.log('timeout1_then')
    })
    setTimeout(function(){
        console.log('timeout11')
        new Promise(resolve=>{
            console.log('promise11');
            setTimeout(function(){
                console.log('pormise11_timeout11')
            })
            resolve()
        }).then(res=>{
            console.log('promise_then11')
        })
    })
})

new Promise(resolve=>{
    console.log('promise1');
    resolve()
}).then(res=>{
    console.log('promise_then1')
})

// golb1
// promise1
// promise_then1

// timeout1
// timeout1_promise
// timeout1_nextTick
// timeout1_then

// timeout11
// promise11
// promise_then11
// pormise11_timeout11