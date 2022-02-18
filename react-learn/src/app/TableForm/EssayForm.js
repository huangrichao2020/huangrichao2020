/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 10:17:10 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 10:21:54
 */
import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
      };
  
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('提交的文章: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            文章:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  
}

export{
  EssayForm
}