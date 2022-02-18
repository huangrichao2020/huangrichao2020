package pattern.headfirst;

public class Generics<T> {

    private T t;

    public T getT() {
        return t;
    }

    public void setT(T t) {
        this.t = t;
    }

    //定义泛型方法.
    private <T> void show(T t) {
        System.out.println(t);
    }

    public static void shows(){
        System.out.println("-----下面输出泛型方法-----");
        Generics generics = new Generics();
        generics.show("你好");
        generics.show(123456);
        generics.show(10.01);
    }

}
