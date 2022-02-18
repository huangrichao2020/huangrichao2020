## ES5与ES6的区别

### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>抖音风格字体</title>
    <style>
        body {
            background-color: gray;
            padding: 100px;
        }

        h1 {
            font-size: 48px;
            color: #ffffff;
            text-shadow: #f03740 -1px -3px, #2addfd 3px 0px;
        }
    </style>
</head>

<body>
    <h1>慕课网</h1>
</body>

</html>
```
    HTML标签
<h1 id="growingio">React</h1>
标签名 属性name 属性value 标签text 结束标签


#### 元素的种类 dispaly
    块元素 block 支持width height
<h1>等独占一行的</h1>
    内联元素 inline 支持width height
<a>等可以共存一行的
    行内块级元素 inline-block 不支持width height 有默认外间距
<button>

#### 超链接
<a href="www.baidu.com" />

### CSS

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g7rskzl35sj31ha0tagnx.jpg)

内联样式,即style的value <h1 style="color:#c9394a;">React</h1>

内联样式表 <style> //可以做style样式表内对某些标签做些加工 
            标签选择器 h1 {color :#c9394a;border:1px dashed lightslategray;}
            声明块 属性name 属性value
            类选择器 .bannerDiv {color :#c9394a;}
            ID选择器 #myId {color :#c9394a;}
            属性选择器 [name="imooc"] {color :#c9394a;}
            通用选择器 * {color :#c9394a;}
        </style>
```html

针对这个标签 <a class="btn1" id="button1">慕课网</a>

a{
    padding:10px
}

.btn1{
    width:10px
}

#button1{
    height:10px
}

[id="button1"]{
    margin:10px
}

这四种写法都能唯一选择到这个标签元素，并叠加生效。

```
        color 
        background-color 
        width:px height:px
        font-family:"微软雅黑" font-size:48px font-weight:900 
        text-shadow:#f03740 -1px -3px

外联样式表 <link rel="stylesheet href="css/style.css">

    盒子模型
- 内容区 
- 边框 border
- 内边距 padding
- 外边距 margin

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g7t7r7lxnjj31dq0u0wg5.jpg)

#### CSS定位
```
position:static 关闭定位
position:fixed 固定定位
position:relative 相对定位
position:absolute 绝对定位
```

#### CSS伪类选择器
h1:hover{color:#c9394a;}

    :hover 表示伪类，当鼠标悬浮于标签上时样式发生改变
#### CSS层级选择器

#d1 > #d11 {
    color:#c9394a;
}
    #父元素id > #子元素id {} 精准匹配元素

### 伪类选择器下嵌套层级选择器
    #wechat:hover>#code 
### let const

    let指变量在块内有效，且不可提升
所以let变量在作用域之外引用会报错。
同作用域在let前使用变量也会报错。

    const指变量指向的内存地址不变
所以const变量是数值、字符串、布尔值的话不可变，
const变量是对象和数组的话可变，不要干成undefined就行

### 小括号与大括号
- () 优先计算表达式,小括号内是一个值或一个对象
- {} 可执行语句，大括号内是一段语句

### 箭头函数
- 普通函数默认使用文件全局的this，不使用上一层作用域的this
- 箭头函数默认集成上一作用域的this
- 箭头函数默认使用封闭作用域的arguements
- **箭头函数无原型prototype**
- 箭头函数默认返回{语句}，想要返回对象必须({key:value})

## JavaScript起源
JS的组成
- ECMAScript
- DOM
- BOM


## Title
- cmd+O
- 浏览器打开HTML文件：cmd+shift+b
- 预览文件：cmd+shift+v

[toc]

## JS基础
<img>是一个Element，onclick="myFunction(this)"可将本element对象传入该方法.

而function myFunction(s)时可用s获取img对象的各种属性{
    s.src = s.src.match("bulboff")?"/images/pic_bulbon.gif":"/images/pic_bulboff.gif"
}
```
<script>
function changeImage(s){
    s.src = s.src.match('bulboff')?"/images/pic_bulbon.gif":"/images/pic_bulboff.gif";
}
</script>

<img id="myimage" onclick="changeImage(this)" src="/images/pic_bulboff.gif" width="100" height="180">

