/*
 * @Author: HuangRichao 
 * @Date: 2019-10-05 20:43:14 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 16:42:25
 */


import React  from 'react';
// React表单是受控组件,为每个state状态更新都编写数据处理函数
// 教程版
class NameForms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    handleChange = (e) => {
      this.setState({value: e.target.value});
    }
  
    handleSubmit =(e) =>{
      alert('提交的名字: ' + this.state.value);
      // 处理完事件后不再向上冒泡
      e.preventDefault(); 
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            请输入你的名字:
            <input type="text"  value = {this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }

  export {NameForm}

// 个人练习版

  class NameForm extends React.Component{
      constructor(props){
          super(props)
          this.state = {value:''} 
      }

      handleChange = (e) =>{
        // 数据qf源唯一的好处是，处理数据时只需处理进入state的数据，减少劳动量
        this.setState({value:e.target.value.toUpperCase()})
      }

      handleSubmit = (e) =>{
          alert(''+this.state.value)
          e.preventDefault()
      }

      render(){
          return(
                <form>
                    <label>
                        请输入你的名字
                        <br/>
                        <input type="type" 
                        // 强制使state成为唯一数据源
                        value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="提交" onClick={this.handleSubmit}/>
                </form>
          )
      }
  }