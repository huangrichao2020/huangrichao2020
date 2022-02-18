[toc]
## 类的四种加载
```
Object obj = new Object();

引用变量信息保存在 虚拟栈

对象实例数据保存在 堆区(GC新生代区),
对象类型数据(接口,方法,版本,静态成员等)保存在 方法区

指向对象实例数据的指针在 句柄池
指向对象类型数据的指针在 句柄池
句柄池在堆区

类加载器会先加载方法区,即将静态成员装载到方法区内,变相创建对象,并且方法区只能被装载一次.


程序计数器:当前线程执行到的代码行
本地方法栈:运行C之类的native方法

## 内部类助外部类实现多继承
```
内部类可以继承一个与外部类无关的类,并在外部类中,供外部类使用内部类对象的相关方法,变相实现多继承

如儿子同时继承父母亲的特特色(功能)

interface Father{ public int strong();}
interface Mother{ public int kindHeart();}

class FatherImpl extends 

## OOP
抽象,继承,封装,多态
```
抽象
就是把现实世界中的某一类东西按一定的边界提取出来.系统需要什么就抽象什么,多余的统统不考虑

数据属性抽象,过程行为抽象
```
```
封装
封装使得软件能模块化开发,特点是高内聚,低耦合,设计模式.
最典型的封装就是对象,将对象内的属性私有化,只供对象内部方法调用,对外公开方法,供人调用.注意要把对同一类事物的操作与相关属性数据放到同一个类中.
```
```
继承
在一个已经存在的类的基础上,加入若干新内容,或修改原来的方法使之更适合特殊需要.
特点,子类之间可以自动共享父类的数据和方法.该机制提高了软件的可重用型和可拓展性
```
```
多态
客户端源码中有这样一句
Father son1 = new Son1();//Son1继承父类show1方法,自定义show2方法
编译器器不会制定son1这个引用到底指向哪个类型

运行
son1.show1();
运行方法时才确定son1这个引用对象调用的是Son1类里继承的父类方法
```
### 原理:动态绑定
- 编译时看的是引用的声明，像Father1 father1 = new Son1();编译器只会知道father1的声明类型是Father1，找方法也在Father1中找.
- 所以Father1中有show1方法，故father1.show1()调用成功，但是Father1中没有show2方法，故father1.show2()编译出错。
- 至于father1.show1()最终调用的是子类的show1方法，则就是动态绑定的问题。
- **动态绑定**:运行时自动确定调用哪个方法的现象。
动态绑定调用的全过程：
- 编译器查看对象的创建类型和调用的方法名，然后一一列举出声明类型和该类型的超类中同方法名的所有方法（超类中的需要是public属性的）；
- 根据调用方法的参数，选择合适的一个函数（合适指的是类型完全相同或者自动转换类型后符合）。如果没找到那么直接报错。
- 虚拟机确定对象的实际类型，寻找该类型下的合适方法调用，如果没找到则到超类中去找。
-静态绑定（如果方法为**private，final，static**则采用静态绑定，编译时已经索引好具体调用的地址）

## 数据类型
    8+1+1 八种基本+枚举+引用
## 抽象类
    非抽象类继承一个抽象类,必须覆盖父类所有抽象方法
    abstract 不可private、static、final、native
## 从final讲继承
    继承类意味着子类会有改动,不然继承个屁
    继承时继承方法却不意味会改动它,因为改动它叫覆盖
- 就近原则 final 修饰的变量不可变引用,引用对象还是可变的
- 所以final类不可修改,不可继承
- 普通类中final方法可以继承,不可覆盖
- final 不可修饰abstract
- final可以重载,因为重载不与它冲突(重载并没有说谁在谁的基础上改动生成新方法).它欢迎被人使用,但不可修改
## JSP与Servet,视图与控制
- Servlet 完全是 JAVA程序代码构成，擅长于流程控制和事务处理，通过Servlet 来生成动态网 页很不直观.
- JSP 由 HTML 代码和 JSP 标签构成的.jsp文件，可以方便地编写动态网页.
- 因此在实际应用中采用 Servlet 来控制业务流程，而采用 JSP(简易Servet) 来生成动态网页.
- JSP嵌入JAVA代码,Servet嵌入HTML代码
## static静态
    静态成员属于类,只要程序加载了类的字节码,静态成员就会被分配空间,可以直接调用
- 静态代码块内部不可访问非静态成员,因为类加载时,无法确定非静态成员的内容(尚未实例化)
- 非static成员当然可以访问static成员

