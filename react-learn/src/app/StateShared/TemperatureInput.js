/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 17:29:13 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-07 12:25:53
 */


import  React  from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleChange = (e) => {
      // 子组件利用父组件传下的props里的onXxxChange()修改自身实例的props
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  export {TemperatureInput}