


#include <iostream>
using namespace std;
int main(int args,char* argv[]){
    int y;
    bool x;
    cout<<"请输入一个值"<<endl;
    cin>>y;
    cout<<"请输入一个布尔值"<<endl;
    cin>>x;
    cout<<"八进制 :"<<oct<<y
    <<"\n十六进制："<<hex<<y
    <<"\n二进制："<<bitset<8>(y)
    <<"\nbool:"<<boolalpha<<x<<endl;
    cout<<"ascii转数字"<<0+' '<<endl;//将ascii符号转为对应的数字
    return 0;
}
