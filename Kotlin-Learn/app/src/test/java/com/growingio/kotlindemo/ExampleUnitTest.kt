package com.growingio.kotlindemo

import android.util.Log
import org.junit.Test

import org.junit.Assert.*
import java.util.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {

    var arr = Array(1,{i->2*i})
    @Test
    fun addition_isCorrect() {
        println(1)
        Log.i("xxxx",11.toString())
        assertEquals(4, 2 + 2)
    }

    @Test
    fun dataTyoe(){
        /** L 0x ob 不支持8进制 123e5 123.5f */
        /** 数字允许嵌套下划线 */

        val oneMillion = 1_000_000
        println(oneMillion)

        /** == 值箱等  === 地址相等 */

        var boxedA:Int? = oneMillion
        val boxedB:Int? = oneMillion

        println("A与B的值相等${boxedA == boxedB}")
        println("A与B的地址相等${boxedA === boxedB}")

        /** 小值不可转为大值，即不可丢失细节 */

        /** 左移10表示乘以2^10 */
        println(boxedA)
        boxedA = boxedA?.shl(10)
        println(boxedA)
        boxedA = boxedA?.and(0x10101010)
        println(boxedA)
        boxedA = boxedA?.ushr(0x10101010)
        println(boxedA)
        boxedA = boxedA?.or(0x10101010)
        println(boxedA)
        boxedA = boxedA?.xor(0x10101010)
        println(boxedA)
        boxedA = boxedA?.inv()
        println(boxedA)

        /** 特殊打印 */
        println("as"+'\uFF00'+"\\"+"\"")
    }

    @Test
    fun arrayTest(){
        /** 工厂函数生成列表，普通函数生成列表 */
        arr = arrayOf(1,2,3)
        var arr2 = Array(3,{i -> (2*i)})

        val arr3:IntArray = intArrayOf(1,2,3)
        arr3[0] = arr[1] + arr[2]

        val text = """
            你好
            世界
            ${'$'}9.99  // 打印美元符号的写法
        """.trimIndent()

        println(text)
    }

    @Test
    fun logicJudgment(){
        var t = 5
        var b = 20
        var a = 10
        var max = if(a > b) a else b
        println(max)

        max = if(a > b){
                println("select a")
                a
            } else{
                println("select b")
                b
        }

        println("max的值为 $max")

        if(t.toInt() in 1..8)
            println("t：$t 在区间内")

        when(a){
            1,2-> println("a:$a") // 不中不执行
            10-> println("a:$a")
            else ->{
                println("a 不是1，也不是10")
            }
        }

        arr = arrayOf(123,1123,12123)
        when{


            1 in arr -> println("遇到1打印${1+1}")
            2 in arr -> println("遇到2打印${2+1}")

            else ->{
                for(i in arr.indices) print(arr[i])
                for((index,value) in arr.withIndex()) println("$index $value")
            }
        }

    }
    @Test
    fun loopTest(){

        /** 标签与伪goto语句 */
        loopOne@ for(i in 1..100){
            for (j in 1..100)
                if (j>i) break@loopOne
        }

        /** 以前在一个方法里写一个表达式时，想要跳出表达式却不跳出方法，需要这么写 */
        arr.forEach(fun(value: Int) {
            if (value == 0) return
            print(value)
        })

        /** 现在只需要 */
            arr.forEach {
                if (it == 0) return@forEach
                print(it)
        }

    }

}
