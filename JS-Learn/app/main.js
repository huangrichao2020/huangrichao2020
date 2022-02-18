//main.js
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

let arr = [1, 2, 3, 4]
let newArr = arr.map(_ => {　　// 使用map方法
    　　　return _ * 2;
　　});
console.log(newArr); // [2, 4, 6, 8]


let newArr1 = arr.filter(_ => {　　// 使用filter方法
if (_ % 2 !== 0) {
    return _;
　　　　 }
　　 });
console.log(newArr1); // [1, 3];

let newArr2 = arr.filter( _ => !! (_ % 2 ));　　// 箭头函数不加{}自动return，加{}必须用return
console.log(newArr2); // [1, 3];