<p>点击灯泡就可以打开或关闭这盏灯</p>

```

### 知识点集合

1 console.log("%cfuck","font-size:20px",a,b)

2 DOM obj.innerHTML="精准覆盖某元素的html内容"

3 DOM document.write("覆盖文本内容") 自动调用write.open()与write.close()


4 JS常见数据类型
```
var x = 123e5;
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值

```

5 判断数据类型

- typeof(obj)
- Array.isArray(obj)
- obj instanceof Array

6 浏览器不支持JS
改造成
```
<!--
<script>
</script>
//-->
```
即可

7 变量赋值
- var lastname="Doe", age=30, job="carpenter";
- var x,y,z = 1;

## FCC基础训练
**内联样式表**
style是样式属性集，是特标签属性。
color是样式属性名，red是样式属性值。
```html
<h1 style="color:red">你好,世界</h1>
```
**层叠样式表 标签选择器/类选择器(一个现有,一个自定义) 属性名 属性值**

类 方法 参数
```html
<style>
    h1 { color:red; }
    .h1_text { color:blue; }
</style>
<h1 class='h1_text">你好,世界</h1>
```
**为什么要CSS要支持标签选择器，这样一来我们可以把这个标签需要的所有style属性都在CSS里设置好，一劳永逸，所有同名标签都能复用**

**CSS定义选择器时引入外部资源做属性值的做法**
```html
//引入谷歌字体作Lobster
<link href="https://fonts.gdgdocs.org/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2{
        font-family:Lobaster，Monospace; //使用谷歌字体,引入失败时，降级使用Monospace字体
    }
</style>

```
## HTML
> 第一个实例
代码编号htm 空元素必须关闭 左上(0,0)到右下(1920,1280)
```html

<!DOCTYPE html> 声明为HTML5的文档*
<html> 页面根元素*
<head> 网页真正显示的内容在body里*
*只有使用"myql_query(set names utf8)"时强制要求写成utf8,其他地方最好写成UTF-8*
<meta charset="utf-8"> 中文网页必须定义编码为utf-8*
<title>网页名</title> 描述了文档的标题*
</head>
<body> 可见的页面内容*
*为排除页面尺寸干扰,任意个个\r,\n,\t都只会被浏览器解析成一个空格*
    <h1>我的   第一个标题</h1> 
    <p>我的第一个段落,段落开头自动缩进</p>
    <p>前后两个段落中间自动隔一行</p>
    
    <a href = "http://www.baidu.com">这是一个超链接</a> 标记内部科定义标记属性*
    <img src="../image/logo.png" width="258" height="39" /> 图片路径可以是绝对路径也可以是相对路径*
    <img src="http://static.runoob.com/images/runoob-logo.png" width="300" height="120" /> 图片可以是网络URL路径*
    
    
</body>
</html>

```

> HTML本质是一套 Markup Tag
HTML文档也叫web页面
元素content以<>也叫opening tag起始,由</>也叫closing tag结束

***
### 标签
1. empty content 随opening tag的结束而结束
2. 最好写成< />的有闭合形式,如<br /> 换行 <hr />水平分割线
3. 所有标签最好小写,满足未来的xml标准

### 属性

1. 属性总是在opening tag中,用于添加信息
2. 满足name = "value" K = V形式
3. 若value标志符含有双引号,则必须用单引号将value引起来,如name = "John 'ShotGun'Nelson"
4. 有些属性可以多用,如class = "   ",有些只能单用,如id = " "

### 标题
1. 标题是<body>中用`<h1></h1>`修饰的文本内容,h1对应6号字体最大,h6对应1号字体,最小
2. 搜索引擎根据标题搜索你的网页,所以标题不但决定了你网页的文档结构,更决定了你的网页相关度.故不可拿标题任意当粗体用
3. `<p>`段落通常与`<hr>`水平分割线联合使用,浏览器会自动在段落前加空格
### HTML注释
    <!-- 这是一个注释--> 浏览器会忽视注释内容,也不显示它们
### 字体大小
    <font size = "6"> 这是6号字体,与h1一样大</font>
效果: <font size = "6"> 这是6号字体,与h1一样大</font>

## 文本格式化标签
1. <b> bold加粗 <i> italic 斜体
2. <strong> 重要突出 <em>重要斜体
3. <big>放大的 <small>缩小的
4. <sub>下标化 
5. <sup>上标化
5. `<pre>`保留空格的文本块
6. &lt表示<,&gt表示>,&amp表示&
7. `<code> `通用代码格式
8. <kbd> 输入
9. `<tt>`打字机文本
10. `<samp>`代码样本
11. `<var>` 变量
### 嵌套写入超链接
```html

