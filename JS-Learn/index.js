/*
 * @Author: HuangRichao 
 * @Date: 2019-09-26 12:02:10 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-09-26 17:45:51
 */


// JS不是同步的，所有的function使用的都是最终形式
var getStackTrace = function () {
    let stack = new Error().stack || '';
    stack = stack.split('\n').map(function (line) {
    return line.trim();
    });
    return stack.splice(stack[0] == 'Error' ? 2 : 1);
  };

  var log = console.log;
  console.log = function () {
    var stack = getStackTrace() || ""
    var line = stack[1] || ""
    for (var i in arguments) {
    }
    if (typeof arguments[i] == 'object') {
      arguments[i] = JSON.stringify(arguments[i])
    }
    arguments[i] += '  ' + line.replace("(", "").replace(")", "")
    log.apply(console, arguments)
  };
  
// const只是不允许赋值操作而已，通过api照样能改
const fruit = '🍌' 
if (true){
    // 绑定块作用域let
    let fruit = ''
}
console.log(fruit)

function breakfast1(){
    return {banner:'🍌',apple:'',peach:'🍑'}
}
// breakfast不是可迭代对象，breakfast()才是
// 解构对象 key相对
let {banner: b,apple:a,peach:p} = breakfast1()


// 带标签的模板字符串
let breakFast = kitchen`今天的早餐是${b}与${a}!`
console.log(b,a,p,'\n',breakFast)

// 上方的`xxx`字符串赋值给breakFast前会先执行kitchen方法
function kitchen(strings,...values){
    console.log(strings,'\n',values)
    let result =''
    for (var i=0;i<values.length;i++){
        result += strings[i]
        result += values[i]
    }
    result += strings[strings.length-1]
    console.log(result)
} 
breakFast1 = '123!'
console.log(breakFast1.includes('!'))


function breakfast (dessert = '🍰',drink = '🍺'){
    return `${dessert} ${drink}`
}

console.log(
    breakfast('🍩','🍺')
)

// ...展开操作符
let fruits = ['🍌','','🍑'],foods = ['🍰',...fruits]
console.log(...foods)

// 剩余操作符
function breakfast (dessert = '🍰',drink = '🍺',{location,restaurant}={},...foods){
    // foods收集多个参数成一个数组
    // 使用时最后解包还原回多个参数
    console.log(dessert,drink,{location:'济南',restaurant:'董小姐'},...foods)
}

breakfast('🎂','🤕','','😖','😸')

// 函数的名字
let bk = function break1(argument){
    
}
console.log(bk.name)

// 箭头函数 lambda
let bt = (apple,banner) => {
    return `${apple} ${banner} ${bt.name}`
}
console.log(bt('a','b'))
// 对象函数简写
let bf = {
    banner:'🍌',
    apple: '',
    // bw:function(){}
    bt(apple){console.log()}
}

// 对象的属性访问方法

let food = {}
let drink = 'hot drink'

food.dessert = '🎂'
food[drink] = '🍺'


/** 值相等，类型相等，同一对象

+0 == -0 true
+0 === -0 true
NaN = NaN false 见ECMA标准
 */
console.log(Object.is(NaN,NaN) === true)



 // 赋值对象给另一个对象

 let bb = {}
 Object.assign(
     bb,
     {drink:'🍺'}
 )


 // 设置对象属性

let bo = {
    getDrink(){
        return '🍵'
    }
}

let dinner = {
    getDrink(){
        return '🍺'
    }
}

let sunday = Object.create(Object.getPrototypeOf(bo)) // 相当于在形参的外部再包装了一层{}，使之对象化。Prototype：对象体
                                                        // Object.getPrototypeOf(bo) 获取去掉bo对象最外层的{}后剩余的东西
                                                        // 即Object.create()方法里不要直接放对象
let monday = {}
Object.assign(monday,bo) // 直接将bo的内容塞给monday

log(11,sunday,22,monday)
console.log((Object.getPrototypeOf(sunday)==bo) === (Object.getPrototypeOf(monday) == bo) )
Object.setPrototypeOf(sunday,dinner) // 将sunday的对象体替换成dinner的对象体

// 对象隐含属性 __proto__:模板对象名
let sunday1 = {
    __proto__:bo
}
log(sunday1.getDrink())
sunday1.__proto__ = dinner;
console.log(sunday1.getDrink())
console.log(Object.getPrototypeOf(sunday1) === dinner)

// super
let sunday2 = {
    __proto__:bo,
    getDrink(){
        return super.getDrink() // super === bo
    }
}

/** Iterators 手工写一个迭代器

Iterators.next = { //"每次执行都会返回这个对象" Iterators自带next()方法
    value:'xx',
    done:true/false // 是否完成
} 
 */
function chef(foods){
    let i =0

    return{
        next(){
            let done  = (i >= foods.length)
            let value = !done ? foods[i++]:undefined // undefined就是null

            return{
                value:value,
                done:done
        }
    }
  }
}

let rc = chef(['','🍑'])
console.log(rc.next())
console.log(rc.next())
console.log(rc.next())


/** 手工生成器 */
function* chef(foods){
    for( var i=0;i<foods.length;i++){
        yield foods[i]    // yield会将修饰的对象v打包成next()的return形式返回{done:bool,value:v}
    }
}

let rc1 = chef(['','🍑'])
console.log(rc1.next())
console.log(rc1.next())
console.log(rc1.next())


// 类的构造方法，get，set
class Chef{
    constructor(food){
        this.food = food // this.xxx自动初始化类的xxx属性
        this.dish = []
    }
    get menu(){
        return this.dish
    }
    set menu(dish){
        this.dish = dish
    }
    static cook(food){
        console.log(food)
    }
}

let rc2 = new Chef('')
let rc3 = Chef.cook('🍅')

console.log(rc2.menu='😪')
console.log(rc2.menu)


// 类继承
class Person{
    constructor(name,birthday){
        this.name = name;
        this.birthday = birthday
    }
    introduc(){
        return `${this.name} ${this.birthday}`
    }
}

class CHef extends Person{
    constructor(name,birthday){
        super(name,birthday)
    }
}


// 集合
let desserts = new Set('kfc')
desserts.add('w')
desserts.add('w')
desserts.delete('w')
desserts.forEach(d=>{
    console.log(d)
})

desserts.clear()
console.log(desserts)



// 集合Map
let fmap = new Map()
let fruit1 = {},cook1 = function(){},dessert = '甜点'

fmap.set(fruit1,'🍋') 
fmap.set(cook1,'🍴')

console.log(fmap,fmap.size,fmap.get(cook1))
fmap.delete(cook1)
console.log(fmap.has(cook1))

fmap.forEach((value,key)=>{
    console.log(`${key} = ${value}`)
})

fmap.clear()