/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 15:38:38 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 20:57:35
 */

import { Logger } from '../../utils/Logger';
import React  from '../../../node_modules/react';

function HelloClock(props){
  return (
      <div>
        <h1>Hello, world!</h1>
        // props.xxx 定义组件标签的属性
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    )
}

// 改造成Clock class
// 利用类组件的生命周期，实现一些原本回调才能做的操作
class Clock extends React.Component{

  // props数据的单向向下流动
  // 顶层组件的state可以传递给底层组件
  // 所有组件只关心自己的state，不关心数据从哪接受
constructor(props){
  super(props)
  this.state = {
      date:new Date(),
      counter:props.counter
    }
  

  
}

// react组件第一次更新进DOM后，将回调挂载方法，可自定义this.xxx之类的原型参数
componentDidMount(){
// 向浏览器请求一个setInterval时钟回调方法，这个方法最适合执行一些定时更新state的方法
    this.timerID = setInterval(
      () => this.tick(),1000
    )
    Logger("你好")
}

// 组件从DOM中被移除后，react会调用componentWillUnmont(),进而调用浏览器API，停止计数
componentWillUnmount(){
  clearInterval(this.timerID)
}

// 将改变state的方法与具体逻辑单独抽出来
// 便于后续维护
tick(){
    // 一旦执行了setState()方法，react会再次执行render()方法，并再次更新DOM节点
    // 故setState()是一个直接影响界面效果的方法
  this.setState({
    date:new Date()
  })
  // 严禁这种写法，没有任何意义。只允许在constuctor里给state赋值
  this.state.date = new Date() 

  // 直接setState一个对象的写法只能用于简单的情况
  // this.state与this.props是异步的，不能放在一起计算
  // 必须引入函数式编程,箭头函数
  this.setState((state, props) => ({
      // 浅替换，只替换部分state
      counter:parseInt(state.counter) + parseInt(props.counter)
  }))

}

// render()之后就是更新DOM匹配<Clock>渲染的输出
// 类组件return的JSX只能使用state，而函数组件return的JSX只能使用props
  render(){
    return(
      <div>
      <h1>共和国100周年你几岁!</h1>
       {/* this.props.xxx 定义类组件标签的属性 */}
       {/* 通过转义将this.props改造成this.state */}
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      <h3>It is {this.state.counter}</h3>
    </div>
    )
  }
}


export {Clock,HelloClock}