<!DOCTYPE html>
<html>
<head>
    <meta charset = "UTF-8">
    <title>菜鸟教程</title>
</head>
<body>
<address>
Written by <a href="www.baidu.com">Jon Doe</a>.<br />
Visit us at:<br />
</address>
</body>
</html>
```
### 缩写与鼠标浮现
> 截取缩写
<abbr title="etcetera">etc.</abbr><br />
`<abbr title="etcetera">etc.</abbr><br />`

> 首字母缩写
<acronym title="World Wide Web">WWW</acronym> 仅IE5有效

### 文字左右阅读顺序

> 方向标签`<bdo>`<p><bdo dir="rtl">该段文字从右往左显示</bdo></p>
`<p><bdo dir="rtl">该段文字从右往左显示</bdo></p>`

### 块引用(短引用)
> <q>你好啊</q>自动加引号
`<q>你好啊</q>`
### 引证
> <cite>引用,引证</cite>
`<cite>引用,引证</cite>`
### 删除线与下标线
> <del>blue</del> <ins>red</ins>` ` `<del>blue</del><ins>red</ins>`
### 超链接样式
1. 未点击:蓝色字体并下划线
2. 点击过:紫色字体并下划线

> <a href="http://www.baidu.com" target="_blank">连接!</a>
`> <a href="http://www.baidu.com" target="_blank">连接!</a>`

> 创建页内id书签
**href = "#" 表示空链接,#可表示本页面,#abc表示**
`<a id="tips">有用的提示部分</a>` 将某些文本定义成书签tips,方便从其他地方用href="#tips"跳转过来,*
> 创建指向这个tips的超链接
<a hred = "#tips">访问有用的提示部分</a>
> 从另外的界面创建访问连接
`<a href="http://www.baidu.com/html/html-links.html#tips">访问有用的提示部分</a>
`

> 图片链接 alt是图片无法显示时的替换文本,
指定了高与宽,
`<a href = "http://www.baidu.com"><img border="5" src="smile.gif" alt="教程" width="32" height="32" /></a>`

target = _self 在当前页跳转
target = _blank 在新窗口显示
target = _top 在新页显示

> 邮件链接
`<a href = "mailto:zhangrr@163.com?cc=someone@163.com&bbc=somes@163.com" rel="nofollow">发送邮件</a>`


### 头部head
```html
<head> 
    <title>教程</title>
base默认链接,URL基础.为body内的各类链接设定默认URL,与target属性*
    <base href="http://www.runoob.com/images/" target="_blank" />
</head>
<body>
    <img src="logo.png" /><br /> 
    <a href = "www.runoob.com">菜鸟教程</a> 默认新窗口打开*
</body>

```

> **meta** 用于描述HTML文档的描述,关键词,作者,字符集等

```html
为搜索引擎定义关键标题*
<title>嵌入式标题</title>
为搜索引擎定义关键词*
<meta name="keywords" content="HTML,CSS,XML,XHTML,JavaScript">
为网页定义描述内容*
<meta name="description" content="免费 web & 编程 教程">
定义网页作者*
<meta name="author" content="Runoob">
网页自动刷新时间*
<meta http-equiv="refresh" content="30">
```

> Link
```html
<head> 
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
> style
```html
直接的样式表
<style type="text/css>
body {background-color:yellow}
p {color:blue}
</style>
</head>
```
### 内部样式表
> 用于在head中修饰HTML标签的样式,如
```html
<!DOCTYPE html>
<html>

<head>
<title>菜鸟</title>
<style type="text/css"> 作用在本html对象的text文本*
h1 {color:red;} 定义被h1修饰的文本的样式*
p {color:blue;} 定义被p修饰的文本的样式*
</style>
</head>

</html>
```
### 无下划线超链接样式
<a href= "www.baidu.com/" style="text-decoration:none;">访问</a>
`<a href= "www.baidu.com/" style="text-decoration:none;">访问</a>`

