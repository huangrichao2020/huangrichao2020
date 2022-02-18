// 'use strict'
// import chef from './modules/self';

// chef(fruit,dessert,'')

// 驼峰命名法全球统一，下划线命名法也可。但不可使用横杆符，会被识别为减号

var i=0,
i,//二次声明i没有意义
j=1,
cases = ["你好","世界"];
nonValue;


function fun1(){
    document.getElementById('demo').innerHTML = Date();
}

function htmlWrite(){
    gio('track', 'touch1');
    document.getElementById("demo1").innerHTML = "Hello JavaScript!";
}

function fun3(){
    document.getElementById('myImage').src='./imgs/wechat.png';
}

function fun4(){
    document.getElementById('myImage').src='./imgs/wechatH.png';
}

function func5(){
    i++;
    if(i%2) {
        document.getElementById('demo2').style.fontSize='26px';
    }else {
        document.getElementById('demo2').style.fontSize='16px';
    }
}

function func6(){
    i++;
    if(i%2){
        document.getElementById('demo3').style.display='none';
    }else{
        document.getElementById('demo3').style.display='block';
    }
}

function htmlOutput(){
    document.write(5 + 6);
}

function htmlInfo(){
    window.alert(5 + 6);
}

function htmlLog(){
    console.log(5 + 6);
}

function addAndInner(x,y,elementId){
    i++;
    if(!(i%3)){
        // JS自动
        document.getElementById(elementId).innerHTML ="z的值是数组+字符串:" + (x+y+'"8"') ;
    }else if(i%3!=1){
        document.getElementById(elementId).innerHTML = "JavaScript 程序".bold()+" 是一系列由计算机执行的"+"语句。".bold() + "<br>这句前面有个br标签";
    }else{
        document.getElementById(elementId).innerHTML ="z的值是字符串+数组:" + ('8'+x+y) + " " + cases;
    }
}

