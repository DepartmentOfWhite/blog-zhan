<?php 
require 'refig.php';

$articleId = $_REQUEST['articleId'];
$nickName = $_REQUEST['nickName'];
$tableName = $_REQUEST['tableName'];
$tableId = $_REQUEST['tableId'];
$content = $_REQUEST['content'];

switch ($_REQUEST['a']) {
  case 'getCrossData':

    break;
  case 'getCCTVData':
    echo file_get_contents('../php/cctv.json');
    break;
  case 'getOneArticle':
    res(queryRow("SELECT * FROM article WHERE id='{$articleId}' LIMIT 1"));
    break;
  case 'getArticleList':
    res(queryData("SELECT * FROM article ORDER BY id DESC"));
    break;
  case 'addRate':
    if (
      !$nickName ||
      !$tableName ||
      !$tableId ||
      !$content
    ) {
      err(1, '参数不全');
    }

    $row = queryRow("SELECT createTime FROM rate WHERE ip='{$_SERVER['REMOTE_ADDR']}' ORDER BY id DESC LIMIT 1");
    $timeDis = time() - $row['createTime'];
    if ($timeDis < 30) {
      err(2, '你的频率太快了，我都受不了了，'.(30-$timeDis).'秒后再来');
    }
    $avatar = rand(0, 46);
    query("INSERT INTO rate (
      nickName,
      tableName,
      tableId,
      content,
      ip,
      avatar,
      createTime
    ) VALUES (
      '{$nickName}',
      '{$tableName}',
      '{$tableId}',
      '{$content}',
      '{$_SERVER['REMOTE_ADDR']}',
      '{$avatar}',
      ".time()."
    )");
    res(queryRow("SELECT * FROM rate WHERE id='{$conn->insert_id}' LIMIT 1"));
    break;
  case 'getDemoList':
    res(queryData("SELECT * FROM demo ORDER BY id DESC"));
    break;
  case 'getRateList':
    res(queryData("SELECT * FROM rate WHERE tableName='{$_REQUEST['tableName']}' AND tableId='{$_REQUEST['tableId']}' ORDER BY id DESC "));
    break;
}