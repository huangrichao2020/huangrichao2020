package pattern.util;

import pattern.Interface.Executor;
import pattern.Interface.NameChecker;
import pattern.Person;

import java.util.List;

public class FunctionalUtils {

    public static void checkAndExecute(List<Person> personList,
                                       NameChecker nameChecker,
                                       Executor executor){
//        for(Person p:personList){ 利用可迭代对象的foreach()方法
        personList.forEach(p->{
            /** check、excutor具体怎么样写业务时现场实现 */
            if(nameChecker.check(p)){
                executor.executor(p);
                }
           });
        }
    }

