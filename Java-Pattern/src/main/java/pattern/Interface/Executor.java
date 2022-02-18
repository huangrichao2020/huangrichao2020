package pattern.Interface;

import pattern.Person;

@FunctionalInterface
/** 模仿Java*自带的Predicate<T> */
public interface Executor {
    /** 定义模板，告诉JVM此处处理Person对象，且无返回*/
    void executor(Person p);
}
