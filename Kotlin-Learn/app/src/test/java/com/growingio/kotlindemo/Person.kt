package com.growingio.kotlindemo;

/**
 * @Classname Person
 * @Description TODO
 * @Date 2019-09-30 16:11
 * @Created by huangrichao
 */
class Person (firstName: String) {
    /** var编写时必须初始化 */
    var x:Int? = 10

    /** 延迟初始化，专治非空 */
    lateinit var z:Person

    /** val构造时必须初始化, */
    private val y:String?
        get() = field+"y"


    /** 主构造器与初始化代码 */
    init {
        z = Person("黄")
        y = firstName
    }



}
