[TOC]

**所有接口 get post 均可**

# 登录

http://192.168.191.1/class/shangraoshifan/blog/src/php/index.php?a=%E9%A6%96%E9%A1%B5

**请求**

```
{
  a:'login',
  username:'摘星',
  password:'619bf74a84a52a1cb50a025654076dceb92a911c8929d8a9aec158c35ae359db',
}
```

**响应**

```
// 成功
{
  "id": "1",
  "username": "摘星",
  "email": "摘星@qq.com",
  "level": "9",
  "ip": "",
  "createTime": "1495112076"
}

// 失败
{
  "code": 2,
  "msg": "用户名或密码错误"
}
```

# 注册

http://192.168.191.1/class/shangraoshifan/blog/src/php/reg.php

**请求**

```
// 成功
{
  "id": "1",
  "username": "摘星",
  "email": "摘星@qq.com",
  "level": "9",
  "ip": "",
  "createTime": "1495112076"
}

// 失败
{
  "code": 2,
  "msg": "用户名已存在"
}
```

**响应**

```

```

# 首页

http://192.168.191.1/class/shangraoshifan/blog/src/php/index.php?a=%E9%A6%96%E9%A1%B5

**请求**

```
{
  a:'首页'
}
```

**响应**

```
[{
  "id": "1",
  "userId": "1",
  "title": "DB-Blog接口文档",
  "imgURL": "upload\/article\/blog-note\/bg-img.jpg",
  "url": "upload\/article\/blog-note\/",
  "tag": "db-blog",
  "subTitle": "本文详细描述db-blog的所有接口调用以及响应数据信息",
  "content": "",
  "createTime": "1495600744"
}]
```

# 作品

http://192.168.191.1/class/shangraoshifan/blog/src/php/index.php?a=%E4%BD%9C%E5%93%81

**请求**

```
{
  a: '作品'
}
```

**响应**

```
[{
  "id": "1",
  "userId": "1",
  "title": "贪食蛇",
  "tag": "贪食蛇 js",
  "imgURL": "upload\/demo\/snake\/bg-img.jpg",
  "subTitle": "使用JS写的贪吃蛇游戏,个人练习之用,感兴趣的额朋友可以参考下哈,希望对大家学习js有所帮助",
  "url": "upload\/demo\/snake\/",
  "createTime": "1495599493"
}, {
  "id": "2",
  "userId": "1",
  "title": "canvas 动画 - 1",
  "tag": "canva",
  "imgURL": "upload\/demo\/fly-circle\/bg-img.jpg",
  "subTitle": "学习canvas动画，使用canvas绘制图形，使用js动态计算图形坐标，配合requestAnimation实现动画",
  "url": "upload\/demo\/fly-circle\/",
  "createTime": "1495600183"
}]
```

# 朋友

**请求**

```

```

**响应**

```

```

# 关于

**请求**

```

```

**响应**

```

```
