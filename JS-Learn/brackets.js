var listGroup = document.querySelector('.l')
function showMsg(e){
    console.log(e.target.alt)
    event.stopPropagation()
}

// 会监听listGroup及其内部所有元素的事件，false冒泡式向外传播事件
listGroup.addEventListener('click',showMsg,false)

var lost = document.getElementById('lost')
function showAnMsg(e){
    console.log('点击！！')
}

// 捕获式，触发事件由外向内传递
lost.addEventListener('click',showAnMsg,true)
