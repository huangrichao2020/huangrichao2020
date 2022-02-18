package pattern.structre.stack;
// import design.structre.stack.Stack;
public class StackPushPopTest {

    public static void main(String[] args) {
        Stack testStack = new Stack();
        testStack.push(1);
        testStack.push(12);
        testStack.push(123);
        System.out.println("从顶到底依次输出栈元素:");
        for(int i=0;i<3;i++){
            System.out.println(testStack.pop().data);
        }
    }
}
