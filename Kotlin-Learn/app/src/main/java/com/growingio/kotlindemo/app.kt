package com.growingio.kotlindemo

import android.util.Log

/**
 * @Classname app
 * @Description TODO
 * @Date 2019-09-20 14:08
 * @Created by huangrichao
 */
fun main(args:Array<String>){

    val TAG:String = "黄日超的Kotlin: "

    Log.d(TAG,"Hello World!"+sum(0,1)+add(1,2)+and(2,3))
    vars(1,2,3,4,5)
    Log.d(TAG,sumLambda(1,2).toString())
    val x = 1
    Log.d(TAG,x.toString())
}


fun sum(a:Int,b:Int):Int{
    return a+b
}

// 自动推断
fun add(a:Int,b:Int) = a+b
// 声明作用域的话默认Unit，所以返回非空的fun必须声明返回类型
public fun and(a:Int,b: Int):Int = a+b

fun pritnSum(a:Int,b:Int):Unit{
    print(a+b)
}

// 可变长参数
fun vars(vararg v:Int){
    for(vt in v){
        println(vt)
    }
}


val sumLambda: (Int, Int) -> Int = {x,y -> x+y}

