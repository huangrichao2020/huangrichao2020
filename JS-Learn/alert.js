/*
 * @Author: HuangRichao 
 * @Date: 2019-09-24 16:53:28 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-09 11:36:01
 */
var words = "Hello World!"
var band,_band,band1,band_1,$band,Band

var firstName = "黄",lastName = '日超'
trackCD = ['长城','农民','不可一世']
trackCD.push('遥远','故乡')
var lastVar = trackCD.pop() //删除最后一个元素
var firstVar = trackCD.shift() //删除第一个元素

delete trackCD[1] // 回收数组里的元素值，不删除元素
trackCD.splice(3)// 删除第三个元素

var tracks = trackCD.concat(['年后']), weight = 180,weightIncrease='2.5斤'

console.log(tracks)

band = "beyond"
console.log(band,words)


// 默认转成string
console.log(firstName+lastName,weight+weightIncrease,typeof(weight))

console.log(parseInt(weightIncrease),parseFloat(weightIncrease))

console.log(words.length,words.charAt(0),words.charAt(words.length-1))

console.log(words.indexOf('l'),words.lastIndexOf('l'))

console.log(words.substring(0,3))

console.log(words.replace('Hello','你好'))
// 返回一个数组
var newWords = words.split(' ')
// 数组是一个特殊对象
console.log(newWords,typeof(newWords))


var weather = '下雨',temperature =27
/**
if(weather === '晴天' && (temperature <= 26)){
    alert('心情不错')
}else if(weather === '下雨'){
    alert('忧郁')
} 
else {
    alert('心情糟糕')
}


switch(weather){
    case '下雨':
        alert('忧郁')
        break
    case '晴天':
        alert('心情不错')
        break
    default:
        alert('还行')
}
*/

var i = 0
while(i < 10){
    i++
    if(i%2 === 0){
        continue // 如果是偶数，则跳过
    }
    console.log(i)
}

week = ['星期一 Monday',
    '星期二 Tuesday',
    '星期三 Wednesday',
    '星期四 Thursday',
    '星期五 Friday',
    '星期六 Saturday',
    '星期日 Sunday']
for(var i = 0; i < week.length ; i++){
    console.log(week[i])
}



function alertMessage(msg){
    alert(msg)
}

var msg = 'Hello'
var alertMsg = function(){
    alert(msg)
    var msg_1 = '您好'
}
alertMsg('您好')

var beyond = {
    atrist: ['叶','黄','霍']
}
beyond.formedId = '1983' // 访问并赋值
beyond['foundedIn'] = '香港' // 访问并赋值

beyond.showArtist  = function(){
    for(var i =0 ; i < this.atrist.length;i++){
        document.writeln(this.atrist[i])
    }
}

beyond.showArtist()


var property
for(property in beyond){ // property是string
    if(typeof beyond[property] !== 'function'){ // 对象的元素可以是function或各种数据类型
        console.log(property,beyond[property])
    }
}

// DOM 文档对象模型
