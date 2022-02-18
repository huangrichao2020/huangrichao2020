/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 16:48:55 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-07 12:32:16
 */

import React from 'react';
import { TemperatureInput } from './TemperatureInput';
import { BoilingVerdict } from './BoilingVerdict';


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  
class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange = (temperature) => {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange = (temperature) => {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            // 核心操作，onXxxChange()将子组件捕获到的数据提升到父组件的state里
            // 写在此处技能通过onTemperatureChange={xxx}将数据传给子组件的props，又能通过this.handleXxxChange将数据传给0
            onTemperatureChange={this.handleCelsiusChange} />
          <br/>
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
            
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
  
        </div>
      );
    }
  }

  export {Calculator}