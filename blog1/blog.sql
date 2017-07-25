-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-06 12:54:43
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `imgURL` varchar(500) NOT NULL,
  `url` varchar(500) NOT NULL,
  `tag` varchar(50) NOT NULL,
  `subTitle` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `userId`, `title`, `imgURL`, `url`, `tag`, `subTitle`, `content`, `createTime`) VALUES
(1, 1, 'DB-Blog接口文档', 'upload/article/blog-note/bg-img.jpg', 'upload/article/blog-note/', 'db-blog', '本文详细描述db-blog的所有接口调用以及响应数据信息', '', 1495600744),
(2, 1, 'svg', 'upload/article/svg-1/bg-img.jpg', 'upload/article/svg-1/', 'svg', '可缩放矢量图形(SVG)是矢量图形家族的一部分。相比其他光栅图形(JPEG、GIF 和 PNG),SVG 图形具有更多的优势', '', 1495782076);

-- --------------------------------------------------------

--
-- 表的结构 `demo`
--

CREATE TABLE IF NOT EXISTS `demo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `tag` varchar(50) NOT NULL,
  `imgURL` varchar(500) NOT NULL,
  `subTitle` varchar(200) NOT NULL,
  `url` varchar(400) NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `demo`
--

INSERT INTO `demo` (`id`, `userId`, `title`, `tag`, `imgURL`, `subTitle`, `url`, `createTime`) VALUES
(2, 1, 'canvas 小动画', 'canva', 'upload/demo/fly-circle/bg-img.jpg', '学习canvas动画，使用canvas绘制图形，使用js动态计算图形坐标，配合requestAnimation实现动画', 'upload/demo/fly-circle/', 1495600183),
(3, 1, 'canvas - 线条残影', 'canvas 残影', 'upload/demo/canvas-shadow-line/bg-img.jpg', '使用 html5 绘图Canvas线条动画特效，巧妙运用数组，配合canvas绘图API，轻松实现', 'upload/demo/canvas-shadow-line/', 1495608815),
(4, 1, 'canvas - bug', 'canvas bug', 'upload/demo/canvas-bug/bg-img.jpg', '写代码写出了bug，结果却挺好玩的，good', 'upload/demo/canvas-bug', 1495609237),
(5, 1, '3D 甜甜圈', '3D 甜甜圈', 'upload/demo/ttl/bg-img.jpg', '有一天无聊，做了一个无聊的图片，然后做了一个无聊的3D甜甜圈', 'upload/demo/ttl/', 1495609662),
(10, 1, '圣诞主题', '圣诞 canvas', 'upload/demo/chrismas/bg-img.jpg', '叮叮当，叮叮当，铃儿响叮当，嘘，不要唱出来', 'upload/demo/chrismas/', 1495611292),
(11, 1, '捕鱼达人', '捕鱼达人 游戏 canvas', 'upload/demo/fish/bg-img.jpg', '你见过自己会死的鱼吗，我的鱼会！', 'upload/demo/fish/', 1495613326),
(13, 1, '彩虹圈', 'canvas 彩虹圈', 'upload/demo/circle/bg-img.jpg', '一个漂漂亮亮的彩虹圈，跟随鼠标走动', 'upload/demo/circle', 1495615428);

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL,
  `productName` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `priceOrigin` int(11) NOT NULL,
  `pic` text NOT NULL,
  `tag` varchar(20) NOT NULL,
  `info` text NOT NULL,
  `createTime` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `userId`, `productName`, `price`, `priceOrigin`, `pic`, `tag`, `info`, `createTime`) VALUES
(7, 2, '小贾宇康456', 250, 255, 'f910139e7038827e505263c25b190098,984cf41e70cf77409e47e61bec91d2a2,7b87ff81ab1b710ccbfbbdff0d7aef7a', '卖屁股，活好，不粘人', '漏气了，不要了', 1492085962),
(8, 2, '小红红', 999, 1, 'f7d99f88925e6b20b9440918d9370ace,bc0db1535dae9fc703da5f90ac033fcb', '温柔，贤惠，波大', '精通html5,css3,javascript', 1492086207),
(9, 2, '莹莹', 1001, 20, 'b94e97152e194e3961ef6ab90960e0a1,fecaffda83001c1a3145a0c613aa7b54,93dce872e427b8c1960fddb29b29cf0a', '小辣椒，咸慧', '一位英勇的女战士，能掐死你', 1492086363),
(10, 2, '郭靖456', 2010, 100, 'd098bdd231eedb0cbffb901a7eee91f9,1753224322b2515cd11961732fe8f987', '靖哥哥，闷骚，便宜货', '太浪了，划拳不用讲，全靠浪123', 1492086417),
(11, 2, '罗小珣', 500, 2000, 'f4490884f75ae5c3b98c012e48f60d2b,bb6e3a916f2489049624b4b53d3423c5,470cac2d42a497d13f1200c8bff7e6c3', '头发长，见识短', '程序员老婆，你值得拥有', 1492086496),
(12, 3, '邓林源卖', 10, 20, 'b9c4104990711565754491b683b23f8d,11b521ba70069978a347b68b2cf1230c,f9a6624b88cf922ad1fb066c6c15f643', '支付鸨，不值钱', '扛回家做苦力', 1492086773),
(13, 3, '王杰abc', 450, 30, '1da357b3eebd88968aff5ce4604f8aa0,558c24c11a65f272a725d48188cef8c0,b4138f1de11baa1a6162a08535f515c1', '败类，不务正业', '喜欢看书的死宅男', 1492086840),
(14, 3, '崔慧明买', 5090, 2590, '376090dedd1b5f88e55d3b4b7081343d,810d2b368600d4be356c491c09a85f1f', '不要脸，菊花残', '遭雷劈', 1492086958);

-- --------------------------------------------------------

--
-- 表的结构 `rate`
--

CREATE TABLE IF NOT EXISTS `rate` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nickName` varchar(10) NOT NULL,
  `tableName` varchar(30) NOT NULL,
  `tableId` int(10) unsigned NOT NULL,
  `content` text NOT NULL,
  `ip` varchar(15) NOT NULL,
  `avatar` tinyint(4) NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `rate`
