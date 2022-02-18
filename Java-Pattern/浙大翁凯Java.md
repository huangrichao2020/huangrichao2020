## 调试
```
调试就是按一下执行一下光标所在的那一行语句

JAVA的封装与调用体会,以Scanner库为例
Scanner是一个class库,即Scanner是一个如int这样的类名
Scanner in = new Scanner(System.in);
创建一个Scanner型的变量,取名为in,用创建关键字new 将其初始化, 
注意是先new一个参数为System.in的Scanner()型的实体出来,System也是一个类,in是它专门分配给读取stdin设备信息流的变量

for(for循环前执行的语句,通常用于初始化;循环头执行的条件判断;循环尾执行的语句,常用于步进)

-1 ,1 ,-1,1,-1 交替法
sign = 1
for(i=0;i<n;i++)
	sign*=-1;

Math.random() 生成[0,1)之间的数,使用 Math类中的random()方法
使用类中的方法 , 类或模块必须大写开头

计算机是世界上最笨的东西

它只能人告诉它一步步怎么做,才会做事情.即所有的算法都必须由人告诉它怎么做,它才会做.

计算机默认采用枚举算法 , 最简答粗暴的方法
所以计算机在计算2x+6 = 20 的时候,不能像人一样解方程
它只能从 x=0开始穷举

long 最多存放十位十进制数
创建 long 数组+
	int[] a = new int[10] ; int[] b = a 或 int[] b = new int[a.length]
	数组影响 , a,b 都只是数组的标识符而已, 实际共用一个 new 创建的数组空间
	a 和 b 只是 数组的管理者.可以通过 if(a == b )判断是否管理同一个数组
	
	有时需要判断啊a,b 内容相同时就是相等的数组, 需要 boolean isEqu = true; if(a[i]!=b[i]) isEqu = false; print(isEqu)
	数组元素同类型,长度不可变!
	人为初始化 int[] scores = {87,45,98,43,53};
	可变数组 x = in.nextInt();]int[] nums = new int[x]; new 一个数组默认为0
	long[] arr = new long[100];long[] arr 创建 long 型数组 arr  ;new long[100] 创建能放100个 long 型数值的数组;

	数组自带一个计算自身长度的方法 int[] grade = new int[100] ; for(i=0;i<grade.length;++i)
调试技巧:
	设置断点
	程序调试运行后,会从第一行一直运行到断点的上一行,
	从断点开始, step 一次运行一行.
程序常见三种输入数据的方式:
	1, ‘引号内设定好数字’
	2, int amount = 100 初始化个固定变量, 且方便后期修改
	3, int amount;  调用 System.in 类 中的 in.nextLine()或in.nextInt()方法
	    amount = in.nextInt() ;

二维数组求长度:
	
问:请构造一个函数, row = 0时 i = row-row);i<row+factorical;i++
				    row < board.length/2 时 i = row - /2

算法一: 二分法
	2x+6 = 20
	6<10
	所以把6当个位,瞬间得出10<2x<20
	x 直接从6开始穷举

算法二:欧几里得辗转相除法
Eclipse 创建 project 就是创建了一个 package,比如 hello

算法三:上下界二分法
		求素数中,先去掉偶数, 再假设这个数不是素数,判断它的因数中较小的那个所在范围.
		因为如果真的不是素数的话,只要找到任意一个因素就行了.为节省运算量,我们找较小数.
		较小的因数的范围: 22 = 2*11 = sqrt(22) * sqrt(22) 即较小的因数,下界为2,上界为sqrt(22)

算法四: 迭代法
	从2出发,自动迭代找出所有的素数
	因为任何一个合数都可以拆分成素数相乘的形式,所以如果一个数不能被它之前的所有素数整数,那么它就是一个素数
	prime[0]=2 
	int cnt=1
LOOP:
	for(int x=3;cnt<50;x++)
{
	for(int i=0;i<cnt ;i++)
		if(x%prime[i]==0) continue LOOP;
	prime[cnt++]=x; // 自动找出前50个素数
}	

算法5:倍数标记法排除 批量排除非素数
	构造 n 以内的素数表
	n = in.nextInt[];
	 boolean[] prime = new boolean[n];
	for(int i =0;i<n;i++) prime[i]= true;
	int x=2

	在 hello/src 下 new 一个 class(创建类,类中带大量的方法) class 一般大写开头
	如 Hello void mian选项记得打钩

	alt + / 自动补全

	fn+F11+shift+command 运行

	shitf 加上下快速选中多行

	cmd+/ 快速注释 再按就是取消注释

	cmd +左右 快速跳到语首尾
	alt+ 左右 快速跳单词

	英尺英寸 * 0.3048  =  公米

编程技巧:程序单一出口,不要到处写输出语句



常见错误:InputMisMatch 输入不匹配变量的类型
		type mismatch 类型不匹配

优先级:
	单目运算符先算, 取正,取负 一般用在表达式的后方 , 此时 结合性自右向左
	赋值,取正,取负 都是从右向左计算.
	
	括号>算术>关系>逻辑

语法:
	final int amount = 100; //把100这个数字固定成名为 amount 的常量, 这样在程序代码中 
	println与print 的区别:println 自带换行方法,print 没有,其余没有任何区别
	构造输入方法
		Scanner in = new Scanner(System.in)
		类型    类名    关键字(刷新缓冲区) Scanner()类中带参数,表示执行动作,Scanner(System.in)从系统键盘内读取值
		读一个整数进来交给double 也是可以的
		double inch;
		inch = in.nextInt();
		强类型转换: 等价于单目运算符,只负责对值的计算
				: 整型可以自动转浮点,浮点却不能自动转整型,所以此时必须用强类型转换
				(int)1.701 = 1 元括号 int 只负责离它右边最近的表达式
				(int)(1.701+1.231) = 2
			虽然,整型可以智能转为浮点型,但是整型变量绝对不能存放浮点数,哪怕是强类型也不行.
			int foot; (double)foot = 3/2.0;是错的

	有了浮点数之后为什么还要整数:
		因为浮点数在计算机内部是有误差的,且浮点数计算量大,占用空间也大
		所以用整数的话,一个计算准确,一个计算方便,一个计算速度快
		double a=1.0; double b= 0.5+0.5; 	
		Math.abs(a-b)<1e-6; 所以浮点数相等不能直接用if(a == b),只有整型可以这样
				判断浮点数相等得用 if(Math.abs(a-b)<1e-6) 
	关系运算里 true 和 false 不能与数字作运算 true 和 false 间也不能比较
		
	Break 一步跳出多层循环,在想要跳出的最外层循环前设立一个标号,如OUT:  注意标号所在行不能去有其它任何语句.
			程序内 break 写成 break OUT 就能一口气跳出多层循环了

	boolean 是类型 boolean 所定义的变量只能保存 true 或 false  ! 优于 && 优于  ||
	4 <x <6 是不对的, 4<x 这个表达式是一个boolean, 不能与数值作比较
	
	输入一个 n ,如果 n 不是正整数,则报错if(!(n>0))

	输出 print()不换行 println()自动换行 printf(“%-8.2f\n”+sum)带输出格式,靠左,八个字节宽,两位有效数,并换行

FOR-EACH循环
	

	
