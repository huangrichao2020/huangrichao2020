package pattern;

import com.alibaba.fastjson.JSON;
import org.apache.log4j.Logger;
import pattern.structre.array.array.Array;
import pattern.util.FunctionalUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * Hello world!
 */

public final class App {
    private static Logger log = Logger.getLogger(App.class);

    private App() {
    }

    /**
     * Says hello to the world.
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {

        List<Person> personList = Arrays.asList(
                new Person("Yixing","Zhao",25),
                new Person("Yaoggui","Li",30),
                new Person("Chao","Ma",29));


        /** Method reference :: foreach(System.out::println) */
        personList.stream().filter(p -> p.getLastName().startsWith("Z")).
                forEach(p -> {
                    String s = p.getFirstName();
                    System.out.println(s);
                    log.debug(JSON.toJSONString(p));
                    log.info(s);
                });

        /** Optional正常写法 */
        Person p0 = personList.get(0);
        Optional<Person> personOptional = Optional.ofNullable(p0);
        if(personOptional.isPresent()){
            log.info(personOptional.get());
        }else {
            log.info("Uknow");
        }
        /** Java8写法 */
        log.debug(personOptional.orElse(p0));
        log.debug(personOptional.orElseGet(()->new Person("Huang","Richao",25)));
        log.debug(personOptional.map(p->p.getLastName()).map(name->name.toUpperCase()).orElse("Huang"));
        personOptional.ifPresent(p->log.info(p));


    }
}



//        FunctionalUtils.checkAndExecute(personList,
//                p->p.getLastName().startsWith("Z"),
//                p->{
//                    System.out.println(p.getFirstName());
//                    log.debug(JSON.toJSONString(p));
//                    log.info(p.getFirstName());
//                });

