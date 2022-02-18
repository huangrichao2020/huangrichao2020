/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 21:52:20 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-03 14:27:04
 */

import  React,{Component} from '../../../node_modules/react';


// 供index.js使用 可一秒刷新一次
class Greeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : props.isLoggedIn
        }  
    //     setInterval(
    //   () => this.tick(),1000
    // )  
    }

    // 当检测到上级组件再次传来props时，执行方法体内的语句
    componentWillReceiveProps(){
        this.tick()
    }
    render(){ 
        // 条件渲染 
        if(this.state.isLoggedIn) {
            return <UserGreeting />;
            }
        return <GuestGreeting />;
        }
        
    tick(){
        this.setState((state)=>({
            isLoggedIn : !state.isLoggedIn
        }))
        }
    }

    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }

export {Greeting}
