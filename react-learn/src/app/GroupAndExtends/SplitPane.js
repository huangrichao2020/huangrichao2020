/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 21:34:40 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 21:35:00
 */

import React from 'react'


function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }

  export {SplitPane}