import  React  from '../../../node_modules/react';
import { Logger } from '../../utils/Logger';

const numbers = [1, 2, 3, 4, 5];

// ListItems与Numbers 的key相同，当它两在用一个div里被引用时，会有不能唯一标识的隐患
// 可以改造下，将ListItems改造成以Index为key
function ListItem(props){
    return(
        <li key={props.value.toString}>{props.value}</li>
    )
}

// 利用map返回一个jsx集合
// ul 是列表
// li 是列表元素
const ListItems = numbers.map((number,index) =>
    <li key={index}>{number}</li>
    )


// 将Numbers改造成id为key
function Numbers(props){
    const numbers = props.value
    Logger(numbers)
    const listItems = numbers.map((number,index)=>
        <li key={index}>{number}</li>
        )
    // 可以 return (<ul>{listItems}</ul> )
    // 推荐map渲染，map返回的是集合，涉及到集合需要设定key
    return(
        <ul> 
            {numbers.map((number)=>
                <ListItem key={number << 12} value={number << 2}/>
            )}
        </ul> 
        )
    }

export {
    ListItems,
    Numbers
}