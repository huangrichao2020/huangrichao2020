## 内置帮助
- help(list)
- dir(list)

## continue
```
#!/usr/local/bin/python3.7
print('hellowor111ld')

## 0-9 插入if-->continue的代码块，将满足if的部分替换成continue前的内容。

for i in range(10):
    if i%2!=0:
        print(i)
        continue
    i+=2
    print(i)
```

## 列表
python没有数据结构,没有数组,必须用列表把不同类型的数据与对象放在一起
- append添加
- extend列表级拓展
- inset(index,element)插入

元素交换
- list[0],list[1] = list[1],list[0]

元素删除
- list.remove(element)
- del list[1]
元素弹出
- list.pop(2)


### 列表分片
- list1 = list[::-1]
列表相加
- list1 = [123]
- list2 = [456]
- list = list1 + list2
列表复制
- list *= 5

元素化列表
l = [l]

访问列表
- l = [123,[1,2],456]
- 123 in l
- 1 in l[1]
- 3 not in l[1]


统计出现次数
- list.count(element)

获取元素的下标
- index =  list.index(element)

获取第二元素下标
- start = list.index(e) + 1
- end = len(list)

原地翻转
- l.reverse()

软拷贝
- l = [1,2,3]
- l1 = l 


硬拷贝
- l = [1,2,3]
- l2 = l[:]


## 元组
    只支持count()与index()方法
- tuple = 1,
- tuple = ()
- tuple = (1)不是元组
- tuple *= 8

### 增删元组
- tuple = [1,2,3,5]
- tuple = tuple[:3] + (4,) + tuple


## 列表解析器
    [(x,y) for x in range(10) for y in range(10) if x%2==0 if y%2!=0]
    
等价于

    list1 = []
    for x in range(10):
    for y in range(10):
        if (x%2 == 0) & (y%2 != 0):
            list1.append((x,y))
            
            
