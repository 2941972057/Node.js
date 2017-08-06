/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
function handleError(error, message) {
    if (error) {
        console.log(message + '失败');
        //console.error(error);
        return false;
    } else {
        console.log(message + '成功');
        return true;
    }
}
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
};
var connect = mysql.createConnection(options);
connect.connect(function (error) {
    handleError(error, '连接');
});
var userDB = 'use user';
connect.query(userDB, function (error) {
    handleError(error, '使用数据库');
});
var selectSQL = 'select * from users';
router.post('/', function (req, res) {
    var user_name = req.body.username;
    var pass_word = req.body.password;
    connect.query(selectSQL, function (error, results) {
        var isSuccess = handleError(error, '查询数据');
        if (!isSuccess) {
            return;
        }
        for (var i = 0; i < results.length; i++) {
            if (user_name == results[i]['username'] && pass_word == results[i]['password']) {
                res.send('登录成功');
            } else {
                res.send('登录失败');
            }
        }
    });
});
module.exports = router;