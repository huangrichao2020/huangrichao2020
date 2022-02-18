/*
 * @Author: HuangRichao 
 * @Date: 2019-10-03 14:29:27 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-03 14:34:57
 */

import React from '../../../node_modules/react';

export function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {
          /* 大括号是表达式，会优先执行括号内的语句 ，此处利用短路与替代if语句 */
          unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];