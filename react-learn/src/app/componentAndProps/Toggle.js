/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 17:31:47 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-03 11:23:16
 */


import  React,{Component} from '../../../node_modules/react';
import { Logger } from '../../utils/Logger';


class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn:true}

        // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        Logger("Toggle加载成功！")
    }
    handleClick= () =>{
        this.setState(state =>({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        )
    }
}



    
export {Toggle}