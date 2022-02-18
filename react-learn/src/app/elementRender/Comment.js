/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 11:08:04 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-02 22:14:18
 */

import {Avatar} from "./Avatar"
import {UserInfo} from "../JsxExample/UserInfo"

// 函数声明式组件
// props不可改变，state可以改变
function Comment(props){
    return (
        // 利用复用组件拆分不同使用频率，不同使用场景的组件，使之松耦合
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="comment-date">
                    {formatDate(props.date)}
                </div>
        </div>
    )
}

export default {Comment}