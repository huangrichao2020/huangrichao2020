/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 21:31:59 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 21:57:50
 */

import React from 'react'
import { Dialog } from './Dialog';



class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: ''};
    }
  
    render() {
      return (
        // 组合组件有五种，都是父组件里引用子组件的形式
        // 第一种是在普通组件的基础上，传入特殊的props封装一下（写死），生成特殊的父组件。
        // 第二种是使用父组件时，传入props，组件内部传给子组件的props
        // 第三种是使用父组件时，传入props，组件内部传给子组件的内容区
        // 第四种是使用父组件时，传入内容区，组件内部通过{props.childern}访问到再传给子组件的内容区
        // 第五种是使用父组件时，传入内容区，组件内部通过{props.childern}访问到再传给子组件的props
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
  
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }
  
    handleChange = (e) => {
      this.setState({login: e.target.value});
    }
  
    handleSignUp = () => {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

  export {SignUpDialog}