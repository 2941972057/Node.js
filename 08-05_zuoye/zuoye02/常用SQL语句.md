# 常用SQL语句

#### 1.创建数据库

创建一个数据库名为my_db的数据库:

```
CREATE DATABASE my_db
```

#### 2.创建表

创建一个表名为user的表:

```
CREATE TABLE user
```

#### 3.查询表

查询user表:

```	
SELECT * FROM user
```

#### 4.表中插入数据

在user表中插入一条name为zw的数据:

```
INSERT INTO user(name) Value(zw)
```

#### 5.表中删除数据

从user表中删除name为zw的数据:

~~~
DELETE FROM user where name = zw
~~~

#### 6.表中修改数据

把user表中name为zzp的数据更改成name为zw:

~~~
UPDATE user SET name = zzp where name = zw
~~~

#### 7.删除表

删除user表:

~~~
DELETE * FROM user
~~~