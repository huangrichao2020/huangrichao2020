#include "Teacher.h" //将.h的代码粘贴过来

//写法与同文件类外定义一模一样

Teacher::Teacher(const Teacher& stu):m_intAge(15){
    cout<<"this is a copy construct function "<<m_intAge<<endl;
}

//列表初始化,只能用于构造函数,编译速度优于构造函数，赋值范围包括常量区,但必须是no-statics data非静态数据
Teacher::Teacher():m_strName("Jim"),m_intAge(10),m_douPI(3.1415926){
    cout<<"Teacher()"<<endl;
}

//Teacher::代表后面的代码会被编译器（不是编辑器）指向Teacher类
Teacher::Teacher(int age):m_intAge(age){
    m_strName = "Jim";
    cout<<"Teacher(int age)"<<endl;
}

Teacher::Teacher(string name,int age){
    m_strName = name;
    m_intAge = age; 
    cout<<"Teacher(string name,int age)"<<endl;
}


//void必须在前面，.h不需要重复类型声明
void Teacher::setName(string name){
    m_strName = name;
}

string Teacher::getName(){
    return m_strName;
}

void Teacher::setAge(int age){
    m_intAge = age;
}

int Teacher::getAge(){
    return m_intAge;
}

double Teacher::getPI(){
    return m_douPI;
}