### 链接外部样式表
<link rel="style" type="text/css" href="styles.css">

### 内联样式
> 当场临时定义标签的style
<p style="color:blue;margin-left:20px;">This is a paragraph.</p>

`<p style="color:blue;margin-left:20px;">This is a paragraph.</p>`
<h1 style="background-color:green;">这是一个标题</h1>

`<h1 style="background-color:green;">这是一个标题</h1>`

### 字体样式
> 样式都是在标签里的style属性里,连属性都不如,不可直接把样式当标签用,样式间用 ; 隔开,样式名之下,才是具体样式选项
```
graph LR
标签a-->B(属性style)
B-->C(样式名color)
C-->D(样式值 具体样式red)

```

<p style="font-family:verdana;">一个段落</p>

`<p style="font-family:verdana;color:red;font-size:20px;">一个段落</p>`

<h1 style="text-align:center;">居中对齐的标题</h1>

`align文本排线 <h1 style="text-align:center;">居中对齐的标题</h1>`

### 总结
1. 当多个内部标签需要被定义样式时,推荐head style内部样式表
2. 当多个页面需要使用样式表时,推荐 link 外部样式表
3. 某些特殊标签不支持上述两种,必须现场定义内联样式,如<a>

### 创建图片链接
`<a href = "http://www.baidu.com/html/html-tutorial.html">` 创建链接*
有边框图片
`<img border="5" src="smile.gif" alt="教程" width="32" height="32" /></a>` src属性使用链接*

### 有图映射usemap
```
<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap" /> 将src加载的图片作映射源,命名为planetmap*

<map name="planetmap"> 
    <area shape="rect" coords="0,0,82,126" alt="sun" href="sun.htm"> 左山(0,0)到右下(82,126)*
    <area shape="circle" coords="90,58,3" alt="sun" href="mercur.htm"> 以(90,58)为圆心,半径为3的区域*
    <area shape="circle" coords="124,58,8" alt="sun" href="venus.htm"> 以(124,58)为圆心,半径为8的区域*

```

### 表格
<table border="1">
<tr>
    <td>100</td>
</tr>
</table>

<table border="1" cellpadding="0" cellspacing="0">
<!--表格边距与间距 -->
<caption>小案例</caption>
<tr>
    <th>数据一</td> 
    <td>150</td>
    <td>200</td>
</tr>
<tr>
    <th>数据二</td>
    <td>150</td>
    <td>200</td>
</tr>
</table>

<table border="3">
<caption>菜鸟表格,两行两列</caption>
<tr>
    <th>开始</th> <!--页眉-->
    <th colspan="2">二</th>
    
</tr>
<tr> <!--行 主体 -->
    <th rowspan="2">100</th> <!--table data --> 
    <td>150</td><!-- 任何一个<td>或<th>标签都可以当<body>用-->
    <td>200</td>
</tr>
<tr>
    <td>200</td>
    <td>250</td>
</tr>
</table><!--页脚-->

<table border="1">
<caption>HTML表格实例</caption>
<tr style="background-color:grey">
    <th>First Name</th>
    <th>Last Name</th>
    <th>Points Name</th>
</tr>
<tr>
    <td style="text-align:center">Jill</td>
    <td>Smith</td>
    <td>50</td>
</tr>
<tr>
    <td style="text-align:center">Eve</td>
    <td>Jackson</td>
    <td>94</td>
</tr>
<tr>
    <td style="text-align:center">John</td>
    <td>Doe</td>
    <td>80</td>
</tr>
<tr>
    <td align="center">Adam</td>
    <!--标签实际样式修改可以通过两种方式,一种是style属性的样式名与样式值,一种是直接通过相关的属性与属性名-->
    <td>Johnson</td>
    <td>67</td>
</tr>

</table>

<table>
<caption>中学课表</caption>
<tr>
    <th>时间/日期</th>
    <th>一</th>
    <th>二</th>
    <th>三</th>
    <th>四</th>
    <th>五</th>
