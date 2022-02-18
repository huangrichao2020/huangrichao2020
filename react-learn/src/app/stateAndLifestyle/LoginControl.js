/*
 * @Author: HuangRichao 
 * @Date: 2019-10-03 11:07:55 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-03 14:50:09
 */


import  React,{Component} from '../../../node_modules/react';
import { Greeting } from './Greeting';



class LoginControl extends React.Component {

    // 类组件里有构造函数，生命周期，监听方法，render
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick=()=> {
    this.setState({isLoggedIn: true});
    
  }

  handleLogoutClick=()=> {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    // if语句是万能的
    // 三目运算适合要么A,要么B,且只能在JSX语句里使用,或者TS语句任意处
    // 短路与运算适合要么做，要么不做
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }


    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />,
        {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}

      </div>
    );
  }
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export {LoginControl}
