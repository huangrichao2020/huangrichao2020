
package pattern.callback;

import org.apache.commons.lang.ObjectUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import sun.invoke.empty.Empty;

public class RoomMate {

    private static org.apache.log4j.Logger log = Logger.getLogger(RoomMate.class);
    /**
     * @Description: 室友，目前只提供帮想答案的功能
     * @User: 汀池
     * @Date: 2020-08-27 15:27
     */

    public String getAnswer(String question) {
        if("1+1=?".equals(question)) {
            return "2";
        } else {
            return null;
        }
    }

    /**
     * @Description:
     * @User: 汀池
     * @Date: 2020-08-27 19:05
     */
    public void helpAnswer(String question,Student student) {

        log.info("Student需要室友替想答案");

        if (StringUtils.isNotEmpty(question) && student != null) {
            if ("1+1=?".equals(question)) {
                student.copyHomeWork(question, "2");
            } else {
                student.copyHomeWork(question, "不知道~");
            }
        }
    }
    /**
     * @Description: 需要让室友帮直接以我的名义写作业
     * @User: 汀池
     * @param someone 的类型从Student向上转型为DoHomeWork，保证室友只能获取到有限的引用
     * @Date: 2020-08-27 16:23
     */
    public void helpAnswer(String question,DoHomeWorkCallBack someone){

        log.info("匿名人士需要室友替写作业");

        if(someone != null && StringUtils.isNotEmpty(question)) {
            if ("1+1=?".equals(question)) {
                someone.doHomeWorkCallback(question, "2");
            } else {
                someone.doHomeWorkCallback(question, "不知道~");
            }
        }
    }

}