</tr>
<tr>
    <th rowspan="2">上午</th>
    <th>语文</th>
    <th>数学</th>
    <th>英语</th>
    <th>生物</th>
    <th>政治</th>
</tr>
<tr>
    <td>数学</td>
    <td>数学</td>
    <td>数学</td>
    <td>数学</td>
    <td>数学</td>
</tr>
<!-- &nbsp表示空格 -->
<tr><th colspan="6" >&nbsp;</th></tr>

<tr>
    <th rowspan="2">下午</th>
    <th>语文</th>
    <th>数学</th>
    <th>英语</th>
    <th>生物</th>
    <th>政治</th>
</tr>
<tr>
    <td>数学</td>
    <td>数学</td>
    <td>数学</td>
    <td>数学</td>
    <td>数学</td>
</tr>

</table>

### 页眉,主体,页脚
<table> 
    <thead >
    <tr style="background-color:#0099CC">
        <th>Title</th>
        <th>Price</th>
        <th>Avaliable</th>
    </tr>
    </thead>


</table>


<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr>
    <td align="center" class="biaoti" height="60">受理员业务统计表</td>
  </tr>
  <tr>
    <td align="right" height="25">2017-01-02---2017-05-02</td>
  </tr>
</table>

### HTML布局
1. `<div>` 无意义的块元素,常作便签容器,用于页面布局
2. `<span>`无意义的内联元素,常用语文本容器


 
<div id="container" style="width:500px">
 
<div id="header" style="background-color:#FFA500;">
<h1 style="margin-bottom:0;">主要的网页标题</h1></div>
 
<div id="menu" style="background-color:#FFD700;height:200px;width:100px;">
<b>菜单</b><br />
HTML<br />
CSS<br />
JavaScript</div>
 
<div id="content" style="background-color:#EEEEEE;height:200px;width:400px;float:right;display:inline">
内容在这里</div>
 
<div id="footer" style="background-color:#FFA500;clear:both;text-align:center;">
版权 © runoob.com</div>
 
</div>


