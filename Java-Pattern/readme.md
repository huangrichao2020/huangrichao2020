# 先修知识

## 包名package
java类文件的全名是包名+类名，包名以src的父目录开头，建议Main主程序放在src同级目录下，方便Main.class文件基于相对路径调用import进来的类

vscode的目录检测极蠢，按它的提示package改永远运行不了程序。

建议只是自己写练习demo，一写写很多不同的Main文件的，就不要用package了，需要import的类直接写在Main文件的同级目录下即可。

### 抽象类与接口
1. 抽象类与接口都是default缺省为public.
2. 子类必须实现抽象类的全部方法.但不必实现接口全部方法,甚至可以不实现
3. 比如AbstractClass implements DemoInterface
### 多态
1. 接口与父类可作返回类型,引用声明类型.
2. 实现类与继承类可作构造类型,反射强制转换类型,反射(子类.class)获取元类型
### 反射
一句话反射:
> Shape shape_1 = (Shape)Class.forName(Circle.class.getName()).getDeclaredConstructor().newInstance(); 

//getDeclaredConstructor()可以不写

> Shape shape_2 = (Shape) Class.forName(Circle.class.getName()).newInstance();

**反射一定是用在通用的情况,即假设不知道具体子类的名字,只知道它们一定会实现的接口名**
1. 定义输入参数:public static Object getClass(Class<?extends Shape> clazz)//定义元类型Class的范围,必须满足是Shape的子类

ps:哪些情况可以输入(Class clazz)元类型? 
类的元类型 Object.class = Class clazz 以及对象的元类型 obj.getClass() = Class clazz.
 
2. 获取元类型对象对应的类型名:clazz.getName()
3. 根据类名加载对应的类,运行其中的静态方法:Class.forName(clazz.getName())
4. 加载完后创建对应的实例:Object obj = Class.forNmae(clazz.getName()).getInstance();
5. return obj;
> 应用反射工厂类时人们一般都写好了具体类,人们是知道类名的
1. 利用反射机制获取对应类的类对象:Object obj = ShapeFactory.getClass(Square.clss)
2. 用具体类强制转换:Square square = (Square) ShapeFactory.getClass(Square.class);
3. 完美实现子类的拓展,且不用修改工厂类的源码
## 设计模式大纲


- 对接口编程而不是实现编程
- 优先使用对象组合而不是继承
- 设计模式提供软件开发常面问题的最优解
- 23种设计模式分为Creational Paterns,Structural Patterns,Behavioral Patterns
```
graph TB 
    D[设计模式]-->E(创建型);
    D-->F(结构型);
    D-->G(行为型);
```
```
graph TB
    subgraph 创建型
        A(创建型)-->Factory
        A-->AbsractFactory
        A-->Singleton
        A-->Builder
        A-->Prototype原型
    end
```
```
graph TB
    subgraph 结构型
        B(结构型)-->Adapter
        B-->Bridge
        B-->Filter
        B-->Composite
        B-->Decorator
        B-->Facade外观
        B-->Flyweight享元
        B-->Proxy
    end
```
```
graph TB
    subgraph 行为型
        C(行为型)-->ChainOfResponsibility
        C-->Command
        C-->Interpreter
        C-->Iterator
        C-->Mediator中介
        C-->Memento备忘录
        C-->Observer观察者
        C-->State状态
        C-->NullObject空对象
        C-->Strategy
        C-->Template
        C-->Visitor
    end
```
```
graph LR
A(J2EE)==>B(MVC式)
A==>业务代表BusinessDelegate
A==>组合实体CompositeEntity
A==>数据访问DataAccess
A==>前端控制器FrontController
A==>拦截过滤器InterceptingFilter
A==>服务定位器ServiceLocator
A==>传输对象TransferObject
```
## 设计模式六大原则
1. 开闭原则
> 程序要想易拓展,必须支持热拔插,用接口和抽象类实现功能拓展,不许修改源码
2. 里氏替换原则
> 多态核心思想.用于实现开闭原则.任何父类能出现的地方,子类一定能出现且不出问题.
3. 依赖倒转
> 针对接口编程,依赖于抽象而不是具体
4. 接口隔离原则
> 将功能拆成多个相互隔离的接口.降低类之间的耦合度.
5. 迪米特法则,最少知道
> 一个实体最好尽可能少地与其他实体发生作用,少用其他实体或少被其它实体用
6. 合成复用原则(单一职责)
> 继承是耦合度最高的一种关系,严重破坏高内聚低耦合的设计.我们要尽可能使用合成/聚合,真要继承最好只继承抽象类.一个内聚的类最好只有一个引起它变化的外在原因.内聚性不强的就不要写到一个类中.

## 精简版:设计模式就是在讲如何更好地搞对象
> 创建型:对象怎么来的

