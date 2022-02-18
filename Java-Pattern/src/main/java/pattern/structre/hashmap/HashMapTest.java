package pattern.structre.hashmap;

//java文件全称是包名+类名，故程序入口不该定义package包名，且最好放在工程的最外层。
import java.util.HashMap;


public class HashMapTest {
    public static void main(String[] strings){
        /**
         * @demo
         */
        HashMap<Integer,String> hashMap = new HashMap<>();
        hashMap.put(1,"Jack");
        System.out.println(hashMap.get(1));
    }
}
