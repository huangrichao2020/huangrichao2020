import React from 'react';
import logo from './logo.svg';
import './App.css';


// React-Dom会创建小内存的对象，并且主动更新浏览器DOM
const user = {
  firstName :'黄',
  lastName :' 日超'
}

function formatName(user){
 return user.firstName + user.lastName
}

function getGreeting(user){
 if(user){
   // {}表示优先运行代码块，结果保留在原地
   return <h2>Hello,{formatName(user)}!</h2>
 }
 return <h1>Hello,Stranger.</h1>
}


// JSX就是一个表达式 可以用在 赋值，if，for，return
// 所有标签必须有一个<div></div>父节点，没有的话默认<root></root>
// <div></div><fragment></fragment>是enclosing的wrap层，其他标签不可与之并列
const element = (
 <div>
   {/* jsx标签的元素采用小驼峰命名法 */}
   <div tabIndex="0">
   <h1>
     Hello, world!{formatName(user)}
     <img src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7czun16rfj30yq0u0wh5.jpg"/>
   </h1>
   {getGreeting(user)}
   </div>
   <div className='txt-tag'>
     <h1>Hello!</h1>
     <h2>Good to see you here.</h2>  
   </div>
   
</div>
)

// Babel 会把 JSX 转译成一个名为 
// React.createElement() 函数调用。
const element1 = React.createElement(
 'h1',
 {className: 'greeting1'},
 'Hello, world!'
);

// 注意：这是简化过的结构,解析不了
const element2 = {
 type: 'h1',
 props: {
   className: 'greeting2',
   children: 'Hello, world!'
 }
};

// 视图层根组件，一个react项目的一般在index.js里引用一个App组件就够了
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
