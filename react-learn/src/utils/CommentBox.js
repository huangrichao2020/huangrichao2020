/*
 * @Author: HuangRichao 
 * @Date: 2019-10-01 20:55:01 
 * @Last Modified by:   HuangRichao 
 * @Last Modified time: 2019-10-01 20:55:01 
 */

'use strict';

import React from 'react';

class CommentBox extends React.Component{
    render(){
        return (
            <div className="ui comments">
                <h1>评论 {this.props.name}</h1>
                <div className="ui divider"></div>
            </div>
        )
    }
}

export{ CommentBox as default}