### HTML form表单
> form表单包含单选,复选,文本,密码,下拉,文本框,按钮,提交
radio,checkbox,text,password,<select> <option>,<textarea rows cols>,button value,submit
> 在<form>表单里用<input type="text" name="user">
<input>的type属性可以说text文本域,也可以是password密码域,也可以是radio,value单选域,也可以是checkbox,value可选域,
```htm
<form action="">
First name: <input type="text" name="firstname"><br />
Last name: <input type="text" name="lastname">
</form>
```
![image](http://note.youdao.com/yws/res/3387/356C499F09D24D998FFE6558F9B34678)
#### 带边框表单
```htm
<form action="">
<fieldset>
<legend>Personal information:</legend>
Name: <input type="text" size="30"><br />
E-mail: <input type="text" size="30"><br />
Date of birth: <input type="text" size="10">
</fieldset>
</form>
```

![image](http://note.youdao.com/yws/res/3424/4ABFF9CADFC443CA9305B9FBA4295AE0)


### HTML框架
1. 可以在当前页面内嵌入另一个HTML文件(页面),0边框
<iframe src=demo_iframe.htm" width="200" height="200" frameborder="0"></iframe>

2. 在当前页面的某个框架中显示超链接的跳转内容
```html
<iframe src="demo_iframe.htm" name="iframe_a"></iframe><br />
<a href="www.runoob.com" target="iframe_a">RUNOOB.COM</a>
```

### HTML颜色
> RGB 红绿蓝 256&*256&*256共1600万种颜色
大红:#FF0000 rgb(255,0,0)
大绿:#00FF00 rgb(0,255,0)
大蓝:#0000FF rgb(0,0,255)
大黑:#000000 rgb(0,0,0)
大白:#FFFFFF rgb(255,255,255)
大灰:#D8D8D8 rgb(216,216,216)

1. 小技巧

使用RGBA可实现调透明度
<p style="background-color:rgba(255,255,0,0.25)">您好</p>

`<p style="background-color:rgba(255,255,0,0.25)">您好</p>`

或者用颜色英文名
<p style="background-color:pink">ninhao</p>

`<p style="background-color:pink">ninhao</p>`

或者用颜色HEX代号
<p style="background-color:#CCFFFF">你好</p>

`<p style="background-color:#CCFFFF">你好</p>`

### HTML脚本

> <script>标签
```html
<script>
document.write("Hello World!")
</script>
```
<noscript>不支持script的浏览器会显示noscript的内容以代替</noscript>

    script脚本支持输出流输出HTML格式的文本
```html
<script>
document.write("<h1>这是一个标题</h1>")
</script>
```

#### script事件以按钮为例
> document.getElementById()方法返回一个标签对象的引用
```html
<p id="demo">JavaScript Comes</p>
<script>myFunction{
    x = document.getElementById("demo")
    x.innerHTML="Hello Script!";
    x.style.color = "#FF0000"
}</script>

<button type="button" onclick="myFunction()">点击我</button>

```


### HTML字符实体
> 在HTML中有些字符是预留的,如< >,不作标签时,必须用字符实体`&lt;`与`&gt;`代替 `&#60;`&#60;
1. 最常用的实体字符 无间断空格`&nbsp;` 实现写几个就空几格
2. &yen;`&yen;`
3. 注册标 &reg;`&reg;`
4. 商标 &trade;`&trade;`
5. 版权 &copy; `&copy;`

### URL
**注意**:
仅支持ASCII 用%FF等显示非ASCII字符,不可用空格,用+代替空格
```
graph LR
统一资源定位器-->URL
URL-->Domain
URL-->IP
URL实例-->B(scheme://host.domain:port/path/filename)
B-->http://www.runoob.com:80/html/html-tutorial.html
```

### HTML5简称H5
> 目的是为了在移动设备上支持多媒体

> 为了便于脚本引用,相关便签必须定义id属性
1. 让低版本浏览器支持H5
```html
<head>
<meta charset="utf-8">
<title>渲染 HTML5</title>
  <!--[if lt IE 9]>
  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
  <![endif]-->
</head>
```
2. HTML5支持为HTML添加新标签
在head里,用script.document.createElement创建新标签myHero,
用style myHero{}定义myHero标签
<head>
<title>为HTML添加新标签</title>
<script>
document.createElement("myHero")
</script>
<style>
myHero{
    display:block;
    background-color:#ddd;
    padding:50px;
    font-size:30px;
}
</style>
</head>


3. body.canvas画布定义画布样式
```html
<canvas id="myCanvas" width="200" height="100" 
style="border:1px; solid:#000000;">
您的浏览器不支持 HTML5的canvas标签
</canvas>
```
```html
<script>
var c = document.getElementById("myCanvas");//获取myCanvas画布的引用对象;
var ctx = c.getContent("2d"); //获取2D画图组件;
ctx.fillStyle = "#FF0000";//填充颜色;
ctx.fillRect(0,0,150,75);//选取填充区域;
ctx.moveTo(0,0);//起点;
ctx.lineTo(200,100);//终点;
ctx.stroke();//划线;
</script>
```
**ctx.beginPath()的作用**
```html
<script>
    var ctx = document.getElementById("myCanvas").getCongtent("2D");
    ctx.beginPath(); //启用新路径,与前后路径内存空间隔绝,stroke()隔绝;
    ctx.strokeStyle="blue"; //在该beginPath内定义stroke的颜色

</script>
```
**canvas画圆**
```html
<script>
var ctx = document.getElementById("myCanvas").getContent("2D");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI)//定义圆心,半径,最右端为起始点0,最右端为结束点2*Math.PI;
ctx.strokeStyle="blue";
ctx.stroke();
</script>
```
**画布上绘制字体**:fill实心线,stroke空心线
```html
var ctx = document.getElementById("mycanvas").getContent("2D");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,30);//实心线,此处(10,50)是H字母左下角点的坐标;
ctx.strokeText("I Love You",10,60);//空心线
```
**画布绘制渐变矩阵**
```
graph TD
画布myCanavas-->|var c=document.getElementById\'myCanvas'\|标签对象c

```

## PHP 服务器脚本语言
> 适合做网站,APP接口,服务器脚本语言

1. xx.php文件包含文本,HTML,JS,PHP代码
2. php在服务器端执行,以纯HTML形式返回给浏览器
3. 



























```








