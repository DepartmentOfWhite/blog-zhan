<?php 
error_reporting(0);
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; Charset=utf-8');

if ($_SERVER['SERVER_NAME'] === 'localhost') {
  $conn = new mysqli('localhost', 'root', '') or die(err(1, '数据库连接失败'));
} else {
  $conn = new mysqli('bdm293207389.my3w.com', 'bdm293207389', 'zhan19961113') or die('mysql conn die');
}

$conn->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));

if ($_REQUEST['action'] == 'chooseDB' && $_REQUEST['dbName']) {
  $conn->select_db($_REQUEST['dbName']) or die(err(1, '数据库选择失败1'));
} else {
  if ($_SERVER['SERVER_NAME'] === 'localhost') {
    $conn->select_db('blog') or die(err(1, '数据库选择失败2'));
  } else {
    $conn->select_db('bdm293207389_db') or die(err(1, '数据库选择失败3'));
  }
}

function query($sql) {
  global $conn;
  return $conn->query($sql);
}

function queryRow($sql) {
  return query($sql)->fetch_assoc();
}

function queryRowArray($sql) {
  return query($sql)->fetch_row();
}

function queryData($sql) {
  $result = query($sql);
  $data = array();
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  return $data;
}

function queryDataArray($sql) {
  global $conn;
  $data = array();
  $result = $conn->query($sql);
  while ($row = $result->fetch_array()) {
    $data[] = $row;
  }
  return $data;
}

function err($code, $msg) {
  echo json_encode(array(
    'code'=> $code,
    'msg'=> $msg
  ), JSON_UNESCAPED_UNICODE);
  exit;
}

function res($data) {
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}