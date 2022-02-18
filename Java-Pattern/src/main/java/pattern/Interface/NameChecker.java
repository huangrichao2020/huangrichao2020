package pattern.Interface;

import pattern.Person;

@FunctionalInterface
/** 模仿Java8自带的Cumsumer<T> */
public interface NameChecker {
    /** 定义一个模板，告诉JVM此处处理Person对象，且返回boolean值 */
    boolean check(Person p);
}
