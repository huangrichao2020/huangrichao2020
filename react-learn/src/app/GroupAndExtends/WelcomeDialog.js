/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 20:31:56 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 21:59:30
 */


import  React  from 'react';
import { HelloClock, Clock } from '../ComponentAndProps/Clock';
import { Dialog } from './Dialog';


//props支持一切对象，如函数、对象、类、基本数据类型以及React 元素

// 从特殊到一般，从WelcomeDialog里反向推出具有普遍意义的Dialog组件
function WelcomeDialog() {
    return (
      <Dialog
          title="Welcome" 
          message="Thank you for visiting our spacecraft!"/>
    )
  }

  export {WelcomeDialog}