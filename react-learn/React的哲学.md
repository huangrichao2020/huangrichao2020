## 数据与样式
    底部设计好样式，顶部从html传入数据

- 通过HTML里调用父组件，向其传入attributes值开始。数据是数据，样式是样式。
- 数据是自顶向下流动的
- 样式在自顶向下的过程中不断松耦合，不断灵活聚合
- 组件可以时不时地在生命周期里调用浏览器API
- state对其它组件的不可知性与向下传递性，规范了数据流动的方向

我们可以在有状态的组件中使用无状态的组件，也可以在无状态的组件中使用有状态的组件。

意思是我们即可以执行顶层函数组件调用底层类组件，也可以执行顶层类组件调用底层函数组件。

## React的性能精选

React的开销都在更新DOM树上了。
当使用条件渲染语句时，同个DOM节点的内容会发生变化，这种变化有大有小，无论哪种都会消耗浏览器大量的资源。
    
    第一种情况，前后对比同类型的组件元素

- 变props，不变state
- 同类组件更新时，组件实例（state）保持不变
- 变得仅可能是组件属性值（props)
- 此时render前会调用组件的生命周期componentWillReceiveProps()和componentWillUpdate()
- 执行render

    第二种情况，前后对比不同类型的组件元素、
- DOM节点位置相同
- DOM节点内容改变
- props，state全销毁 ，旧组件执行componentWillUnmount()
- 新组件执行componentWillMount() ，render，componentDidMount()


<hr>
<center>组件的生命周期</center>

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g7nnnpw85kj30up08ymy3.jpg)


<center>三种情况的生命周期</center>

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g7o8mn19vhj30jg0nnaau.jpg)
    优化
- constructor(props) 定义state
  - 默认执行getDefaultProps()
- 再执行getInitialState()
- componentWillMount(props) 此时组件还未加载到DOM里，可以临时执行this.setState()，随后正常执行第一次render
- 组件mount或update都会触发getDerivedStateFromProps(props, state)，已决定是否将props的修改同步更新到state

    组件的props改变或setState时都会触发

- componentWillReceiveProps()回调接收到props改变

    直接setState的话跳过上一步

- shouldComponentUpdate(nextProps, nextState) 不可使用setState
- componentWillUpdate(nextProps) 不可使用setState

    render 
- 返回一个React元素，描述组件的UI。此时组件的state应当定下，不可修改即this.setState

- 插入/更新DOM之前。getSnapshotBeforeUpdate(prevProps, prevState)

- componentDidMount() ,挂载到DOM之后调用。向服务器请求数据，dispatch action等。在此处执行this.setState()会引起组件更新
- compoentDidUpdate()


特殊 componentWillUnmount() 组件执行过componnetDidMount()就可以执行该方法

    大范围递归需要注意
- React的策略是从上更新到下，只更新不同的部分。
- 所以新增的地方最好放到末尾，这样只有末尾的差异
- 新增的地方放开头的话，基本上全局都有差异。JSX每一行都要重新渲染，开销极大。

    大范围递归优化
- 为了解决新插入的组件开销大的问题，特地引入组件通用属性key
- 即给每一个标签/组件在引用时分配一个key属性，key的值最好用this.state.id.
- 最好用哈希值hash(this.props)
- 能保证局部组件key值唯一即可
- 最佳实践：在 map() 方法中的元素需要设置 key 属性，因为这是离得最近的上下文。
- 允许DOM子树在其兄弟节点间上下移动。暂时做不到移到其他树内。


## 如何理解组合组件

    以props.children如何使用为例
    定义父组件是顶层组件，子组件是底层组件。
    这种定义与Java的父子类顺序刚好相反。同样的类文件由上到下树状分布，Java的箭头是由上到下，React的箭头是由下到上。 

ReactJS代码由三部分组成。
- 组件源码
- 组件的业务使用代码(大组件的源码)
- UI渲染效果吗b

### 大组件，组件，小组件之间的关系

  定义：标签<Middle>Content</Middle>里的Content部分为内容区

1 组件如何在业务里使用内容区的小组件？<Middle>组件源码里利用<div>{props.children}</div>，业务里利用<Middle> <LittleOne /><LittleTwo /> </Middle>
2 <Middle>组件源码里利用<div>props.instance</div>,业务里利用<Middle instance=<AnyLittle />> </Middle> 组件如何在业务里使用任意其他组件？
3 什么是组件的业务代码？就是这个组件在更高一级的大组件里的使用方式，就是更大组件的源码。
4 组件组合为什么强大？我们可以在大组件里定义小组件的事件处理函数，精准控制各类组件的自定义事件与基础组件的事件发生后的效果
5 组件组合为什么灵活？通过组件源码的<div>{props.children}</div>或<One>{props.children}</One>,我们可以在大组件里为任意组件的内容区添砖加瓦。巧妙在不改变组件源码的情况下，将各种小组件或组件hook进某组件的功能里。
6 组件需要用到继承吗？有了强大的组件组合写法，开发者完全用不到继承。
7 组件如何将小组件的事件数据更新到自身的state里？小组件里写好 handleChange(e) => this.props.handleXxxChange(e.target.value) 函数不做具体实现，组件里直接用<Little onXxxChange={this.handleMmmChange}> ,再在组件里定义this.handleMmmChange = (xxValue) => this.setState({key:value})成功实现将小组件的数据更新到组件自身的state里。

```JS
// 小组件
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
      <div>
        {props.instance}
      </div>
    </div>
  );
}

// 组件1
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

// 组件2
function Camera() {
  return (
    <FancyBorder
      instance={
        <Contacts />
      }
  );
}

// 大组件1
function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}
```
```JS
// 大组件2
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange = (e) => {
    this.setState({login: e.target.value});
  }

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```