   
   //适用于 node环境
   // demo02
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
   })

   setImmediate(function () {   // 宏任务队列3
       console.log('immediate1');
       process.nextTick(function () {
           console.log('immediate1_nextTick');
       })
       new Promise(function (resolve) {
           console.log('immediate1_promise');
           resolve();
       }).then(function () {
           console.log('immediate1_then')
       })
   })

   process.nextTick(function () {   // 进入微任务队列1
       console.log('glob1_nextTick');
   })
   new Promise(function (resolve) {
       console.log('glob1_promise');  // 2
       resolve();
   }).then(function () {
       console.log('glob1_then')  //进入微任务队列2
   })

   setTimeout(function () {   //进入宏任务队列2
       console.log('timeout2');
       process.nextTick(function () {
           console.log('timeout2_nextTick');
       })
       new Promise(function (resolve) {
           console.log('timeout2_promise');
           resolve();
       }).then(function () {
           console.log('timeout2_then')
       })
   })

   process.nextTick(function () {   // 进入微任务队列 3
       console.log('glob2_nextTick');
   })
   new Promise(function (resolve) {   
       console.log('glob2_promise');//3
       resolve();
   }).then(function () {
       console.log('glob2_then')  //进入微任务队列 4
   })

   setImmediate(function () {   //进入宏任务队列4
       console.log('immediate2');
       process.nextTick(function () {
           console.log('immediate2_nextTick');
       })
       new Promise(function (resolve) {
           console.log('immediate2_promise');
           resolve();
       }).then(function () {
           console.log('immediate2_then')
       })
   })


   // golb1
   // glob1_promise
   // glob2_promise

   // glob1_nextTick
  // glob2_nextTick
   // glob1_then
   // glob2_then

   // //第一个宏任务
   // timeout1
   // timeout1_promise
   // timeout1_nextTick
   // timeout1_then

   // //第二个宏任务
    // timeout2
   // timeout2_promise
   // timeout2_nextTick
   // timeout2_then

   // //第三个宏任务
    // immediate1
   // immediate1_promise
   // immediate1_nextTick
   // immediate1_then

   // //第四个宏任务
   // immediate2
   // immediate2_promise
   // immediate2_nextTick
   // immediate2_then



//    nextTick队列会比Promie先执行。nextTick中的可执行任务执行完毕之后，才会开始执行Promise队列中的任务。
//    setImmediate的任务队列会在setTimeout队列的后面执行。