/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 11:32:29 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 15:35:49
 */

import React from 'react';
 
/* 这是一个完整的组件，里面有多个UI标签 */
class FlavorForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
        value: [],
        isNotShow: false,
        isMulti: false
    };

  }

  handleChange = (event) => {
      const out_of_index = -1
      let item = event.target.value
      let items = this.state.value.slice() //全切片复制
      let index = items.indexOf(item) // 此处必须加; 因为下一句是魔法数字开头,不想加;的话就不要使用魔法数字
      out_of_index === index ? items.push(item) : items.splice(index,1)
      this.setState({value:items})

  }

  handleSubmit = (event) => {
    alert('你喜欢的风味是: ' + this.state.value);
    this.setState({isMulti:!this.state.isMulti})
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          {/* 单选组件 ，onChange会将整个组件的状态包装成e.target */}
          <select value={this.state.value} onChange={this.handleChange} multiple={true}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export {FlavorForm}