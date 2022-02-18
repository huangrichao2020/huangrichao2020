

## 数据结构python描述
### 先修知识
> print('sum of {0} and {1} is {2}'.format(n1, n2, add))

> print 功能括号必填

> 默认情况下为字符串 unicode

> 整数除法可能导致浮动 -5/2=2.5

> 不可直接做非自然比较的类型判断 None < None会报错 
    
    字节
- 一个字节8个位,一个16进数就是半个字节.故0xff就是一个字节.
    int型指针与char型指针有什么区别
- 本质都是内存地址
- int型指针指向的地址空间会大一些,如int a;int *pa = &a; *pa = 0x1231311221 能存入后八位十六进数到a中
- char型指针指向的地址空间小一些,如char c;char *pc = &c;*pc = 0x122321 只能存入0x21到c中
- 声明的时候写成 *p .赋值,做参数的时候写成 p多一点,用到的时候写成*p多一点
    
    
    分配内存
- int *p;p = new int[10]
- itn *p;p = (int *)malloc(10*sizeof(int))
    
    
    先修知识
- print("%s %s"%(name,score))
- 一个xxx.py文件就是一个python module.
- 'y' is not defined 通常是在y的作用域之外的地方访问了y导致报错
- 一个function内部的变量是典型的局部变量,def __init__():首先是一个函数,其次才是构造器
- 一个module里面可以同时写入class,function,main
    
    
    类是一个抽象集合的模板,这个模板本身是个大抽象,大抽象里面还有很多小抽象
    
    类中属性private化,只需self.__name = name 在属性名前加两个__即可
    get_name()
    class Student(object): #继承
        pass #表示不做操作
        def __init__(self,stuName,score):
            name = stuName #初始化name,但这个name只是function内的局部变量,拿不出去,实际是浪费的. 
            self.name = stuName #self.name = name 声明与初始化一步做完
            self.score = score
    def instance(name,score):
        student = Student(name,score)
        return student
    #Studengt()实际是调用了__init__方法用于构造出一个Studengt类实例,并赋给student
    if __name__ == '__main__':
        name = input("请输入学生名:")
        score = eval(input("请输入学生成绩:")
        student = instance(name,score)
        print(student.score)
        
- class内必有__init__(),因为python是动态语言,无须声明变量,所以class
的全局变量是写不出来的,但通过__init__()构造器传入实参是必须做全局变量的,否则传入无意义.但是__init__本身又是一个function,其内的变量首先是局部变量
- 那么如何把构造器的实参全局化呢?用self,作用与this相同
    self的原理
- self,把function这个封闭的栈内的数据上锁,移入堆区,使后续全局可更改,可访问.
- 要想将普通function内的变量保持的全局,可用global关键字先声明,global会从堆区中找到该变量名的引用(实现全局化).注意global只能声明,不可同时初始化.
- 必须global num
- 再num = 5
    
    
    但是碰到function内的局部变量(外层变量)想给嵌套function用,global会失效,因为全局找不到该变量,或者全局必须

### 
- 题意
- 抽象各个可以变量化的事物
- 思路
- 代码
## 二分查找

## 1.数素数
    输入正整数M<=N<=10000,输出第M个素数到第N个素数的所有素数,10个一行,行尾不得有多余空格
### 1.1 分析
- 偶数不是素数
- 要是一个数n不是素数,那在n的(2,√n)里一定有一个n的质数
- 设上一个素数为n,则下一个素数m满足`$m\in(n,2n)$`
- 先知道第N个素数是几
- 再逐一输出
- 已知第2个素数是3,在此基础上推出全部后续素数
## 2.倍数之和
    输出1000以内,满足是3或5的倍数的数的和
- print(sum([i for i in range(1000) if i%3==0 or i%5==0]))
- [i for i in range(0,10,2)] 相当于[0,2,4,6,8]


## 3.求质数
    给你一个合数,求它的最大质数
    What's the lagest prime factor of the number 600851475143?
### 3.1 分析
- 一个质数一定是不可再拆分的素数
- 合数n的Prime factor一定在(2,n/2)区间内,大于n/2不可能,代入就知道
- 故最大的prime factor 一定是质数i从i = n/2开始往左遍历的第一个满足n%i==0的数
### 3.2 优化分析
- 上述方法不管怎样n都不变它,虽然稳定但是一旦n极大,=一次加1式遍历会使整个算法的效率变得极差
- 换个思路:
- [x] 从n1的最小质数i开始
- [x] n2 = n1/i1 ,剩下所有质数一定包含在n2内
- [x] 从i1出发继续自增,直至n2/i2==0,i2就是第二个质数
- [x] 循环 n3 = n2/i
- [x] 直至 n¡内只剩下一个质数,即n¡ == i¡

**注:此时不可能有其他杂数了,n¡只能被拆成两个数的情况下,这两个数一定都是n¡的质数**



```python
import time

def ispr(k):
    if k ==2 or k==3:
        return True
    for i in range(2,k/2):
        if k%i==0: #能整除,则不是素数
            return False
    return True

def maxpr(num):
    i = 2
    while(i!=num):
        if(num%i==0):
            num = num//2
        i += 1
    return num

start=time.time()
num = 600851479
print(maxpr(num))
end=time.time()
print('Running time: %s Seconds'%(end-start))   

```
## 算法!
- 实际参数 argument
- 形式参数 parameter
- 缺省参数 defaultParameters(arg1,arg2=2,arg3=3)
- 全局变量 globalVar
- 局部变量 localVar
- 全局声明 global 
```
函数调用全局变量
	count =0
	def hanoi(n,A,B,C) :
		global count
A,B,C都是形参,无所谓类型
调用函数hanoi时,参数类型可数可字符可其它
	

自顶向下拆分功能:
	大问题-子问题 n- 孙子问题 m- 重孙问题 p
自底向上实现功能:
	小功能 - 功能 - 大功能 

递归算法
	函数调用自身,类似于数列求通式,给出p(0)或p(1)的值,在给出 p(n) 与p(n-1)间的关系
	print(p(5)) 等价于 print(5*4*3*2*1)
	结构:
		if(满足初始条件) 直接解决问题
				返回
		else 分解成小问题
				n*p(n-1)之类的表达式将小问题们组合起来
				返回解
算法一: 二分法
	2x+6 = 20
	6<10
	所以把6当个位,瞬间得出10<2x<20
	x 直接从6开始穷举

二分法二:
	二分法求 sqrt(x)
	给出上下边界,且边界动态会变
	注意浮点数不能直接比大小,必须 abs 它们的差值, 当abs(f1-f2)<1e-4就可以认为它们相等
二分法三:
	二分法求素数 isprime
	判断8是不是素数
	8的因素对全部都分布在 sqrt(8)的左右两边
	即sqrt(8)左边必有一个8的因素,右边也必有一个8的因素
	所以只要在(2,sqrt(8))的范围里排查就行了

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

算法6:快速逆序
创建新的变量不断地加上 num 的末尾数,不断地翻10倍再加
	num=12345
	num_p = 0
while num!=0:
	num_p = num_p*10+num%10
	num /=10
print(num)

算法7: 递归比较字符串两端是否相等
def is_(name):
    print(name)
    if len(name) <= 1:
        return again
    else:
        return is_(name[1:-1])
is_('hello!kitty')
```
## 4.求两个三位数相乘的最大回文数
    先求一个数是否回文数,在二重遍历
### 4.1分步
```python
digit = 3
# 翻转int
def int_reverse(x):
    cache_str = str(x)
    chche_list = list(cache_str).reverse()
    reversed_cache_str = "".join(cache_list)
    return int(reversed_cache_str)
    

# 遍历计算
    x = y = range(10**(digit),10**(digit-1),-1)
    for multi in x:
        for faci in y:
            product = multi * faci
            if product == int_reverse(product):
                print("the max reverse is:" + product)
# 也可以 直接化成序列后用序列做对比 顺便储存所有的5位-7位回文数
    list_reversed = []
    x = y = range(10**(digit),10**(digit-1),-1)
    for multi in x:
        for faci in y:
            product = multi * faci
            product_list = list(product)
            set_list = product_list[:]
            if set_list.reverse() == product_list:
                list_reversed.append(product)
    print(max(list_reversed)
```
### 4.2小结
    str1 复制并反序成 str2
    str2 = str1[::-1]
    可正常做关系判断 if str1 == str2 
    
    list1 复制并反序成 list2
    list2 = list1.reverse()

            
    
## 5.二叉排序树
    难点:删除节点时,碰到左右子树都存在的情况,必须进行中序遍历,好确认是把是把被删节点的前继节点或某个子节点补到原来的节点位置.
### 5.1介绍
    二叉树,左子树节点均小于它的根结构
    右子树节点均大于它的根结构
    相对于根节点,左小右大.
    左右子树叶分别是二叉树
    目的:提前粗略排序,提高查找和增删的效率

应用:
- 查找:直接从根节点开始对比节点值,相等表示找到,小了往左边子树找,大了往右边子树找
    实现O(logn)的效率
- 插入:从根节点开始对比节点值,小的往左,大的往右.直至碰到叶(子树为空的情况),
    将新的节点链接
- 删除:若删的是叶,则直接删除.若是节点,只有左子树或右子树的话,先删节点,再将子树链接到父节点
    .
- 若果同时有左右子树,此时删除节点后,剩下,左子节点,右子节点,
    左父节点或右父节点.如果右子节点>父节点>左子节点,那再好不过,正常链接即可.
- 如果左父节点>右子节点>左子节点,则很麻烦,需要中序遍历,取被删节点的后继节点(右字节点)代替被删节点的位置

# 1 线性表
> 链式存储 前驱 后继 表长
LinkList L;
L = create_LinkList(10);
**此时L看起来是一个线性表,其实它只是一个引用,指向线性表表头.通过这个引用我们可以遍历整张线性表**
## 1.1数据结构如何应用到运算
> 逻辑结构定义算法,存储结构运行算法

**线性表常用逻辑算法:**
1. **初始化**:Init_List(L) 构造一个空表
2. **求表长**:Length_List(L) 返回表含有的元素的个数
3. **取表元**:Get_List(L,i)  L非空,i正确时,返回地i个表元的值或地址
4. **查找(定位)**:已知值,查下标. Locate_List(L,x)  返回x在L中首次出现的序号或地址,否则返回-1
5. **插入**:Insert_List(L,i,x) L存在,i正确.是L[i]=x; L.len()++; L[i]之后的表元下标依次加一
6. **删除**: Delete_List(L,i) L存在,i正确时 L[i] = L[i+1] ;L.len()-- ;L[i]之后的表元下标依次减一

## 1.2 顺序表
> 列表在内存中按连续物理地址存储,知道了地址就一定能访问到对应的元素


**优点与好处**
1. 已知表头地址Loc(`$a_0$`),表元类型(所占字节) d比特,则瞬间可求第(i+1)个元素的地址.Loc(`$a_i$`)=Loc(`$a_0$`)+i*d  , 0≤i≤n
2. 所以顺序存储用来查找,访问,修改元素非常方便

## 1.3 顺序表的实现
> 距离是元素间相距长度,个数是下标相减再加1.

>Capacity(L) = L.MAXSIZE ;下标n必须时刻≤MAXSIZE ;设插入下标为i,最末下标为n; i必须时刻≤n+1;
#### 1.3.1 动态初始化
1. 构造一个空表.
2. 动态分配存储空间,先确定表容量,但具体地址对应的表元在后续代码里确定
3. 定义表指针last=-1,随L.len()增加而增加
### 1.3.2 插入运算
1. 用for循环实现:j=n+1 从`$L(n)$`起,元素依次向后挪动一位.`$L(j)$` = `$L(j-1)$`;  j--;
2. 插入x: L(i) = x;
3. 修改表尾指针:L.last = L.len()++;
4. 算法复杂度计算: 主要耗时都发生在元素移动时.每次移动(n-i+1)个元素,即移动(n-i+1)次,假设插入到底i个元素是等概率事件,则对应的概率`$P_i$`=1/(n+1).
5. 总移动次数 = `$\sum_{i=1}^{n+1}=P_i(n-i+1)=\frac{n}{2}$`,即时间复杂度是O(n)

### 1.3.3 删除操作
1. 0≤i≤n,否则报错,已经包含了i=-1,L为null时的情景.
2. for循环实现:j=;j≤n;从L[i]起,L[j] = L[j+1];j++;
3. 算法复杂度:O(n)

### 1.3.4 查找操作
> 找列表中值为x的第一个元素下标
1. for循环,j=0; L[j]==x ; 否则j++;
2. j==n,返回"无"
3. 算法复杂度:`$\sum_{i=0}^nP_ii=\frac{n+1}{2}=O(n)$`

## 1.4 线性表的链式存储与运算实现
### 先修知识
### malloc与new的区别
new会自动根据类型分配内存地址,并返回同类型的指针给引用
```
int *p1,*p2;
p1 = new int;
p2 = new int[100];
```
malloc只能动态分配内存,意思就是不会自动分配,必须人为设定内存大小与返回的指针类型
```
int *p;
p = (int*)malloc(sizeof(int)*100);

```
### ->的用法
->是间接引用符,是二目访问符,类似于成员符 .
```c
typedef struct Node{
    int a;
    double b;
}node, *linkList;
*linkList = &node;
//struct Node *p = &node;
//此时
linkList->a等价于(*linkList).a;
```
### struct的用法
自定义类型struct
```
typedef struct Node{
    Elemtype a;
    Node *next;
}node,linkList; //结构变量可以当类用,都是node的子类.
或
struct Node node,linkList;
```
写一个struct Node,编译器只是读取它,并不会为它赋予内存空间.逻辑合理,它只是一个模板.
### 栈
> 后进先出,前插法 

> 抽象:表L; 新节点s(malloc,s->a=x); s->next=L(指向表头);L=s(表头指向s,s再指向next里保存的旧表头地址)
```c
    linkList create_stack(int flag){
        linkList L = null; /linkList是指针子类,故L也是指针,又L=null静态声明,省去了malloc分配.
        node *s;
        int x;
        scanf("%d",&x);
        int cout=1;
        while(cout<=flag){
            s=(Node*)malloc(sizeof(node));//每次循环都会手动new一个s.因为新的s节点的next后继是上一节点,所以新的s节点是上一节点的前驱.即新的s节点是前插的.满足栈后进先出的形式.
            s->data=x;
            s->next=L;//s上链指向L的表头,此时s还不算在L内
            L = s;//让s做L的表头,即巧妙地让L永远指向新的表头元素.
            scanf("%d",&x);
            cout++;
        }
        return L;
    }
```
### 队列
> 后进后出,尾插法

> 表L永远指向表头,我们可以用副表*r先指向第一个节点(s作表头时),它与L都是指向第一个节点的引用.
```c
linkList create_quene(int flag){
    linkList L=null;
    node *s,*r=null;
    int x;
    scanf("%d",&x);
    int cout=1;
    while(cout<=flag){
        s = malloc(sizeof(node)); //new一个s,new完对s的属性赋值
        s->a = x;
        if(L=null) L=s;
        else 
    }
}
```
### 1.4.1 节点
单链表由一个个节点构成
```c
typedef struct node{
    int data;
    struct node *next;
}LNode

node LNode = {};
```

## 先修知识
    类Unix环境下将py程序改造为系统命令
1. cd进程序当前文件夹
2. py文件第一行加 #!/usr/bin/env python
3. sudo chmod a+x name.py
4. 测试能否通过 ./name.py 直接运行当前py文件
5. sudo ln name.py  /usr/local/bin/name 创建指令式软链接
6. 测试能否在任意文件夹下输入name运行name.py


> 感谢github知识项目:;链接[interview_python](https://github.com/taizilongxu/interview_python)

> 感谢github面试题讲解项目:链接[interview_answer](https://github.com/imhuay/Algorithm_Interview_Notes-Chinese)
## 先修知识
### 使用第三方库做某事
    pyhon3 -m pip install scipy
    python -m spacy download en

### 路径

    mac 路径 '/users/huangmengyao/Desktop/'
### 文件IO操作
```python

try:
    f = open('/path/to/file', 'r')
    print(f.read())
finally: #就算读取出错,f也会关闭
    if f:
        f.close()

简写成
with open('/path/to/file', 'r', encoding = 'utf-8',encoding = 'ignore') as f:
读取二进制文件不可用'r',得用'rb'
```
>  万能read写法
```
for line in f.readlines():
    print(line.strip()) # 把末尾的'\n'删掉
```

### 寻求帮助
1. dir(obj) #列出obj对象包含的方法名称,返回一个字符串列表
2. help(obj.func) #查询obj.func具体介绍与用法

### 测试类型
1. if isinstance(L,list): print("L is list")

### 数据类型
1. 八进,十六进,二进 0o177 0x9ff 0b101010
2. 3+4j,推荐用complex(real,image)创建
3. hex(I),oct(I),bin(I)将十进制生成十六进,八进,二进组成的字符串

## 查找
查找（Searching）就是根据给定的某个值，在查找表中确定一个其关键字等于给定值的数据元素（或记录.

### 查找表按照操作方式可分为：

静态查找表（Static Search Table）：只做查找操作的查找表。它的主要操作是：
- 查询某个“特定的”数据元素是否在表中
- 检索某个“特定的”数据元素和各种属性

动态查找表（Dynamic Search Table）：在查找中同时进行插入或删除等操作：
- 查找时插入数据
- 查找时删除数据

```python
# 无序查找,返回下标

def search_index(lis,value):
    for i in range(len(lis)):
        if lis[i]==value:
            return i
    return False

if __name__='__main__':
    lis=[ 12, 32, 42, 56, 4, 43]
    result = search_index(lis,value)
    print(result)
```


