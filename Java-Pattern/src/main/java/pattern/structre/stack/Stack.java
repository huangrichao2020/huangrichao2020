package pattern.structre.stack;


public class Stack {
    private Node head;
    private Node current;

    public void push(int data){
        if(head == null){
            //head对象初始化的时候,new的同时分配内存地址给
            // Node对象,然后head作为引用指向这个地址
            head = new Node(data); //创建0号节点,忽视其preNode属性

            current = head; //将0号节点复制给current指针
        }else{
            //创建与0号节点毫无相关的1号节点
            Node newNode = new Node(data);
            //通过current变量将0号节点的引用复制到1号节点的preNode属性上
            //使1号节点的preNode变量指向0号节点
            newNode.preNode = current;
            //为了便于添加2号节点,
            //通过覆盖新节点给栈指针,达到移动栈指针的目的
            //相当于把0号节点往栈底压移一个节点单位
            current = newNode;
        }
    }

    public Node pop(){
        if(head == null){
            return null;
        }else {
            Node popNode = current;
            current = current.preNode;
            return popNode;
        }
    }
}
