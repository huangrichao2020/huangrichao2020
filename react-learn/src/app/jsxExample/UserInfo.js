/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 11:23:23 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-02 11:30:19
 */
import {Avatar} from "../ElementRender/Avatar"

function UserInfo(props){
    return (
        <div className="UserInfo">
            {/* 将登录头像等部分抽象出来，变成Avatar组件 */}
            <Avatar user={props.user}/>
        
        <div className="UserInfo-name">
            {/* 要么标签、表达式、元素，要么属性 */}
            {props.user.name}
        </div>
        
        </div>
    )
}

export default {UserInfo}