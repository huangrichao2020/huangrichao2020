
# IDEA按F1自动读取文档！！

## 计算机硬件
1. 运算器
2. 控制器 与1合称CPU
3. 存储器
4. 输入设备
5. 输出设备

## 人机交互
1. 命令行交互
2. 图形化界面
3. 常用快捷键
    1. tab 缩进
    2. shift 大写
    3. crtl 控制
    4. alt 修改
4.常见DOS命令
    1. dir == ls
    2. md == mkdir
    3. rd == rm director
    4. cd == cd 原理改变当前指令所在目录
    5. cd.. == cd ..
    6. cd\ == cd
    7. del == rm 
    8. exit 推出
    9. cls == clear
## Java历史
    1. 作者詹姆斯.高斯林
    2. C++转Oak,后改名为Java(Java) 盛产咖啡的爪哇岛,按时加班
    3. 5.0老虎 6.0野马 7.0河豚
    4. J2SE Java 2 Platform Standard Edition
    5. J2EE Java 2 Platform Enterprise Edition
## 环境配置
    path与classpath
1. javac.exe与java.exe一般在JDK/bin/目录下,在cmd里每次运行javac指令都要写一遍完整目录,非常麻烦
2. 将JDK/bin目录配置进系统path,以分号隔开,即可在任意目录下使用javac命令
3. 建议新建J变量名为AVA_HOME的路径,以JDK路径为变量值内容
4. 然后再在path里添加%JAVA_HOME%/bin;即可动态调用
5. classpath 类路径 : 默认当前路径,即cmd运行java hello时会去当前路径下找hello.class文件
6. 若我们新建了classpath,并把类文件的路径放进去,我们就可以在任意目录下运行java hello指令
7. 缺点:classpath被限制了,每次都只能到配置的目录下找类文件,故classpath是没有太多意义的
8. 要想保留查询当前路径的功能,在classpath里添加.;
## Java格式
```java
1. /* 多行注释 */
2. /**
3.  *文档注释
4.  */
```
1. 关键字
    goto 与 const是保留关键字,虽无意义,但也不能做变量名或类名
2. 不能数字开头,或与关键字重叠
3. package com.heima.www 根/父/子
4. 驼峰命名法
    1. 包全小写
    2. 类与接口首字母大写
    3. 方法与变量 第二个单词开始首字母大写
    4. 常量纯大写并且词与词间以下划线隔开
5. 基本数据类型
    

    byte,short,int,long,float,double,boolean,char
    String是引用,默认值null
可以直接写,直接输出,直接赋值的数据/量
6. ''单引号里的内容必须是单个字母,数字或字符.0个或多个都不行.但是""的写法却是可以的,' '的写法也是可以的


7. true,false是boolean,没有明确的大小,属于基本数据类型,可以直接打印
8. 进制数表示法 scale
    1. ob1101 二进制数1101
    2. 0776 八进制数776
    3. 0xfff 十六进制数fff
## 十进制转换方法
    除基倒取余,直至结果为0,最后一个余数在是转换结果的最高位
1. 8421码 
    正常2进制数,4个一组成16进制,3个一组成8进制
2. 原码反码补码
    负数符号位1 不变
    
## 数据转换
1. 整数默认用int a = 15+1 a默认是int
2. long a = 8888888报错,因为左右类型不匹配
    long a = 8888888L正确
3. float a = 12.3 报错,因为小数默认double
    float a = 12.3f正确
4. 总结 float 与 long 数字尾必须加f或L

### 隐式转换
int a = 4
byte b = 3
a = a + b  //b先被隐式转换为int后再与a作运算
### 强制转换
int a = 4
byte b = 3
b = (byte)a + b //a被强制转(砍)为byte,丢弃超过8位的部分

---
## Head First Java
> 思想金句
    
    执行程序意味着:
1. 加载这个类
2. 执行它的main方法
3. 直至main的所有代码结束为止
4. 只有进入main才能让编译器忙起来

    
    if与while的真谛
1. 如果不下雨,就xxx if
2. 只要不下雨,就xxx while
3. 如果下雨就戴雨伞,不然就戴墨镜
    