基于原有的两个简单列表，构造复杂列表

    list1 = ['1.为梦想而战','2.为自由而战']
    list2 = ['1.LiNing','2.NaiKe']
    # lambda 定义变量 获取变量 计算比较变量
    list3 = [name+':'+slogan[2:] for name in list2 for slogan in list1 if name[0]==slogan[0]
    
    
### 生成器
    tuple1 = (x**2 for x in range(10)) # type Generate
    for i in tuple1:
        print(i)
    tuple1.__next__()
    # 指针式下移
    tuple1.__next__()
    
### 快速赋值
x,y,z = 1,2,3
print(x,y,z)

### 多字符串处理
str = """11
22"""

str = '11\
22'

三引号通常当多行注释处理

str = '{0},{1}'.format('打印','不打印') 等价于 '打印,不打印'

str1 = '{0},{1}'.format('\'打印\'','\'不打印\'') 等价于"'打印','不打印'"

str2 = '{0}{1:.2f}'.format("PI = ",3.14159)

num = 1010 print('打印结果是:%d' %num,bin(num),str(num))


### print函数
print(,*param,...,end='\n',flush=False)
### 自定义循环结束方法
```
q = True
while q:
    num = input('请输入一个整数(输入Q结束程序)：')
    if num != 'Q' and num !=:'q':
        num = int(num)
        print('十进制 -> 十六进制 : %d -> 0x%x' % (num, num))
        print('十进制 -> 八进制 : %d -> 0o%o' % (num, num))
        print('十进制 -> 二进制 : %d -> ' % num, bin(num))
    else:
        q = False
```

加入输入参数异常处理方法
```
q = True

while q:
    num = input('请输入一个整数(输入Q结束程序)：')
    if num != 'Q' and num !='q':
        try:
            num = int(num)
        except ValueError:
            print("输入数值错误")
        else:
            print('十进制 -> 十六进制 : %d -> 0x%x' % (num, num))
            print('十进制 -> 八进制 : %d -> 0o%o' % (num, num))
            print('十进制 -> 二进制 : %d -> ' % num, bin(num))
    else:
        q = False

```

异常的第二种处理方法 , 

用if描述正确的情况,用else+continue跳过不正常的情况
```
def sum(x):
    result = 0
    
    for each in x:
        if (type(each) == int) or (type(each) == float):
            result += each
        else:
            continue

    return result

print(sum([1, 2.1, 2.3, 'a', '1', True]))
```

## 序列
    我们把可迭代,可遍历内容的对象称为序列,比如列表,元组,字符串
    
    序列都支持按index索引元素,分片获取范围元素,索引总是从0起
    

    
BIF转化方法
- list(obj)
- tuple(obj)
- str(obj)


## 利用if in代替if ==
```
name = input('请输入待查找的用户名：')
score = [['迷途', 85], ['黑夜', 80], ['小布丁', 65], ['福禄娃娃', 95], ['怡静', 90]]
IsFind = False

for each in score:
    if name in each:
        print(name + '的得分是：', each[1])
        IsFind = True
        break
    
if IsFind == False:
    print('查找的数据不存在！')


```

### 迭代与递归

递归:已知最底层一次的结果 + 这一次的结果是上一次的开始

迭代:这一次的结果是下一次的开始

### def定义函数
    格式 def MyFunc():
            print('MyFunc')

欧几里得取最大公约数
```
def gcd(x, y):
    while y:
        t = x % y
        x = y
        y = t

    return x
```

倒序生成二进制转化器
```
def binner(x):
    result = ''
    while(x):
        dec = x%2
        x = x//2
        result += str(dec)
    return result[::-1]
```

函数文档
```
def MyFirstFunction(name):
    '函数文档在函数定义的最开头部分，用不记名字符串表示'
    print('I love FishC.com!')
    
MyFirstFunction.__doc__
help(MyFirstFunction)
```

Python允许使用普通参数，默认参数与关键字参数
其中默认参数可被重赋值。
```
# 无return的函数称为NoneType
 def SaySome(name='小甲鱼', words):
        print(name + '->' + words)

 SaySome(words='让编程改变世界,)
 # 第二种形式
 words= '你好'
 SaySome(words)
```

收集参数,将多个参数收集为序列
```
def mFun(*param, base=3):
    result = 0
    for each in param:
        result += each

    result *= base
    
    print('结果是：', result)

mFunc（1,2,3,4,5,base=5)

```
方法名与方法的区别
```
def outside():
    print('I am outside!')
    def inside():
        print('I am inside!')

# outside()代表方法返回的对象或NoneType
# outside代表方法所在的代码块
```

## 变量的作用域

1. 代码块内的所有变量的作用域只能在这个代码块内。
2. 最外层方法能自行访问到全局变量,一旦对该变量有任何操作都会导致在方法块内创建新的同名变量。此时变量为NoneType
3. 变量以拷贝的形式进入方法内，不影响变量本身
4. 需要引用全局变量时，可在方法块内，刚开的地方用global声明一下变量即可引用全局变量。
5. 如果该方法接受的参数里已经有该变量了，则无法使用global
6. **反向引用 即方法内修改全局变量 ，在方法内声明nonlocal要用的全局变量，这种破坏全局变量的行为叫闭包**
```
graph TB
A(已知全局变量var与方法test)
A-->B(test接收var)
B--是-->C(不可用global引用var)
B--否-->D(使用var)
D--只用不改-->E(global)
D--修改var-->G(nonlocal)
D--使用方法同名var-->F(声明并定义值)
D--直接用-->H(方法自动调用上一层的var)
```
```
 var = 'zqi'
def test():
    def test2():
        global var
        var += 'love阿黄'
        print(var)
    test2()

print(var)
test()
```

### lambda
```
def fun_A(x, y=3):
        return x * y

lambda x, y=3 : x * y

# lambda返回的是一个函数体，最好用一个变量接收下

add = lambda x, y=3 : x * y
add(3,2)
```
## 内置帮助
- help(list)
- dir(list)

## continue
```
#!/usr/local/bin/python3.7
print('hellowor111ld')

## 0-9 插入if-->continue的代码块，将满足if的部分替换成continue前的内容。

for i in range(10):
    if i%2!=0:
        print(i)
        continue
    i+=2
    print(i)
```

## 列表
python没有数据结构,没有数组,必须用列表把不同类型的数据与对象放在一起
- append添加
- extend列表级拓展
- inset(index,element)插入

元素交换
- list[0],list[1] = list[1],list[0]

元素删除
- list.remove(element)
- del list[1]
元素弹出
- list.pop(2)


### 列表分片
- list1 = list[::-1]
列表相加
- list1 = [123]
- list2 = [456]
- list = list1 + list2
列表复制
- list *= 5

元素化列表
l = [l]

访问列表
- l = [123,[1,2],456]
- 123 in l
- 1 in l[1]
- 3 not in l[1]


统计出现次数
- list.count(element)

获取元素的下标
- index =  list.index(element)

获取第二元素下标
- start = list.index(e) + 1
- end = len(list)

原地翻转
- l.reverse()

软拷贝
- l = [1,2,3]
- l1 = l 


硬拷贝
- l = [1,2,3]
- l2 = l[:]


## 元组
    只支持count()与index()方法
- tuple = 1,
- tuple = ()
- tuple = (1)不是元组
- tuple *= 8

### 增删元组
- tuple = [1,2,3,5]
- tuple = tuple[:3] + (4,) + tuple


## 列表解析器
    [(x,y) for x in range(10) for y in range(10) if x%2==0 if y%2!=0]
    
等价于

    list1 = []
    for x in range(10):
    for y in range(10):
        if (x%2 == 0) & (y%2 != 0):
            list1.append((x,y))
            
            
基于原有的两个简单列表，构造复杂列表

    list1 = ['1.为梦想而战','2.为自由而战']
    list2 = ['1.LiNing','2.NaiKe']
    # lambda 定义变量 获取变量 计算比较变量
    list3 = [name+':'+slogan[2:] for name in list2 for slogan in list1 if name[0]==slogan[0]
    
    
### 生成器
    tuple1 = (x**2 for x in range(10)) # type Generate
    for i in tuple1:
        print(i)
    tuple1.__next__()
    # 指针式下移
    tuple1.__next__()
    
### 快速赋值
x,y,z = 1,2,3
print(x,y,z)

### 多字符串处理
str = """11
22"""

str = '11\
22'

三引号通常当多行注释处理

str = '{0},{1}'.format('打印','不打印') 等价于 '打印,不打印'

str1 = '{0},{1}'.format('\'打印\'','\'不打印\'') 等价于"'打印','不打印'"

str2 = '{0}{1:.2f}'.format("PI = ",3.14159)

num = 1010 print('打印结果是:%d' %num,bin(num),str(num))


### print函数
print(,*param,...,end='\n',flush=False)
### 自定义循环结束方法
```
q = True
while q:
    num = input('请输入一个整数(输入Q结束程序)：')
    if num != 'Q' and num !=:'q':
        num = int(num)
        print('十进制 -> 十六进制 : %d -> 0x%x' % (num, num))
        print('十进制 -> 八进制 : %d -> 0o%o' % (num, num))
        print('十进制 -> 二进制 : %d -> ' % num, bin(num))
    else:
        q = False
```

加入输入参数异常处理方法
```
q = True

while q:
    num = input('请输入一个整数(输入Q结束程序)：')
    if num != 'Q' and num !='q':
        try:
            num = int(num)
        except ValueError:
            print("输入数值错误")
        else:
            print('十进制 -> 十六进制 : %d -> 0x%x' % (num, num))
            print('十进制 -> 八进制 : %d -> 0o%o' % (num, num))
            print('十进制 -> 二进制 : %d -> ' % num, bin(num))
    else:
        q = False

```

异常的第二种处理方法 , 

用if描述正确的情况,用else+continue跳过不正常的情况
```
def sum(x):
    result = 0
    
    for each in x:
        if (type(each) == int) or (type(each) == float):
            result += each
        else:
            continue

    return result

print(sum([1, 2.1, 2.3, 'a', '1', True]))
```

## 序列
    我们把可迭代,可遍历内容的对象称为序列,比如列表,元组,字符串
    
    序列都支持按index索引元素,分片获取范围元素,索引总是从0起
    

    
BIF转化方法
- list(obj)
- tuple(obj)
- str(obj)


## 利用if in代替if ==
```
name = input('请输入待查找的用户名：')
score = [['迷途', 85], ['黑夜', 80], ['小布丁', 65], ['福禄娃娃', 95], ['怡静', 90]]
IsFind = False

for each in score:
    if name in each:
        print(name + '的得分是：', each[1])
        IsFind = True
        break
    
if IsFind == False:
    print('查找的数据不存在！')


```

### 迭代与递归

递归:已知最底层一次的结果 + 这一次的结果是上一次的开始

迭代:这一次的结果是下一次的开始

### def定义函数
    格式 def MyFunc():
            print('MyFunc')

欧几里得取最大公约数
```
def gcd(x, y):
    while y:
        t = x % y
        x = y
        y = t

    return x
```

倒序生成二进制转化器
```
def binner(x):
    result = ''
    while(x):
        dec = x%2
        x = x//2
        result += str(dec)
    return result[::-1]
```

函数文档
```
def MyFirstFunction(name):
    '函数文档在函数定义的最开头部分，用不记名字符串表示'
    print('I love FishC.com!')
    
MyFirstFunction.__doc__
help(MyFirstFunction)
```

Python允许使用普通参数，默认参数与关键字参数
其中默认参数可被重赋值。
```
# 无return的函数称为NoneType
 def SaySome(name='小甲鱼', words):
        print(name + '->' + words)

 SaySome(words='让编程改变世界,)
 # 第二种形式
 words= '你好'
 SaySome(words)
```

收集参数,将多个参数收集为序列
```
def mFun(*param, base=3):
    result = 0
    for each in param:
        result += each

    result *= base
    
    print('结果是：', result)

mFunc（1,2,3,4,5,base=5)

```
方法名与方法的区别
```
def outside():
    print('I am outside!')
    def inside():
        print('I am inside!')

# outside()代表方法返回的对象或NoneType
# outside代表方法所在的代码块
```

## 变量的作用域

1. 代码块内的所有变量的作用域只能在这个代码块内。
2. 最外层方法能自行访问到全局变量,一旦对该变量有任何操作都会导致在方法块内创建新的同名变量。此时变量为NoneType
3. 变量以拷贝的形式进入方法内，不影响变量本身
4. 需要引用全局变量时，可在方法块内，刚开的地方用global声明一下变量即可引用全局变量。
5. 如果该方法接受的参数里已经有该变量了，则无法使用global
6. **反向引用 即方法内修改全局变量 ，在方法内声明nonlocal要用的全局变量，这种破坏全局变量的行为叫闭包**
```
graph TB
A(已知全局变量var与方法test)
A-->B(test接收var)
B--是-->C(不可用global引用var)
B--否-->D(使用var)
D--只用不改-->E(global)
D--修改var-->G(nonlocal)
D--使用方法同名var-->F(声明并定义值)
D--直接用-->H(方法自动调用上一层的var)
```
```
 var = 'zqi'
def test():
    def test2():
        global var
        var += 'love阿黄'
        print(var)
    test2()

print(var)
test()
```

### lambda
```
def fun_A(x, y=3):
        return x * y

lambda x, y=3 : x * y

# lambda返回的是一个函数体，最好用一个变量接收下

add = lambda x, y=3 : x * y
add(3,2)
```
