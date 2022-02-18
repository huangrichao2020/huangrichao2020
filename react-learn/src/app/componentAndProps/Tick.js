/*
 * @Author: HuangRichao 
 * @Date: 2019-10-01 20:53:58 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-03 16:19:15
 */


// 方法里定义react元素与render渲染，这叫什么方法
import  React,{Component} from '../../../node_modules/react';
import { Clock } from './Clock';


// import { Toggle } from './Toggle.js';



function Tick(props) {
  return(
    <div>
      {/* 证明了组件一旦插入到DOM里，就是独立的个体，拥有独立的state */}
      <Clock counter="10" />
      <Clock counter="11" />
      <Clock counter="12" />
      {/* <Toggle isToggleOn="true"/> */}
   </div>
  )
    // ReactDOM.render(element, document.getElementById('root'));
  }
  
  // 小括号是要执行但未执行的表达式，大括号是优先执行
  // 接受props（标签的属性值），返回react元素的function，是标准的react组件
  
  function Welcome(props){
    return (
    <h1>Hello,{props.name}</h1> 
    )
  }
  
  // 无props也没关系
  function App(){
    return (
      <div>
        <Welcome name="huang"/>
        <Welcome name="richao"/>
        <Welcome name="HRC"/>
      </div>
    )
  }

  // 每1000秒执行一次Tick()代码块
  // setInterval(Tick, 1000);


  export { 
    Tick,
    App,
    Welcome
  };