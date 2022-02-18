'use strict'

let fruit = '🍋'
let desert = '🎂'

export default function dinneer(fruit,dessert){
    console.log(`今天的晚餐是：${fruit} 与 ${dessert}`)
}

// 或者 
export {dinner as default};
export {fruit,dessert,dinner};