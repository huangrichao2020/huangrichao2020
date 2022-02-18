package pattern.structre.quene;

public class Quene {
    public Node head;
    public Node current;

    public void add(int data) {
        if (head == null) {
            head = new Node(data);
            current = head;
        } else {
            current.nextNode = new Node(data);
            current = current.nextNode;
        }
    }
    public Node pop(){
//        if(head == null){
//            throw new NullPointerException("队列为空");
//        }
        Node headNode = head;
        head = head.nextNode;

        return headNode;

    }

    public static void main(String[] args) throws Exception{
        Quene testQuene = new Quene();
        final int CONST_FIRST,CONST_END;
        CONST_FIRST = 1;
        CONST_END = 5;
        for(int i=CONST_FIRST; i <= CONST_END; i++){
            testQuene.add(i);
        }
        for(int i = 1; i <= CONST_END; i++) {
            System.out.println(testQuene.pop().data);
        }


    }
    /**
     * @author huangrichao
     */
    public class Node {
        public int data;
        Node nextNode;

        public Node(int data){
            this.data = data;
        }
    }
}
