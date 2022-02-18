import { Logger } from "./node_modules/utils/Logger"

/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 16:58:35 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-03 16:14:07
 */
import  React,{Component} from '../../../node_modules/react';

function ActionLink(props){
    return(
        <button  onClick={handleClick}>
            Click me
        </button>
    )
}

function handleClick(e){
        e.preventDefault()
        // 函数式组件有两种用法，一种是JSX里的标签式，一种是代码块里的函数式
        Logger("The linkk was clicked")
    }

export {ActionLink as Action}