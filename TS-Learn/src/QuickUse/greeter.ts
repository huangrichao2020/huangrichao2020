// import { log } from "util";
import {log2,sentence}  from './blue'



/*
 * @Author: HuangRichao 
 * @Date: 2019-10-08 17:41:43 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-08 19:18:24
 */


 // 要素：接口 功能方法 数据对象 业务操作
 // 数据对象可临时定义，也可以专门定制一个类后new一个。
 // 对象不必继承接口，格式相同能兼容即可



interface IPerson {
    firstName: string,
    lastName: string
}


class Student {
    private fullName: string;
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        let tag:string = 'Log2';
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        // tslint:disable-next-line:no-console
        // log(this.fullName);
        log2(tag+':'+this.fullName);
        
    }
}

// :是类型注解，轻量级的约束函数或变量
function greeter(person:IPerson){
    let j = [
        {a:"a",updateAt:100},
        {a:"b",updateAt:200}
    ]
    j.sort((a, b) => a.updateAt >= b.updateAt ? -1 : 1)
    // tslint:disable-next-line:no-console
    // console.log(j)
    // sentence();
    syncbronism();
    return `Hello,${person.firstName} ${person.lastName}`
}

function syncbronism(){
    a();
}

function a(){
    setTimeout(function(){
      b();
    }, 1000);
    c();
  };

function b(){
    log2("running function b");
}  

function c(){
    log2("running function c");
}

// let users = {
//     firstName:"Huang",
//     lastName:"Richao",
// }

const user = new Student("Jane", "M.", "User")

document.body.innerHTML = greeter(user)