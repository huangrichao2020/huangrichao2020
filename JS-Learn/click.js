/*
 * @Author: HuangRichao 
 * @Date: 2019-10-01 20:53:36 
 * @Last Modified by:   HuangRichao 
 * @Last Modified time: 2019-10-01 20:53:36 
 */

window.onload = function(){ // 回调方法，确保页面资源加载完毕，才会执行下方代码
    var btn = document.querySelector('.btn') // class对象选择器
    
    function showMsg(e){ // 事件发生时主动向监听器发送一个事件对象e
        console.log(e)
    }
    // 给按钮btn添加一个事件监听器，监听什么样的事件，监听到后执行什么样的方法，是否捕获事件
    btn.addEventListener('click',showMsg,false)


    /** 
     * btn.onclick = function(){ // function事件处理器
        console.log('被点了！')
    }
    btn.onclick = function(){
        console.log('被点了！')
    }
    
    btn.onmouseover = function(){
        console.log('睡在上面')
    }
    
    btn.onmouseout = function(){
        console.log('离开了！')
    }
    */


}