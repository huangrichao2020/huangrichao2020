//cmd+shift+b 运行tasks.json
//f5运行launch.json
// import org.slf4j.LoggerFactory
// import com.typesafe.scalalogging.slf4j.Logger
object HelloWorld {

//     val logger = Logger(LoggerFactory.getLogger("name"))

    def helo(name:String):String = {
        println(s"Hello,${name}")
        s"Hello,${name}"//s特殊符号生效符
    }
    
    def printList():Unit = {
        val l = List("one","two","three")
        for(
            s <- l
        )println(s)

        for(
            s <- l
            if(s.length > 3)
        )println(s)

        val result_for = for(
            s <- l
            s1 = s.toUpperCase()
            if(s1!="")
        ) yield(s1) //保存s1,生成新的collection
    }
    def main(args: Array[String]): Unit = {
        var x = 10;    
        val qoute = if(x!=1) "not 1"
        val qoute2 = if(x!=10) "not 1"//else默认为空 Unit
        println("Hello world " + qoute)
        // printList()
        val rel_try = try{
            Integer.parseInt("dog")
        }catch{
            case _ => 0
        }

        println(helo("HuangRichao")+qoute2)//返回Unit的String形式
    }
}