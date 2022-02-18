package pattern.structre.stack;


public class Node {
    public int data;
    //preNode只是一个引用变量,就是个链接指针,指针指向成功了,一条链接就连成了
    //创建Node对象时不会出现节点对象空间内还有嵌套节点空间的情况出现
    //此处不要被大脑直觉迷惑
    Node preNode;
    public Node(int data){
        this.data = data;
    }
}
    