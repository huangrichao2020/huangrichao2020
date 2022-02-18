/*
 * @Author: HuangRichao 
 * @Date: 2019-10-01 20:54:03 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-02 22:14:39
 */
import  React,{Component} from '../../../node_modules/react';

class Welcome extends React.Component {
    render(){
        return <h1>Hello,{this.props.name}</h1>
    }
}

// import后直接 Welcome(props) 即可