/**
 * Created by dllo on 17/7/31.
 */

var fs = require('fs');

// 1.fs.open(path, flags, callback) 以异步方式打开文件
// 参数1: 文件路径
// 参数2: r,r+,a,a+,w,w+等值
// 参数3: 回调函数
fs.open('./01.js', 'r', function (err, fd) {
    if (err) {
        throw err;
    }
    console.log("打开");
});

// 2.fs.utimes(path, atime, mtime, callback) 异步方式修改文件时间戳。
// 参数1: 文件路径
// 参数2: 修改时间
// 参数3: 访问时间
// 参数4: 回调函数
fs.utimes('./01.js', new Date(), new Date(), function (err) {
    if (err) {
        throw  err;
    }
    console.log("a");
});

// 3.fs.watchFile(filename, [options], listener) 对文件进行监视，并且在监视到文件被修改时执行处理
// 参数1: 完整路径及文件名
// 参数2: persistent true表示持续监视，不退出程序
// 参数3: 文件发生变化时回调
fs.watchFile('./01.js', {interval: 20}, function (curr, prev) {
    console.log("修改");
});

//4.fs.unwatchFile(filename, [listener]) 取消对文件进行监视
// 参数1: 完整路径及文件名
// 参数2: 要取消的监听器事件，如果不指定，则取消所有监听处理事件
fs.unwatchFile('./01.js', function (curr, prev) {
    console.log("取消");
});

// 5.fs.link(existingPath, newPath, callback) 创建硬链接
// 参数1: 为源目录或文件的路径
// 参数2: 它是存放转换后的目录的路径，默认为当前工作目录
// 参数3: 回调，传递一个err异常参数
fs.link('./01.js', '5.txt', function (err) {
    if (err) {
        throw err;
    }
    console.log("b");
});



