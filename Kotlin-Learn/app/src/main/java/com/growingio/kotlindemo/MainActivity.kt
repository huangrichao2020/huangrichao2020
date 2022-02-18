/** 利用package 定义这个文件的类全面与方法全名，不再受文件放哪限制 默认default包 */
package com.growingio.kotlindemo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class MainActivity : AppCompatActivity() {

    /** 必须初始化，类型可以自动推断 */
    private val TAG = "黄日超的Kotlin: "
    private val num = 1
    private var cnt:Int = 1


    /** ？允许为空,符号修饰左侧 */
    private var age:String ?= "23"
    /** ！！为空时主动抛出异常 */
    private val ages = age !!.toInt()
    /** 强制编译器允许空，允许返回null */
    private val ages1 = age?.toInt()
    /** 强制编译器允许空，且为空时转化一下，返回-1 */
    private val ages2 = age?.toInt() ?: -1

    /** 用途，str转int时经常有str内容不是数字的情况，此时就需要? */

    private fun parseInt(s:String):Int?{
        return s.toInt()
    }


    /** 类型检测 */
    fun getStringLength(obj:Any):Int?{
        if(obj is String){
            return obj.length
        }else if(obj !is String){
            return -1
        }
        return null
        /** 或者 */
        if(obj !is String){
            return null
        }
        return obj.length

        /** 或者使用 逻辑过滤器&& ,左侧失败的话右侧不再执行 */
        if(obj is String && obj.length > 0)
            return obj.length
        return null
    }

    private val sumLambda:(Int,Int) -> Int = {x,y -> x+y}

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        strCode(TAG)

        Log.d(TAG,"Hello World!"+sumLambda(0,1)+add(1,2)+and(2,3))
        vars(1,2,3,4,5)
        Log.d(TAG,sum2(1,2).toString())
        val x = 1
        Log.d(TAG,x.toString())
        vars(1,2,3,4,5,6)
    }
    /** private允许自动推断返回类型，返回是Unit类型任何时候都可以不写 */
    private fun sum2(a:Int, b:Int)  = a+b

    private fun vars(vararg v:Int){
        for (vt in v){
            Log.d(TAG,vt.toString())
        }
    }


    private fun strCode(t:String){
        val s1 = "TAG was \"$t\""
        val s2 = "${s1.replace("Kotlin","Java")},but now is \"$t\""
        Log.d("字符串模板",s2)
    }


    /** for区间 */
    private fun blockCode(){
        for(i in 1..4) Log.d("1..4",i.toString())
        for(i in 4..1) Log.d("4..1",i.toString())
        for(i in 4 downTo 1 step 2) Log.d("4 downTo 1",i.toString())
        for(i in 1 until 10 step 3) Log.d("1-9",i.toString())

    }
}