> 结构型:对象和谁有关系

> 行为型:对象与对象在干嘛

> J2EE模式:表示层,对象合起来要干嘛,行为型的升级.

1. SRP 尽量聚合/组合,继承抽象类,一个接口对应一种变化
2. OCP 热拔插,提高可拓展.需要用到LSP,DIP,SRP
3. LSP 多态,父子类相互转型
4. DIP 针对接口编程,内部实现无论怎么改,接口输出不变,掉用该接口的类就不会变
5. ISP 接口要隔离,不同的功能要写成不同的接口,单独设计.
6. DP/LKP 最少知道,即少出现别的类的实体  
# 创建型
> 创建型的核心在于生成要用的实例
## 1. 工厂模式
> Factory创建对象,用于不同条件创建不同实例时.比如用三大协议连接服务器.

### 优点:
想创建一个对象只要知道名称即可.想增加一个产品线,拓展一个工厂类和具体类即可.无需知道具体实现
### 缺点:
每增加一个产品线,必须新增一个具体类(实验室)和对象实现工厂.
![](https://ws1.sinaimg.cn/large/006tNbRwgy1fw11dxqbs8j31kw0lxjuv.jpg)
### 创建接口
```java
public interface Shape{
    void draw;
}
```
### 接口的具体类
```java
public class Rectangle implements Shape{
    @Override
    public void draw(){
        System.out.println("InsideRectangle::draw() method.");
    }
}
```
```java
Square
```
```java
Circle
```
### 单一工厂
> 依据输入的信息,生产对应的产品
```java
public class ShapeFactory{
    public Shape getShape(String shapeType){
        if(shapeType == null){
            return null;
        }
        if(shapeType.equalsIgnoreCase("CIRCLE")){
            return new Circle();
        }else if(shapeType.equalsIgnoreCase("Square")){
            return new Square();
        }else if(shapeType.equalsIgnoreCase("Rectangle")){
            return new Rectangle();
        }
        return null;//若有输入但信息错误,则返回null
    }
}
```
### 使用工厂类,生成对应产品,并访问对应的功能
```java
public class FactoryPatternDemo{
    public static void main(String[] args){
        ShapeFactory shapeFactory = new ShapeFactory();
        Shape shape1 = shapeFactory.getShape("Circle");
        shape1.draw();
        Shape shape2 = shapeFactory.getShape("Rectangle");
        shape2.draw();
        Shape shape3 = shapeFactory.getShape("Square");
        shape3.draw();
    }
}
```
### 采用反射机制重构工厂类
> 摆脱必须在源码中 if(具体类) return new 具体类的尴尬

> 尴尬是因为源码中写了多少就只能用多少,想用新产品必须修改源码,非常麻烦
```
public class ShapeFactory{
    public static Object getClass(Class<? extends Shape> clazz){//限制必须是Shape的子类
       Object obj = null;//万能多态对象
       try{
           obj = Class.forName(clazz.getNmae()).newInstance();
       }catch(ClassNotFoundException e){
           e.printStackTrace();
       }
       return obj;
    }
}
```
### 利用JDK9特性的改进版
Class.forName(clazz.getName())等价于clazz.getConstructor
### 使用时强制转换一下即可
```java
public class FactoryPatternDemo{
    public static void main(String[] args){
        Rectangle rect = (Rectangle)ShapeFactory.getClass(Rectangle.class);
        rect.draw();
        Square square = ShapeFactory.getClass(Rectangle.class);
        square.draw();
    }
}
```
### 工厂模式总结
```
graph TB
产品接口--实现功能方法-->具体产品类
具体产品类--在工厂的创建方法中被用来new实例-->工厂类
工厂类--输入\类名.class\到工厂类中的创建方法-->Demo类
```
直接反射返回多态的子类实例
```java
public class ShapeFactory{
    public static Object getShape(Class<? extends Shape> clazz){
       try{
            return (IShape) clazz.getConstructor().newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (SecurityException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```
### 反射缺点
1. 反射也就拓展方便点
2. 程序员想用反射必须用类名.class
3. 严重违背迪米特法则
4. 我都知道类名了.直接 Shape shape = new Circle();不好点?
5. 最好是不管真实类名是Circle还是CirShape,我只要输入"circle"都能正确输出对应的类的实例.
6. 这才是我们要的.枚举类满足这一切.
在上述基础上,修改接口Shape
```java
public interface Shape{
    static String SHAPR_SQUARE = Square.class;/Square类的全限定名
    static String SHAPR_REACTANGLE = Rectangle.class;/Square类的全限定名
    static String SHAPR_Circle = Circle.class;/Square类的全限定名
    
    void draw();
}

```
应用时
```java
public class FactoryPatternDemo{
    
    Shape shape_1 = Factory.getShape(Shape.SHAPE_CIRCLE);
    shape_1.draw();
}

```
## 抽象工厂模式
>抽象工厂就是被普通工厂继承的,需要额外写个工厂生产器生成普通工厂的实例

> AbstractFactory就是把多个XxxFactory混合到一块的升级版

> 组合不同产品族里的产品,并在FactoryProduct工厂生成器类里通过getFactory方法引入AbstractFactory类,再调用抽象工厂类里相关的产品族多态生成产品实例.最终调用相关方法.

```
graph TB
定义产品族接口-->实现具体类
定义抽象工厂--被继承-->具体产品族工厂
具体产品族工厂--定义get产品族metod-->反射生成具体产品的实体
定义工厂生产器--定义getFactory方法-->根据输入字符信息返回对应的具体产品族工厂的实体
具体工厂生产器-->带main的Demo执行类
带main的Demo执行类-->先用工厂生成器生成具体工厂
先用工厂生成器生成具体工厂-->再用反射生成具体产品的实例
再用反射生成具体产品-->最后使用实例的方法.


```
### 完整的应用步骤
1. 创建形状接口
```java
public interface Shape {
   void draw();
}
```
2. 实现具体形状类
```java
public class Rectangle implements Shape {
 
   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}

public class Square implements Shape {
 
   @Override
   public void draw() {
      System.out.println("Inside Square::draw() method.");
   }
}

public class Circle implements Shape { 
   @Override
   public void draw() {
      System.out.println("Inside Circle::draw() method.");
   }
}
```
3. 创建颜色接口
```java
public interface Color {
   void fill();
}
```
4. 创建颜色接口实现类
```java
public class Red implements Color {
 
   @Override
   public void fill() {
      System.out.println("Inside Red::fill() method.");
   }
}

public class Green implements Color {
 
   @Override
   public void fill() {
      System.out.println("Inside Green::fill() method.");
   }
}

public class Blue implements Color {
 
   @Override
   public void fill() {
      System.out.println("Inside Blue::fill() method.");
   }
}
```
5. 创建混合抽象工厂类
```java
public abstract class AbstractFactory{
    public abstract Shape getShape();
    public abstract Color getColor();
}
```
6. 创建具体工厂类
```java
public class ShapeFactory extends AbstractFactory{
    @Override
    public Shape getShape(Class<? extends Shape> clazz){
        try{
            return (Shape)Class.forName(clazz.getName()).newInstance();
        }catch(ClassNotFoundException e){
            e.printStackTrace();
        } 
    }
    @Override
    public Color getColor(){ 
        return null; //必须实现父类的全部抽象方法,剩一个也不行,否则子类不就变成抽象类了?
    }
}
```

```java

public class ShapeFactory extends AbstractFactory{
    @Override
    public Shape getShape(){
        return null;
    }
    @Override
    public Color getColor(Class<? extends Color> clazz){ 
        try{
            return (Color)Class.forName(clazz.getName()).newInstance();
        }catch(ClassNotFoundException e){
            e.printStackTrace();
        } 
    }
}
```
### 创建工厂生产器
> 反射获取具体工厂的实例
```java
public class FactoryProduct{
    public AbstractFactory getFactory(Class<? extends AbstractFactory> clazz){
        try{
            return Class.forName(clazz.getName()).newInstance();
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
```
### 创建Demo使用类
> 为了方便外人使用反射,可以在Shape接口,Color接口,AbstractFactory抽象类里分别定义字符串常量:如 static String CIRCLE = "Circle.class"; static String SHAPEFACTORY = "ShapeFactory.class"

```java
public class AbstractFactoryPatternDemo{
    public static void main(String[] args){
    
        AbstractoryFactory factory_1 = FactoryProduct.getFactory(AbstractFactory.SHAPEFACTORY);//创建Shape工厂
        
        Shape shape_1 = ShapeFactory.getShape(Shape.CIRCLE);//创建Circle实例
        shape_1.draw();//使用Circle实例的画图方法画圆
        
        Shape shape_2 = ShapeFactory.getShape(Shape.SQUARE);//创建Circle实例
        shape_2.draw();//使用Circle实例的画图方法画圆
        
        Shape shape_3 = ShapeFactory.getShape(Shape.RECTANGLE);//创建Circle实例
        shape_3.draw();//使用Circle实例的画图方法画圆
        
        AbstractoryFactory factory_2 = FactoryProduct.getFactory(AbstractFactory.COLORFACTORY); //创建Color工厂
        
        Color shape_4 = ColorFactory.getShape(Color.RED);//创建Color实例
        shape_4.fill();//使用Color实例的填充方法填色
        
        Color shape_5 = ColorFactory.getShape(Color.BLUE);//创建Color实例
        shape_5.fill();//使用Color实例的填充方法填色
        
        Color shape_6 = ColorFactory.getShape(Color.GREEN);//创建Color实例
        shape_6.fill();//使用Color实例的填充方法填色
    }
}
```

## 补充介绍简单工厂模式
> 简单工厂模式是比工厂模式还简单的一种模式,简洁到了极致

**Factory下不再设具体生产工厂,全部在Factory中用case语句按String生成对应产品实例**
![](https://ws4.sinaimg.cn/large/006tNbRwgy1fw28txeptbj31920lodm1.jpg)

### 大致结构
```
graph TB
    subgraph 简单工厂 括号用\ \代替
        interface_Mouse-->class_DellMouse
        interface_Mouse-->class_HpMouse
        MouseFactory-->static_createMouse\int_i\
        createMouse\int_i\-->case_0:return_DellMouse
        createMouse\int_i\-->case_1:return_HpMouse
        DemoEasyFactory-->MouseFactory_createMouse\1\
        Mouse_m=MouseFactory_createMouse\1\-->一个惠普鼠标的实例
    end
```

### 三种工厂模式的应用总结
1. 简单工厂类
```java
Mouse m = MouseFactory.createMouse(0){
    case 0:return new DellMouse();
}
//或者改写成反射形式
//一个代工工厂两条鼠标生产线
//已知DellMouse和 HpMouse. Mouse里得写好DELL常量,MouseFactory里得写好反射生成实例的方法.
Mouse m = MouseFactory.getMouse(Mouse.DELL);
```
2. 工厂类
> 
```java
//已知 DellMouse和 HpMouse 写好鼠标工厂生成器
MouseFactory dellFactory = MouseFactoryProduct.getFactory(MouseFactory.DELL);//生成具体产品族的实例
Mouse m = dellFactory.createMouse();
m.sayHi();
```
3. 抽象工厂类
> PcFactory即实现Mouse接口又实现KeyBo接口
```java
//用工厂生成器反射生成具体工厂实例
PcFactory dellFactory = PcFactoryProduct.getFactory(PcFactory.DELL);
Mouse m = dellFactory.createMouse();
m.sayHi();

```

## 单例模式
> 特点

1. 单例类自己就能在类中创建私有静态实例(外界不能直接访问它)
2. 且只能创建唯一一个实例(所以它的构造函数必须私有化)
3. 向外提供访问这个实例的全局访问点(静态方法)

> 用途

1. web计数器,单例模式临时缓存一下
2. 文件IO操作,单例保证一次只能被一个线程访问,避免踩踏事件
3. 要求生产唯一序列号

### 创建一个单例类Singleton
> Singleton类只是统称,实际可以是CountryMaster(总统)类
```java
1. 私有single实例属性: private static Singleton instance = new Singleton();
2. 私有构造器,单例模式特色:private Singleton(){ }
3. 对外公开获取实例的方法:public Singleton getInstance(){
    return instance;
}
4. 通过实例能访问的方法:public void showMessage(){
    System.out.println("这是单例鼻祖.");
}
```
### 使用单例
    单例模式:static getInstance()方法会在内存中开辟一块静态方法区.保留改该方法内return的对象的引用.使每一次
```java
public class SingletonPatternDemo{
    public static void main(String[] agrs){
        Singleton instance = Singleton.getInstance();
        instance.showMessage();
    }
}
```
## 线程安全+延迟加载的单例模式
```
public class singletonDemo{
    
    private singletonDemo instance;
    private String lock;
    private singletonDemo(){
    }
    public static singletonDemo getInstance(){
        if(null == instance){
            synchronized(singletonDemo.class){ //锁住的是该类的类对象
                instance = new singletonDemo();
            }
            return instance;
        }
    }
    
    public singletonDemo getInstance(){
        if(null == instance){
            synchronized(this){ //锁住的是该类的实例对象
                instance = new singletonDemo();
            }
            return instance;
            
        }
    }
    
    public singletonDemo getInstance(){
        if(null == instance){
            synchronized(lock){ //锁住的是配置的实例对象
                instance = new singletonDemo();
            }
            return instance;
        }
    }
}
```
```
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
```
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
```

```
@startuml
A -> B
@enduml
```


 $ x \href{why-equal.html}{=} y^2 + 1 $
$x=y^2+1$

```
graph LR
A-->B
```
```
sequenceDiagram
A->>B: How are you?
B->>A: Great!
```

```
gantt
dateFormat YYYY-MM-DD
section S1
T1: 2014-01-01, 9d
section S2
T2: 2014-01-11, 9d
section S3
T3: 2014-01-02, 9d
```

```sequence
A->>B: 你好
Note left of A: 我在左边 
Note right of B: 我在右边
B-->A: 很高兴认识你
```