## == 与 equals的区别
- == 判断基本数据类型的话,用于判断内容或大小是否相等
- == 判断引用对象时,判断内存地址是否相同
- 即==用于判断二者是否同一个对象
- equals相对不会这么严格,只要内容相等就返回True
- 顺便一提Integer是引用,默认为null
## public等作用域
- public 不管是不是同一个包内都可以访问到
- protected 同一包内可以访问,不在同一个包内的,必须继承后再共享里面的数据与属性,这是一种对父类的保护,保证每个子类继承的父类数据是一样的.
- default 同一个包内的类,接口可以互相访问
- private 仅同一类内可以访问
## 接口与抽象的区别
- interface 内成员必须是public,抽象类可以有private
- interface内不可有普通方法,抽象类可以有
- 二者都不能new,不是普通类.二者常用语设计模式和代码重构
## final,finally,finalize
- final是声明式关键字,用它声明的成员有以下效果.final属性不可修改(常量),final方法可继承不可覆盖,final类不可继承
- 局部内部类要访问局部变量，局部变量必须定义成final类,引用始终指向该变量.内部类可访问外部类成员
- finally 异常语句,表示无论catch了什么,最终都要执行
- finalize,Object类的垃圾回收方法GC时会用到
## String,StringBuilder,StringBuffer
- String为字符串常量，而StringBuilder和StringBuffer均为字符串变量，即String对象一旦创建之后该对象是不可更改的，但后两者的对象是变量，是可以更改的。
- String str;是字符串常量,属于不可变对象. str只能赋值一次,第二次赋值原理的对象str会被GC回收,JVM新建一个str.于是大量操作的时候,不断回收与创建会使程序运行缓慢,效率低下.
- StringBuilder与StringBuffer都是字符串变量,属于可变对象.
- StringBuilder线程不安全,StringBuffer线程安全.
StringBuilder stringBuilder=new StringBuilder().append("abc");
stringBuilder = stringBuilder.append("de");

## OBject类方法
- clone方法
- getClass方法 ,获取运行时的类型
- toString方法 打印对象名,对于调用该对象的toString方法
- finalize 释放资源,很少使用
- equals方法,在Object的源码中equals返回的是
public boolean equals(Object obj){
    this == obj; 
}
## length属性与length方法
- Array.length,String.length()
## hashCode() collections常用
- Set集合不允许有重复元素.
- 看某个对象是否已经在一个对象集合内,先用hashCode()快速对比,再在hashCode()为True的对象里,用equals找内容相等的对象,若都找不到,则说明该集合内,并没有与该对象重复的对象.
## 线程
线程构造器必须传入一个实现了Runnable接口的类的对象,以此创建类线程对象
public Study implements Runable(){}
Thread thread = new Thread(new Study())
- 等待获取锁 : wait(long timeout)
- notify,notifyAll,interrupt,wait时间到
## 反射
    我们可以通过反射动态读取正在运行的类的元数据
- 优点灵活,可拓展,实现正在运行的类可配置
- 缺点是解释操作,字段接入的速度非常慢.
- 用处:jdbc,java框架,jdk动态代理
## 流操作
- 字节流继承于:InputStream,OutputStream
- 字符流继承于:InputStreamReader,OutputStreamWriter
- 当然在java.io包里还有更多其他流操作,需要的时候查一下JDK文档即可
## 多线程
    本质,在同一个进程中,有多个不同的执行路径
- 充分利用系统资源，缩短程序响应时间
- 进程是线程的集合
- 线程同步,线程都在同一个路径内,前一个线程执行完毕后,下一个线程再接着执行
- 线程异步,进程中有多个不同的执行路径
- 线程间强行同步,synchronized,wait,notify
### 线程安全
- 同步是线程安全的
- 假设种树这个任务有三个线程：挖坑线程，种树线程和填坑线程，后面的线程(上锁)必须等前一个线程完成才能进行，而不是按时间顺序来进行.
- 否则按时间执行的话,就会出现一旦某个线程出问题未响应,时间自动执行下一个线程,极大概率出现数据不存在,对象不存在,或内存泄漏的问题
- **根据同步实现线程安全**:synchronized,wait都是所后面的线程,前一个线程完成后才会执行后一个线程
- **根据不可修改实现线程安全**:final,Lock
### 创建线程
- 继承Thread类,自己实现run方法, new 一个对象后,调用对象的start方法
- 写一个目标类实现Runable接口,实现run方法,new一个目标类对象后,将该对象传入Thread类的构造方法中,启用Thread对象的start方法
- 推荐实现Runable接口,因为这样可以再继承别的类,而继承Thread类只能是单继承.我们都知道,Java是只允许单继承的,我们一定要继承Thread类的话,可以用内部类,间接实现多继承
## 为什么要实现Serializable接口
    一个对象序列化的接口，一个类只有实现了Serializable接口，它的对象才能被序列化

## 内部类
    类中类实现多继承
- 内部类的构造方法挪到外部类,就是外部类的普通方法
```
class A{    
    void output(){}
    class B{
        void output(){}
    }
    B newB(){
        B b = new B();
        return b
    }
    
    void main(){
        
    }
}