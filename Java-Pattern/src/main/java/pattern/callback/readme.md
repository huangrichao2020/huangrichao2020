## 什么是回调
现在有 Student Roomate AnyPeopleDoHomework 三个角色 以及学校这个主类，业务是让Roomate替学生或他人写作业。
**分析**
- Student.doHomeWork(String question) --> void
- Student.copyHomeWork(String question ,String answer) --> void  // 具体业务类偷懒执行业务时，需要原始输入与第三方加工结果。
- Roomate.doHomeWork(String question) --> String answer
- 精简代码 Roomate.helpAnswer(String question,Student stu ) --> 在helpAnswer里根据question加工出answer后，再调用Student的copyHomeWork()
- 发现还有jenior Student ,Senior Student等等很多人需要根据question处理answer。 于是抽象成 Interface DoHomeWorkCallBack.doHomeWorkCallback(String question,String answer) --> void 并在Roomate里做成回调。
- Roomte.helpAnswer("1+4=?",new DoHomeWorkCallBack(){
     void doHomeWorkCallback(String question,String answer){
            <!-- 使用一下answer，question -->
     }
})
- Roomte.helpAnswer()里根据question的不同情况，传入不同的answer给doHomeWorkCallback()