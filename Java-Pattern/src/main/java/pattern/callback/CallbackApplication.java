package pattern.callback;

import org.apache.log4j.Logger;

public class CallbackApplication {
    private static org.apache.log4j.Logger log = Logger.getLogger(CallbackApplication.class);

    private static final String TAG = "利用接口回调的形式写作业!";

    public static void main(String[] args) {
        Student student = new Student();
        String question = "1+1=?";
        String question1 = "1+2=?";
        String question2 = "1+3=?";
        RoomMate roomMate = new RoomMate();

//        原始业务,学生写作业
        student.doHomeWork(question);

//        室友根据问题写出答案后，学生再通过student的copyHomeWork方法抄作业
//        总结：当方法A与方法B使用到同一个参数，且方法A调用B的执行结果。可以将A改造成回调的形式，将B抽象成业务接口(出执行结果并给A使用)。
        student.copyHomeWork(question1,roomMate.getAnswer(question1));

//        传统回调：学生告诉室友要写什么作业，并把自己的引用注册给室友，直接让室友以学生的名义（操控学生的引用）写作业。
//        但是很不规范很没安全性。如果只是让第三方代执行某个功能的话，没必要直接把自己的引用暴露给别人。
//        可以借助接口，只暴露上转型引用给第三方。且所有其它实现了这个接口的角色对象都可以让室友替写作业
        roomMate.helpAnswer(question2,student);

//        大部分情况下，没有具体写作业的人，我只是想写作业这件事有被执行,且可以自定义具体写作业的方式
//        回调：helpAnswer调用DoHomeWorkCallBack接口，DoHomeWorkCallBack在helpAnswer里反调question1参数
        roomMate.helpAnswer("1+4=？", new DoHomeWorkCallBack() {
            @Override
            public void doHomeWorkCallback(String question3, String answer) {
//                这里非常经典的交代了回调里question3这个莫名其妙出现的形参从哪里传进来？从helpAnswer方法里传进来
                answer += 2;
                log.info("问题："+question3+" 答案 "+answer);
            }
        });
    }
}
