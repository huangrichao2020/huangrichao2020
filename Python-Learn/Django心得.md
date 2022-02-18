[toc]
### 前言
    如何使用 Django 实现一个数据库驱动的 Web 应用。
### 知识储备
    1确认python支持的Django版本上限 python3.6 匹配Django2.1.1
    2.查看端口被哪个进程占用: lsof -i:8000
    3.根据PID结束占用该端口的进程:kill 6848
    4.查看文件目录 tree
    5.django-admin.py是安装了Dj后自带的管理工具 check,cleanup,startproject
    6.touch新建文件 touch hello.html
    7.404 很有可能是runserver没开,或者修改项目文件的过程中有invalid语法,导致动态runserver出错
### 1.下载Django
    pip install Django == 2.1.1
### 2.创建项目
    进入站点的父目录,如Desktop
    执行 django-admin.py startproject testdj
    添加数据库表的模型 python manage.py migrate
    指定port运行  python manage.py runserver 0.0.0.0:8000 
    默认port是 python manage.py runserver (127.0.0.1:8000)
![image](http://note.youdao.com/yws/res/1185/A65DBBA39F4F4476BB3A1A21A8816F2F)

### 3.文件目录
├── db.sqlite3

├── manage.py //包管理工具,用于项目交互

└── testdj //项目容器

    ├── __init__.py
    ├── __pycache__
    │   ├── __init__.cpython-36.pyc 
    │   ├── settings.cpython-36.pyc 
    │   ├── urls.cpython-36.pyc 
    │   └── wsgi.cpython-36.pyc 
    ├── settings.py //项目配置
    ├── urls.py //网站目录
    └── wsgi.py //服务器入口
### 4.通过urls文件配置path显示view的内容
```
__name__ = 'view.py'
from django.http import HttpResponse

def hello(response): #默认参数response
    return HttpResponse('Hello world!')
```
```
__name__ = 'urls.py'
from django.urls import url
from . import view

urlpatterns = [
    path('hello/', view.hello),
]
```

### ORM对象关系映射 数据库
- 数据直接在view文件里,不能体现MVC视数分离的要求
- 此时采用可才用模板文件,在父testdj目录下创建templates目录
- 内置hello.html等标记文件,html文件内就是用{key}表示要显示的数据value
- 于是就能在视图分离的情况下,使数据显示出各种格式效果
```html
// hello.html
<h1>{{ hello }}</h1> //{hello} 表示hello键对应值,k-v对将在view里定义
```
修改settings,将TEMPLAT文件里的DIR改成

    'DIRS': [os.path.join(BASE_DIR,'templates')],
修改view视图:先自定义字典,再通过render导入html(内含key名)文件与字典context,匹配后,返回一个html文本,此时html内的{key}已经根据context转成了对应value
```
from django.shortcuts import render
 
def hello(request):
    context          = {} #字典
    context['hello'] = 'Hello World!' #映射
    return render(request, 'hello.html', context)
```
```
graph LR
A(HTML)-->|作为字符串实参导入到|B(view.hello方法的render)
B-->|urlpatterns|C(urls)
```
注: urlpatterns = [ path("hello/",view.hello), ]<br>
&#160; &#160; &#160; &#160;return render(response,"hello.html",context)
render返回的是一个html文件
![image](http://note.youdao.com/yws/res/1317/27AF00B1B6334C02A07E45B94AC0F60A)
### 最终效果

![image](http://note.youdao.com/yws/res/1314/CA7257187ED449CFB878D32DD8EBFC18)

### 因为还没配issue,所以服务器(此处是运行这project的我们的笔记本)会按http1.1标准报错500:表示意想不到的情况导致服务器出错
![image](http://note.youdao.com/yws/res/1320/3DD5FE66C1DD447EBEAC62FE96885836)
### Django ORM技术讲解
    作为一个Web框架Django居然不用数据库,是因为它自带ORM映射器.
    可以在project目录下创建我们想要的table_mudule.py
    在第一行导入ORM模块 :from django.db import models