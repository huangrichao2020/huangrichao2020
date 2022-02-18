#include <string>
#include <iostream>
using namespace std;

class Teacher{
//类内定义的函数，默认inline
public:
    //系统默认生成一个空白函数体的构造函数
    Teacher();
    //系统会默认生成一个空白函数体的拷贝构造函数
    //仅在传入本类的引用对象时触发，调用该拷贝函数，而不调用构造函数
    Teacher(const Teacher& stu);
    Teacher(int age);
    Teacher(string name,int age);
    void setName(string name);
    string getName();
    void setAge(int age);
    int getAge();
    void printDoubleAge();
    double getPI();
private:
    string m_strName;
    int m_intAge;
    const double m_douPI = 3.14;
};

void Teacher::printDoubleAge(){
    cout<<2*m_intAge<<endl;
}

