/**
 * Created by dllo on 17/7/31.
 */

var assert = require('assert');

// 通用概念:
// actual:实际的值
// expeacted:预期的值
// message:报错时候抛出的错误参数


// 1.assert（value [，message]）
assert(true);
assert(false);
// 2.assert.deepEqual(actual, expected[, message])
// 比较实际值是否等于预期值。相当于===
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);
assert.deepEqual(obj1, obj1);
assert.deepEqual(obj1, obj2);
// 3.assert.assert.deepStrictEqual(actual, expected[, message]))
// 注意点 deepStrictEqual相当于===
assert.deepEqual({a: 1}, {a: '1'});
assert.deepStrictEqual({a: 1}, {a: '1'});
// 4.assert.doesNotThrow(block, error)
// doesNotThrow预期不一样的时候，预期某个代码块不抛出错误
assert.doesNotThrow(function () {
    console.log(a);
}, TypeError, 'aaaa');
// 5.assert.equal(actual, expected[, message])
// 注意点：equal方法内部使用的是相等运算符（==），而不是严格运算符（===），进行比较运算。
assert.equal(1, 1);
assert.equal(1, '1');
assert.equal(1, 2);
assert.equal({a: {b: 1}}, {a: {b: 1}});
// 6.assert.fail(actual, expected, message, operator)
// fail方法用于抛出一个错误
assert.fail(1, 2, undefined, '>');
assert.fail(1, 2, 'whoops', '>');
// 7.assert.ifError(value)
// ifError方法断言某个表达式是否false
assert.ifError(0);
assert.ifError(1);
assert.ifError('error');
assert.ifError(new Error());
// 8.assert.notDeepEqual(actual, expected[, message])
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);
assert.notDeepEqual(obj1, obj1);
assert.notDeepEqual(obj1, obj2);
// 9.assert.notEqual(actual, expected[, message])
assert.notEqual(1, 2);
assert.notEqual(1, 1);
assert.notEqual(1, '1');
// 10.assert.notStrictEqual(actual, expected[, message])
// 比较值,相当于==
assert.notDeepEqual({a: 1}, {a: '1'});
assert.notDeepStrictEqual({a: 1}, {a: '1'});
// 11.assert.ok(value[, message])
// ok是assert方法的另一个名字，与assert方法完全一样。
assert.ok(true);  // OK
assert.ok(1);     // OK
assert.ok(false);
assert.ok(0);
assert.ok(false, 'it\'s false');
// 12.assert.strictEqual(actual, expected[, message])
// 相当于比较 ===
assert.strictEqual(1, 2);
assert.strictEqual(1, 1);
assert.strictEqual(1, '1');
// 13.assert.throws(block, error)
// throws方法预期某个代码块会抛出一个错误，且抛出的错误符合指定的条件
assert.throws(function () {
    console.log(a);
}, TypeError, 'aaaa');
