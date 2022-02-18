## 函数式编程
### 纯函数 pure function
- 函数纯粹些 purity
- 无副作用 side effect mutation
```
return x+y 与
x+=y,return x 的区别
前者返回二者之和，不改变x的值
后者返回二者之和，但是改变x的值
```

### 引用透明性
    Referential Transparency 对于相同的输入，总是有相同的输出

- x.appender("xxx")，将xxx拼接到x后面并赋值给x，典型的违反引用透明性

### 一等公民
    一切都是表达式：严格求值，非严格求职，惰性求职
call by value,call by name,Lazy Evaluation

### 优点
- 效率高
- 易推理
- 多核并行，最适合函数式编程

### 表达式原则
    输入的都是表达式，输出的都是变量名，没有定义变量名就默认从res0开始
- 一切变量皆表达式
- 一切输入皆表达式
- 一切输出皆变量
```
//自定类型判断
val p:Unit=()等价于
val q=()
```
- val 常量
- var 变量
- lazy val 惰性常量，定义时不求值,第一次被使用时才求值

### 赋值顺序
从右往左，与人类的书写习惯相左。所以“低精度的数据可以赋值给高精度的数据”，书写时应当左高右低

### 字符串
scala String与Java一样，但scala支持`字符串插值`的形式引用String变量
```scala
val name = "HuangRichao"
val cout =  s"my name is ${name}"//”“号前加s
```
### 函数
def foo() =throw new Exception("Nothing")返回
Nothing类型，scala一般用Option出来Null或Nothing的情况

### 代码块Block
    Block也是表达式，最终值是最后一个表达式的值
{exp1;exp2}//两个表达式同行用；隔开
{
    exp1
    exp2
} //换行自动区分两个表达式

    代码块作方法体
def add(x:Int, y:Int) = x+y//如果只有一行表达式的话，有没有{}都一样

## 导包
全导

    import java.awt._

选择

    import java.awt.{Color,Font}

重命名
    
    import java.util.{HashMap => JavaHashMap}

导包时忽略

    import java.util.{HashMap => _, _}
    
## 数据类型
    Byte,Short,Int,Long,Float,Double/64,Char/16为Unicode,String,Boolean,
    Unit等价于void(),
    Any通用父类,
    Nothing通用子类,
    AnyRef引用父类.全部都是对象

## 符号为什么也是对象
    'x等价于scala.Symbol("x")的缩写
## 字符分两种
真正的字符
    'A'
unicode码字符
    '\u0041' 等价于'A'
    '\n'转义,执行对应功能
## 字符串