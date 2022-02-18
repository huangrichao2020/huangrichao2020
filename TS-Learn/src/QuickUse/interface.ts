
// 原始形成类型声明
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


interface LabelledValue {
    label: string;
  }
  
function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
  
let myObj2= {size: 10, label: "Size 10 Object"};
printLabel(myObj2);

// 可选参数声明，带？会自动寻找与匹配
interface SquareConfig {
    color?: string;
    width?: number;
  }
  
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      // Error: Property 'clor' does not exist on type 'SquareConfig'
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
}
  
let mySquare = createSquare({color: "black"});