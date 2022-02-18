package pattern.callback;

/* 需求分析：学生写作业，学生以xx形式写xx作业，比如把自己的引用给室友，叫室友控制他的引用对象写作业。  */

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

public class Student implements DoHomeWorkCallBack {

    private static org.apache.log4j.Logger log = Logger.getLogger(Student.class);
    /**
     * @Description:自己想答案，自己写作业
     * @User: 汀池
     * @Date: 2020-08-27 15:10
     */
    public void doHomeWork(String question) {
        log.info("自己想好答案，自己写作业");
        if("1+1=?".equals(question)) {
            log.info("作业："+question+" 答案："+"2");
        } else {
            log.info("作业："+question+" 答案："+"不知道~~");
        }
    }


    /**
     * @Description: 别人想答案，自己写作业（实现业务逻辑比如规定怎么写作业）
     * @User: 汀池
     * @Date: 2020-08-27 15:09
     */
    public void copyHomeWork(String question,String answer) {
        log.info("别人想好答案，自己再写作业");
        if(StringUtils.isNotEmpty(answer)) {
            log.info("作业："+question+" 答案："+"2");
        } else {
            log.info("作业："+question+" 答案："+"不知道~~");
        }
    }

    /**
     * @Description: 实现写作业的回调接口, 发现与自己写作业的方法一模一样
     * @User: 汀池
     * @Date: 2020-08-27 16:38
     */
    @Override
    public void doHomeWorkCallback(String question, String answer){
        log.info("实现一个潮流方法，别人想答案，自己再写作业");

        if(StringUtils.isNotEmpty(answer)) {
            log.info("作业："+question+" 答案："+"2");
        } else {
            log.info("作业："+question+" 答案："+"不知道~~");
        }
    }
}

