import { variable } from './variable';

export function log2(str: string | number | number[]) {
    console.log( str )
}

export function sentence(){
    let name: string = `Gene`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ name }.
    I'll be ${ age + 1 } years old next month.`;
    log2('执行blue部分')
    log2(sentence);
    tuple2();
    enum2();
    any2();
    void2();
    // never2();
    object2();
    typeAssert2();

    log2('执行variable部分')
    variable();
}

// export function array2(){
//     let list:number[] = [1,2,3];
//     let list2:Array<number> = [1,2,3];
//     list=[1];
//     list2=[2];
// }

export function tuple2(){
    let tuple: [string, number];
    tuple = ['hello',10];
    log2(tuple[0].substr(1));
    tuple[0] = '11'; // 
    log2(tuple[1].toString());
}

export function enum2(){
    // 默认对应的枚举值为0,1,2
    // Color[index]为对应的枚举名
    // Color.Green为对应的枚举值
    enum Color {Red, Green, Blue};
    let c: Color = Color.Green;
    let colorName: string = Color[2];
    log2(`color:${ colorName } ${ c }`);
}

export function any2(){
    let notSure:any = 4;
    let list:any[] = [1,true,"free"];
    notSure = 'maybe';
    notSure = false;
    log2(notSure+list.toString());
}

export function void2(): void {
    var u:undefined = undefined;
    var n:null = null;
    let s:number = 1;
    console.log("This is my warning message"+s+u+n);
}

export function never2() {
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
            fail()
        }
    }   
    infiniteLoop();
}


export function object2(){
     function create(o: object | undefined | null | boolean | number | string): void{
         log2(`create:${ o }`)
     };

    create({ prop: 0 }); // OK
    create(null); // OK

    create(42); // Error
    create("string"); // Error
    create(false); // Error
    create(undefined); // Error
}

export function typeAssert2(){
    let someValue: any = "this is a string";
    // someValue是any类型，所以使用它的prototype属性时得用as做一下类型断言，便于在编译器阶段就阻止程序运行
    let strLength: number = (someValue as string).length;
    log2(`strLength: ${strLength}`);
}

