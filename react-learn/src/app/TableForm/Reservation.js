/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 15:46:30 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 16:39:25
 */

import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      // 原理是 var p={}, p[name] = value, setState(p)
      [target.name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            // 数据进state绕一圈的原因是，保证展示的value能随用户的输入而改变，而不是写死 
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export {Reservation}