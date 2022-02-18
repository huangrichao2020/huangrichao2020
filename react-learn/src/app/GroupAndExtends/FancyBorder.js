/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 21:33:34 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 21:50:40
 */

 import React from 'react'
import { SplitPane } from './SplitPane';
import { HelloClock, Clock } from '../ComponentAndProps/Clock';

// {props.children} 是这个组件的所有子UI集合的意思,外层最后使用<div>包一下
// 任意组件可以作为子组件传递给props.children
function FancyBorder(props) {
    return (
        <div>
            <div className={'FancyBorder FancyBorder--'+props.color}>
                {/* 等待父组件向FancyBorder组件的内容区写东西 */}
                {props.children} 
            </div>
            {/* 正常使用组件，{}与""括起来的都是对象，只有对象才能传给props */}
            <SplitPane 
                left ={<HelloClock date={new Date()}/>} 
                right= {<Clock/>} />
        </div>
    );
  }

  export {FancyBorder}