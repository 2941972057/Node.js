/**
 * Created by dllo on 17/8/1.
 */
// 1.setTimeout(匿名函数,毫秒数) 表示多少毫秒后触发一次此匿名函数.
var start = Date.now();
console.log('开始行走江湖,当前时间:' + start);
setTimeout(function () {
    console.log(Date.now() - start + '毫秒后,突然杀出一位好汉!\r\n');
}, 2000);
// 2. setInterval(匿名函数,毫秒数)  表示多少毫秒后重复触发此匿名函数
setInterval(function() {
    console.log("a");
}, 1000000);
// 3.clearTimeout (匿名函数,毫秒数)  表示多少毫秒后消执行计划
var timeout = setTimeout(function A() {

    console.log("timed out!");

}, 2000);

setTimeout(function B() {

    clearTimeout(timeout);

}, 1000);

// 4.clearImmediate(immediate)
// immediate <Immediate> 一个 setImmediate() 返回的 Immediate 对象。
// 取消一个由 setImmediate() 创建的 Immediate 对象。

// 5.clearTimeout(timeout)
// timeout <Timeout> 一个 setTimeout() 返回的 Timeout 对象。
// 取消一个由 setTimeout() 创建的 Timeout 对象。

// 6.setImmediate(callback[, ...args]) (匿名函数,毫秒数)
// 当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行。
// 每次事件循环迭代都会处理整个回调队列。 如果一个立即定时器是被一个正在执行的回调排入队列的，
// 则该定时器直到下一次事件循环迭代才会被触发。

// 7.timeout.ref() 调用时，只要 Timeout 处于活动状态就要求 Node.js 事件循环不要退出。
// 多次调用 timeout.ref() 没有效果。

// 8.timeout.unref() 当调用时，活动的 Timeout 对象不要求 Node.js 事件循环保持活动。
// 如果没有其他活动保持事件循环运行，则进程可能在 Timeout 对象的回调被调用之前退出。
// 多次调用 timeout.unref() 没有效果。