--

INSERT INTO `rate` (`id`, `nickName`, `tableName`, `tableId`, `content`, `ip`, `avatar`, `createTime`) VALUES
(1, '张三', 'demo', 11, 'aaaaaaaaaa', '', 1, 1496925263),
(2, 'aaaaaa', 'demo', 11, 'aaaaaaa', '::1', 18, 1496927169),
(3, 'bbbbb', 'demo', 11, 'bbbbbbb', '::1', 39, 1496927176),
(4, 'hhhhhhhh', 'demo', 10, 'hhhhhhhhhhhhhhhhhhh', '::1', 38, 1496928018),
(5, 'aaaaaaa', 'demo', 10, 'aaaaaaa', '::1', 15, 1496928121),
(6, 'uuuuuuuuuu', 'demo', 10, 'uuuuuuuuu', '::1', 19, 1496928153),
(7, 'aaaa', 'demo', 10, 'aaaaaaaa', '::1', 14, 1496928423),
(8, '摘星fy', 'demo', 2, '挺酷的', '::1', 20, 1496928828),
(9, ' eeeeeee', 'demo', 2, 'eeeeeeeeeeeeee', '::1', 20, 1496928834),
(10, 'aaaaaaaaaa', 'demo', 2, 'aaaaaaa', '::1', 36, 1496928849),
(11, 'aaaaaa', 'demo', 2, 'aaaaaa', '::1', 24, 1496928859);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(64) NOT NULL,
  `level` tinyint(4) NOT NULL DEFAULT '1',
  `ip` varchar(15) NOT NULL,
  `createTime` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `level`, `ip`, `createTime`) VALUES
(1, '摘星', '摘星@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(2, '徐金', '徐金@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(3, '占丹红', '占丹红@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(4, '郭靖', '郭靖@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(5, '胡竹林', '胡竹林@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(6, '崔慧明', '崔慧明@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(7, '邓林源', '邓林源@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(8, '刘辰', '刘辰@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(9, '郑蓉蓉', '郑蓉蓉@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(10, '罗珣', '罗珣@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(11, '毕阳', '毕阳@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(12, '邱梦莹', '邱梦莹@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(13, '王闻天', '王闻天@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(14, '贾宇康', '贾宇康@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(15, '王杰', '王杰@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(20, '123', '123@163.com', '84c45e72ebff7042e000b2bfd67b22367b18ddcb723ce4c32f9f1b2064999e08', 9, '192.168.191.1', 1495547171),
(21, '摘星fy', '674857736@qq.com', '84c45e72ebff7042e000b2bfd67b22367b18ddcb723ce4c32f9f1b2064999e08', 1, '::1', 1495594636);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