### while的精炼表述
    while(x>3){ //循环 }
**循环会运行是因为x大于3**

### 随机组合术语
```java
public class PhraseMatic{
    public static void main(String[] args){
        String[] wordListOne = {"ab3","1231","sas"};
        String[] wordListTwo = {"ab3","1231","sas"};
        String[] wordListThree = {"ab3","1231","sas"};        
        
        int OneLength = wordListOne.length;
        int TwoLength = wordListTwo.length;
        int ThreeLength = wordListThree.length;
        
        int rand_One = 
        ;
    }

    
}
```
### 3.量
> java变量赋值本质是一个送数操作,强引用,内存空间名就是变量名,内存空间的值就是变量值

int b,a = 10;
b = a; 本质是执行MOV b,a 将a引用所指向的内存地址中的数据传给b引用所指向的内存地址;
> java对象本质是一个引用,str2 = str3 

只不过是将str3的引用的内存地址复制给str2,使str2也指向这个内存地址;

> String str = "Hello World" 自动从字符串常量池里获取数据,直接地址指向字符串常量池

所以String str2 = "Hello World";
str2 == str返回的是true;
但是String str3 = new String("Hello World");是在堆中全新创建了一个对象;
所以str3 == str2 返回的是false;

String str = null;表示str这个引用类型变量指向的地址为空,还未指向任何有效的对象,该被回收.

> String str1 = "Hello ";String str2 = "World";

str == str1+str2 返回的是false,因为str1+str2执行的是拼接操作,只要是拼接,就一定会生成新的对象来存结果.想想也对,确实生成新对象,不然新的数据没地方放.

## 一个完整的运行过程
```
graph TD
A(java.exe运行.class文件)-->B(类装载器加载需要的类到内存中)
B-->C(字节码校验器校验字符)
C-->D(解释器翻译成bin文件)
D-->E(hostpost执行引擎)
E-->F(操作系统)
F-->G(控制硬件)
```
### 数据类型
- byte 1B 百
- short 2B 万
- int 4B 二十亿
- long 8B  L
- float 4B 正负十亿
- double 8B D
- 0八 0x十六 0b二进 **数字间可以加下划线**

### 字符与编码
1. encode="utf-8"
2. 'a' = '&#97' = '\u0061'十六进
3. 字符可直接与int类型运算 a-1 = 0x0060
4. \r回车 \b退格 \n换行 \t制表

### Java是强类型语言
> 通过变量名访问变量中存储的值
1. 必须先声明,局部或静态变量必须初始化 int age = 29;

### 作用域
> 自动类型转换:从小范围到大范围

> 强制类型转换:从大范围到小范围:double d = 3.14159 ;
float f = (float)d;

> 布尔不可转

### Java除法是地板除
> 结果是只有整数部分的浮点数

关系`$\begin{cases} ==\\!=\\<\\>\\<=\\>=\\e~instanceof~ E\end{cases}$` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 逻辑`$\begin{cases}\&\&~~\text{短路与}
\\||~~\text{短路或}\\!~~\text{非}\\|~\text{或}\\\wedge ~~\text{异或,不同为true}\end{cases}$`

位运算:二进制补码按位与或者按位或
三目运算:int a = (a>b)?a:b
### 按位取反~ 
> 正负2都以补码形式保存
~2 = 1111 1111 1111 1101<sub>补</sub> = 1111 1111 1111 1100<sub>反</sub> = 1111 1111 1111 0011<sub>原</sub> = -2
**默认有符**
1. << 左移运算高位舍弃,低位补0
2. >> 有符号右移,高位补符号位(正0负1),低位舍弃 
3. >>> 无符号右移运算,低位舍弃,高位补0

### 隐式转换
运算表达式会将式中的变量自动转换成int以上的类型,
short s = 12; s = s + 1 报错;

复合运算没事;s += 1不报错;

赋值时不会自动转换,必须强制转换 int i = (int)2.5;

## 流程控制
> 先写的代码先运行,后写的代码后运行

注意switch(num)里的num只能是4字节以下的类型byte,short,char,int,string,do-while

## JAVA标注
> 给计算机看的注解,本质是不直接参与业务控制的类

1. Anotation 标注
2. Metadata 元数据 描述数据的数据
3. 编译,类加载,运行期间被IDE读取,处理.
### Override
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器会帮忙检查你的子类方法名是否与父类一致.若没有@Override很容易出现子类没有重写对方法,使用子类时实际用的是父类的老方法.
### @Deprecated
1. 建议不要用该方法,编译器会帮忙报warning.
2. 该方法迟早会在未来的版本(下一代JDK)中删除
3. 该注解会帮忙在方法名被用时,加一条删除线,仅示提醒,不影响功能.
### SuppressWarning
1. 方法前加SupperessWarnings("unchecked")抑制警告
2. 


### Java泛型
1. 方法中使用泛型做实参，必须用实<?>
2. 

### break与continue
- break实现截止功能
- continue实现跳过(隐藏)功能
```java

public class Test {
	public static <T> void printl(T n){
		System.out.print(n);
		System.out.print(",");
	}
	public static void main(String args[]){
	
	int [] numbers = {10, 20, 30, 40, 50};
	for(int i :numbers){
		if(i==40) continue;
		printl(i);
	}
      
      System.out.print("\n");
      String [] names ={"James", "Larry", "Tom", "Lacy"};
      for( String name : names ) {
         printl(name);
      }
   }
}
```

### for循环打印菱形
```java
public class Test {
    public static void main(String[] args) {
        //定义变量
        int i,j,q;
        //打印菱形的上半部分，左边打印倒直角三角形的空格，右边打印等腰三角形
        for( i = 1;i < 6; i ++) //外循环控制行数，共打印五行
        {
            //左边打印倒直角三角形空格
            for( j = 6; j > i; j--) //与外循环关联，初始值不变，表达式变化，控制打印的列数
            {
                System.out.print(" ");
            }
            //右边等腰三角形
            for( q = 1;q < i*2; q++) //与外循环关联，初始值不变，表达式变化，打印奇数列1，3，5，7，9
            {
                System.out.print("*");
            }
            System.out.println();    //换行
        }
        //打印菱形的下半部分，左边为直角三角形的空格，右边为倒的等腰三角形
        for(i = 1; i < 5; i++) //外循环控制行数，共打印四行
        {
            //左边直角三角形空格
            for(j = 0;j <= i; j++) {    //与外循环关联，初始值不变，表达式变化，共打印五行
                System.out.print(" ");
            }
            //右边倒直角三角形
            for( q = i*2; q < 9 ; q++) {    //与外循环关联，初始值变化，表达式不变，打印奇数列7，5，3，1
                System.out.print("*");
            }
            System.out.println();    //换行
        }
    }
}

```

### Spring Debug与普通Java项目Debug的区别
- Spring项目debug起来后就会一直运行，main方法永远不会结束（结束了服务器就挂了），可以很方便地运起来后再打断点
- 普通Java项目debug起来后，要是没有事先打好断点，mian方法直接额从开始运行到结束，完全不会停。必须提前打好至少一个断点。
- 
### 将枚举类改造成节点类
普通枚举类，Color类自静态带values方法，遍历枚举成员生成Color[] 
```java
public enum Color{

    RED("红色", 1), GREEN("绿色", 2), BLANK("白色", 3), YELLO("黄色", 4);
    }
```

# JVM 之Class反射

## 反射基础
- 一个类的类型信息都在这个类的Class对象里,这个对象保存在.class文件内.
- 当类内有静态成员**被用**或这个类本身被用,JVM会动态加载(需要时再加载)这个类所有的静态代码块.

- 使用一个别人写好的类前JVM要做三件事:加载.class文件,校验字节码,创建Class对象
- 链接:验证字节码,开辟静态空间
- 初始化: 初始化静态代码块(为静态空间赋值)
Class clazz = Base.class;不对初始化静态块
Class clazzz = Class.forName("zzz.Base"); 初始化静态块

- 类型下转型之前先检验

```
{
    /**
    * 简单描述一下下类型检查
    **/
    class Derived extends Base{};
    Base base = new Derived();
    if(base instanceof Derived){ //OK}
    else{ //not ok}
}
```
## 查看某个对象的类信息
- java.lang.reflect库里有 Field,Method,Constructor.三个类
- 利用Class clazz里的getField(),getMethod(),getConstructor()方法返回一个代表这三种信息的数组
- 这样我们可以运行时才再获取类信息,无需编译(编码)时就知道一切
## 总结
- 当反射(java.lang.reflect)与未知类型的对象打交道时,JVM需要获取这个对象的.class文件,如Class clazz = obj.getClass()简单检查一下这个对象
- RTTI编译时打开与检查.class
- 反射运行时打开与检查.class
```
{
    
}
```

## 基础类的普通与静态方法
```java
package bcs.array;

public class Arrays {
        //私有属性
        private int x;
        //构造方法
        public Arrays(int x){
            this.x = x;
    }
        //普通方法,方法里访问并获取类属性的值(值传递)
        public void ifElseTest(){
            int x = this.x;
            if( x == 10 ){
                System.out.print("Value of X is 10");
            }else if( x == 20 ){
                System.out.print("Value of X is 20");
            }else{
                System.out.print("这是 else 语句");
            }
        }
        //静态方法,直接引入形参,等于构造方法+普通方法
        public static void ifElseTeach(int x){
            if( x == 10 ){
                System.out.print("Value of X is 10");
            }else if( x == 20 ){
                System.out.print("Value of X is 20");
            }else( x == 30 ){
                System.out.print("这是 else 语句");
            }
        }
    }

```
```
graph TB
    subgraph Java
        基础语法-->javaSE
        javaEE-->severlet
        severlet-->JSP
        JSP-->MVC
        MVC-->Spring
        Spring-->SSM
    end
    subgraph 进阶
        JavaEE-->数据结构
        数据结构-->网络编程
    end
```

### 从键盘读取数据
- System.in.read() 返回对应按键的ACSII码,是int型数字
- (char) System.in.read()返回键盘真正对应的字符
- Character.toUpperCase((char) System.in.read()) 实现从键盘读取任意字母并返回它的大写。
- 在输入main参数时读取字符的方法 Char grade = agrs[0].aharAt[0];
- 
### 无参静态代码块的风险
- 代码写成静态虽然很方便，但是必须知道静态代码只要被加载了就一定会自动运行，特别熟无参的静态代码块。要是在main里调用了该静态代码块，等于是在重复运行。
- 

### Swith-Case语句
**特点：向下兼容的switch开关**
```
int grade;
short grade;
byte grade;
char grade;
string grade
switch(grade){
    case 'A': System.out.print("你好")；break;
    case “被匹配值” : “成功匹配后的返回值”；直至break；若无break，将一路执行到default;
    case “被匹配值” : “一路匹配失败”；仅执行default;
    default执行后自动跳出switch{}方法体；
}
```

### 内置数据类型与包装类
**特点：当一个基本数据类型被当作对象使用时，编译器会自动将其装箱**
```
graph LR
java.lang-->A
A(Numbers)-->Byte
A-->Double
A-->Interger
A-->Float
A-->Short
A-->Long
```
拆装箱
```
Integer x = 5; // 装箱 ,int 5-->Integer 5
x=x+10;//对象是不能直接加减的，必须拆箱成int后再运算，在装箱成Integer
System.out.println(x); //自动拆箱
System.out.println(x.intValue()); //手动拆箱+手动转型

x.compareTo(10); //10装箱成Integer，x>10返回1，x<10返回-1;

x.equals(10); //等值返回true，不等返回false

Integer.valueOf(5);//拆箱，Integer 5-->int 5

Integer.vparseInt("901225"); //String-->int
```
**总结：** 所有需要基本类型与包装类型相互转化的地方java都会自动进行
Integer x = 5时
x.intValue()与Integer.valueOf(x)的区别:都是拆箱,前者更灵活.

### Math类
**Math类方法返回的基本是Double**
- 反正切 arctan(1) 输入；tan(x)的y轴数值
- 弧度转角度 toDegrees：toDegrees(π) 输入：π值
```java
Math.abs(-10); //返回double，long,float,int的绝对值；
Math.ceil(120.11); //取整加，去小数后加1
Math.floor(102.11);//地板减，去小数
Math.rint(102.11); //绝对值四舍五入，再添上符号
Math.rount(-121.5); //无论正负，向右四舍五入，即Math.floor(x+0.5);
Math.exp(1); //返回e^1;

Math.pow(2,3); //2^3
Math.sqrt(9);//√9
Math.toDegrees(Math.PI/2);//弧度转角度
Math.toRadians(90);//角度转弧度

```


## Lambda表达式
- 函数
- 匿名方法,有参数,方法体 . 允许省略修饰符,返回类型,Return,方法名
- 最简写法: 
```
parameters -> parameters 
或 
(parameters , count) ->{ parameters + count ;System.out.println(parameters);} //函数体没有return则是void函数,只执行,不返回
或
int size =  c->{s= c.size();c.clear();return s;}
```
## java排序
```
public class RandomDemo{
    int count = 0;
    Random random = new Random();
    List<Integer> list = new ArrayList();
    for(int i= 0;i<10;i++){
        list.add(random.nextInt(10000));
    }
    Collections.sort(list);
    Iterator it = list.iterator();
    while(it.hasNext()){
        System.out.println(++count + ":" + it.next());
    }
    
}

```