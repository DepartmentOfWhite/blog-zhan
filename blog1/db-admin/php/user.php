<?php 
require 'config.php';

switch ($_GET['a']) {
  case 'login':
    if (!$_GET['username'] || !$_GET['password']) {
      err(0, '参数不全');
    }
    $row = queryRow("SELECT * FROM user WHERE username='{$_GET['username']}' AND password='{$_GET['password']}' LIMIT 1");
    if (!$row['id']) {
      err(2, '用户名或密码错误');
    }
    unset($row['password']);
    $_SESSION['user'] = $row;
    res($row);
    break;
  case 'logout':
    session_destroy();
    err(2000, '请先登录');
    break;
  case '登录检测':
    if (!$_SESSION['user']['id']) {
      err(2000, '请先登录');
    } else {
      res($_SESSION['user']);
    }
    break;
}