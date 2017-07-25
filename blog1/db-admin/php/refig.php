<?php 
// require '../../php/config.php';
require 'config.php';

if ($_SESSION['user']['level'] != 9) {
  session_destroy();
  err(2000, 'out！');
}