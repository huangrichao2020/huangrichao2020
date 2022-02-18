
#include <stdlib.h>
#include <iostream>
#include "Teacher.cpp"

using namespace std;



int main(int args,char* argv[]){
     
    Teacher t1;
    Teacher t2("Merry",15);
    Teacher *p = NULL;
    p = new Teacher();
    
    //触发两次拷贝构造函数
    Teacher t3 = t1;
    Teacher t4(t1);

    t1.printDoubleAge();
    cout<<t1.getName()<<" "<<t2.getName()<<endl; 
    cout<<t1.getPI()<<" "<<t2.getPI()<<endl; 
    cin.get();
    return 0;
}
