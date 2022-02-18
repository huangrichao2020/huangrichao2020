
import { log2 } from './blue';

export function variable(){
    log2('打印scope2方法');
    scope2();
    scope3();
    let2(false);
    const2();
    deconstruct2();
    IIFE2();
}

export function scope2(){
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // setTimeout
        (function(i) {
            setTimeout(function() { console.log(i); }, 100 * i);
        })(i);
    }
}


function scope3(){
    // let会在不同的循环里创建新的作用栈{}，供执行语句使用
    for (let i = 0; i < 10 ; i++) {
        setTimeout(function() {console.log(i); }, 100 * i);
    }
}


function let2(input: boolean) {
    // 每个{}都是一个栈作用域，let会在对应的作用域下挂不同的变量指针
    // 类似的还有catch
    // x++;
    let x = 1;
    // 不可在同一栈内定义形参 let input = 0;
    if (x === 1) {
        let x = 2;
        // 在不同的作用栈{}内可以定义相同的变量
        // 此处的input会自动屏蔽掉外层的input，在之后的作用域内无法访问外层input
        let input = false;
        console.log(x);
        // expected output: 2
    }

        console.log(x);

    let a = 100;
    // let a = 101;
    if (input) {
        // Still okay to reference 'a'
        // let修饰的变量只能作用在当前作用域内，避免了反复声明，全局污染。
        // let与const类似，都不会创建window对象，let定义的是block-scoped variable
        // 同一作用域内定义相同的变量，var会指向同一引用，let会创建新的引用。
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return a;
}

function IIFE2(){
    // 表达式（）内的语句会立即执行，也就是说,需要将一段处理结果赋给
    // 一个变量的话，可以在第一个（）内定义一个匿名函数，再用第二个()表示立即执行
    var result = (function () { 
        var name = "Barry"; 
        return name; 
    })(); 
    // IIFE 执行后返回的结果：
    result; // "Barry"
}


function const2(){
    const numLivesForCat = 9;
    // 默认const对象不可修改，但是其内部状态可修改。
    const kitty = {
        name: "Aurora",
        numLives: numLivesForCat,
    }

    // Error
    // kitty = {
    //     name: "Danielle",
    //     numLives: numLivesForCat
    // };

    // all "okay"
    kitty.name = "Rory";
    kitty.name = "Kitty";
    kitty.name = "Cat";
    kitty.numLives--;
}

function deconstruct2(){
    // 定义数组
    const input = [1, 2];
    // 解构就是批量赋值
    const [first, second] = input;
    log2(first); // outputs 1
    log2(second); // outputs 2

    function f([first, second]: [number,number]) {
        console.log(first);
        console.log(second);
    }

    f([1,2]);

    let [first1, ...rest1] = [1, 2, 3, 4];
    
    let { a, b = 1001 } = {a:1,b:2}
    log2(first1)
    log2(rest1)

    
}