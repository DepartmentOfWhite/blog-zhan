<?php 
require 'php/config.php';

/*$data = queryData("SELECT * FROM demo");
foreach ($data as $key => $value) {
  query("UPDATE demo SET imgURL='/{$value['imgURL']}' WHERE id='{$value['id']}' LIMIT 1");
}*/


/*$arr = [
  '摘星',
  '徐金',
  '占丹红',
  '郭靖',
  '胡竹林',
  '崔慧明',
  '邓林源',
  '刘辰',
  '郑蓉蓉',
  '罗珣',
  '毕阳',
  '邱梦莹',
  '王闻天',
  '贾宇康',
  '王杰',
];*/

/*[{
  "Field": "id",
  "Type": "int(10) unsigned",
  "Null": "NO",
  "Key": "PRI",
  "Default": null,
  "Extra": "auto_increment"
}, {
  "Field": "username",
  "Type": "varchar(10)",
  "Null": "NO",
  "Key": "",
  "Default": null,
  "Extra": ""
}, {
  "Field": "email",
  "Type": "varchar(50)",
  "Null": "NO",
  "Key": "",
  "Default": null,
  "Extra": ""
}, {
  "Field": "password",
  "Type": "char(64)",
  "Null": "NO",
  "Key": "",
  "Default": null,
  "Extra": ""
}, {
  "Field": "level",
  "Type": "tinyint(4)",
  "Null": "NO",
  "Key": "",
  "Default": "1",
  "Extra": ""
}, {
  "Field": "createTime",
  "Type": "int(10) unsigned",
  "Null": "NO",
  "Key": "",
  "Default": null,
  "Extra": ""
}]*/

/*
query("TRUNCATE user");

foreach ($arr as $key => $name) {
  $sql = "INSERT INTO user (
    username,
    email,
    password,
    level,
    createTime
  ) VALUES (
    '{$name}',
    '{$name}@qq.com',
    '".hash('sha256', '123123')."',
    9,
    ".time()."
  )";
  query($sql) or die('sql 执行失败');
}*/

