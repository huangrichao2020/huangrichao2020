/*
 * @Author: HuangRichao 
 * @Date: 2019-10-01 20:55:09 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-08 19:18:21
 */

import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import './index.css';
// 组件（自定义标签）必须大写
import {Tick,Welcome,App}  from './app/ComponentAndProps/Tick';
import * as serviceWorker from './serviceWorker';

import { LoginControl } from './app/StateAndLifestyle/LoginControl';
import { Mailbox } from './app/StateAndLifestyle/MailBox';
import { WarningPage } from './app/StateAndLifestyle/WarningPage';
import { ListItems, Numbers } from './app/ListAndKey/ListItems';
import { Nameforms, NameForm } from './app/TableForm/NameForm';
import { EssayForm } from './app/TableForm/EssayForm';
import { FlavorForm } from './app/TableForm/FlavorForm';
import { Reservation } from './app/TableForm/Reservation';
import { Calculator } from './app/StateShared/Calculator';
import { WelcomeDialog } from './app/GroupAndExtends/WelcomeDialog';
import { SignUpDialog } from './app/GroupAndExtends/SignUpDialog';
import { PRODUCTS, FilterableProductTable } from './app/Example/FilterableProductTable';



// UI绑定事件
// 状态发送变化要通知到UI
// UI及时展示数据
// 将这个js组件里的element元素与html文件里的root节点绑定
// ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

const mountNode = document.getElementById('root')
// 元素一经绑定不可更新
// 更新  UI 唯一的方式是创建一个全新的元素（换组件）
// 并将其传入 ReactDOM.render()。
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   // react会讲root节点的DOM子节点高效地更新为<  h1>Hello,huangrichao</h1>
//   // 可以import到元素后，再在这里用{}封装成JSX
// <div>
//   <ul>{ListItems}</ul>
//   <Numbers value={[1,2,3,4,5]}/>
//   <br/>
//   <NameForm/>
//   <br/>
//   <EssayForm/>
//   <br/>
//   <FlavorForm/>
//   <br/>
//   <Reservation/>
//   <br/>
//   <Calculator/>
//   <br/>
//   <WelcomeDialog/>
//   <br/>
//   <SignUpDialog/>
// </div>,
//   mountNode
// );


ReactDOM.render(
  // react会讲root节点的DOM子节点高效地更新为<  h1>Hello,huangrichao</h1>
  // 可以import到元素后，再在这里用{}封装成JSX
<div>
  <ul>{ListItems}</ul>
  <Numbers value={[1,2,3,4,5]}/>
  <br/>
  <NameForm/>
  <br/>
  <EssayForm/>
  <br/>
  <FlavorForm/>
  <br/>
  <Reservation/>
  <br/>
  <Calculator/>
  <br/>
  <WelcomeDialog/>
  <br/>
  <SignUpDialog/>
  <br/>
  <FilterableProductTable products={PRODUCTS}/>
</div>,
  mountNode
);



// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, mountNode);
// }, 5000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();