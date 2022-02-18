package com.growingio.kotlindemo

/**
 * @Classname DontCreateMe
 * @Description TODO
 * @Date 2019-09-30 17:21
 * @Created by huangrichao
 */
/** 构造参数默认val */
class DontCreateMe private constructor(cstmName:String = ""){
    /** 主构造函数默认参数时，自动生成一个无参的次级构造函数 */

    var cstmName1:String = "你好"

    init {
        cstmName1 = cstmName
    }

    /**
     * test.setInterFace(object : TestInterFace {
     * override fun test() {
     * println("对象表达式创建匿名内部类的实例")
     * }
     * })
     * */
}