package pattern.callback;

/**
 * @Program: pattern
 * @Auther: 汀池
 * @Date: 2020-08-27 17:18
 * @Description: 抽象层
 */
public interface DoHomeWorkCallBack {


    /**
     * @Description: 定义一个回调方法，所有想外包写作业业务给室友的人都可以实现这个回调接口
     * @User: 汀池
     * @Date: 2020-08-27 17:27
     */

    void doHomeWorkCallback(String question, String answer);
}
