/**
 * Created by dllo on 17/8/1.
 */

// 1.lastindexOf 返回一个指定的字符串值最后出现的位置
// 语法: stringObject.lastIndexOf(searchvalue,fromindex)
// IE6等浏览器如下 区分大小写
if (typeof Array.prototype.lastIndexOf != "function") {
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        var index = -1, length = this.length;
        fromIndex = fromIndex * 1 || length - 1;
        for (var k = length - 1; k > -1; k -= 1) {
            if (k <= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 6, 3, 9];
var result1 = arr1.lastIndexOf(7, 7);
console.log(result1);

// 2.reduce 接收一个函数作为累加器，数组中的每个值从左到右开始合并，最终为一个值。
// 语法: array.reduce(callBack,[, initialValue])
// callBack 包含四个参数 previousValue, currentValue, index, array
// IE6等浏览器如下
if (typeof Array.prototype.reduce != "function") {
    Array.prototype.reduce = function (callback, initialValue) {
        var previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }
        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}
var arr2 = [1, 2, 3, 4];
var result2 = arr2.reduce(function (prev, next) {
    return prev + next;
}, 10);
console.log(result2);
var arr3 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
var result3 = arr3.reduce(function (previousValue, currentValue) {
    return previousValue.concat(currentValue);
}, [7, 8]);
console.log(result3); //[7,8,1,2,3,4,5,6]

// 3.reduceRight 接收一个函数作为累加器，数组中的每个值从右到左开始合并，最终为一个值。
// 语法: array.reduce(callBack,[, initialValue])
// callBack 包含四个参数 previousValue, currentValue, index, array
// IE6等浏览器如下
if (typeof Array.prototype.reduceRight != "function") {
    Array.prototype.reduceRight = function (callback, initialValue) {
        var length = this.length, k = length - 1, previous = initialValue;
        if (typeof initialValue === "undefined") {
            previous = this[length - 1];
            k--;
        }
        if (typeof callback === "function") {
            for (k; k > -1; k -= 1) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}
var arr4 = [1, 2, 3, 4];
var result4 = arr4.reduceRight(function (prev, next) {
    return prev + next;
}, 10);
console.log(result4);

// 4.forEach 循环、遍历数组；没有返回值。与for循环类似
var arr5 = [1, 2, 3, 4];
arr5.forEach(function (value, index, array) {
    console.log(value);
});

// 5.map 映射的意思，映射返回一个新数组，有返回值;filterArr:返回一个新对象
var arr6 = [1, 2, 3, 4];
var mapArr = arr6.map(function (value, index, array) {
    return value * value;
});
console.log(mapArr);

// 6.filter 过滤、筛选的意思; 有返回值; filterArr:返回过滤后新数组
var arr7 = [1, 2, 3, 4];
var filterArr = arr7.filter(function (value, index, array) {
    if (value > 3) {
        return true;
    }
    return false;
});
console.log(filterArr);

// 7.该方法对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回true。
var arr8 = [1, 2, 3, 4];
var everyArr = arr8.every(function (value, index, array) {
    if (value > 1) {
        return true;
    }
});
console.log(everyArr);

// 8.some 该方法对数组中的每一项运行给定函数，如果该函数对任何一项返回 true，则返回true。
var arr9 = [1, 2, 3, 4];
var someArr = arr9.every(function (value, index, array) {
    if (value > 1) {
        return true;
    }
});
console.log(someArr);

// 9.indexOf 返回一个指定的字符串值最先出现的位置。
var arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 6, 3, 9];
var result10 = arr10.indexOf(7, 8);
console.log(result10);
