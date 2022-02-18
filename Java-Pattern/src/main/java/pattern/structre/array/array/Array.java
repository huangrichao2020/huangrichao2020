package pattern.structre.array.array;
// 同目录调用就不要package了


/**
 * Demo ArrayClass
 * @author huangrichao
 * @date 2018/08/15
 */
public class Array<E> {
    /**
     * @param size
     * 当前数组中有效元素的个数,注意是size变量是可以get与set的.
     */
    private E[] data;
    private int size;

    /**
     * @param capacity 构造器,构造时传入容量参数capacity
     */
    public Array(int capacity) {
        //new int[10]只有最基本的创建数组内存空间的功能
        this.data = (E[]) new Object[capacity];
        this.size = 0;
    }

    /**
     * 使用无参构造器时,容量初始为10
     */
    public Array() {
        this(10);
    }

    public int getSize() {
        return size;
    }


    /**
     * 向数组首部添加数据e
     */
    public void addFirst(E e) {
        addInsert(0, e);
    }

    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * @param e 要输入的数字,注意数组添加都是从尾巴加的,直接加到中间叫插入
     */
    public void addLast(E e) throws IllegalArgumentException {
        addInsert(size, e);
    }

    /**
     * @param index 要插入的位置
     * @param e     要插入的数据
     */
    public void addInsert(int index, E e) {
        if (size == data.length)
            throw new IllegalArgumentException("AddLast failed.For Array has been full");
        if (index < 0 || index > size)
            throw new IllegalArgumentException("AddLast failed.For Array has been full");
        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }
        data[index] = e;
        size++;
    }

    /**
     * get data[index] , set data[index] = e
     */

    public E get(int index) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Get failed.For index is illegal.");
        }
        return data[index];
    }

    public void set(int index, E e) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Get failed.For index is illegal.");
        }
        data[index] = e;
    }

    /**
     * boolean contains e
     * E e1与int e2的区别
     * e1是类对象,e2是基本数据
     * 类对象得用引用比较equals,基本数据基本用==
     */
    public boolean contains(E e) {
        boolean flag = false;
        for (int i = 0; i < size; i++) {
            flag = (data[i] == e);
        }
        return flag;
    }

    /**
     * 在数组中查询元素,建议用toString输出
     */
    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();
        res.append(String.format("Array size is: %d,capacity is: %d\n", size, data.length));
        res.append("[");
        for (int i = 0; i < size - 1; i++) {
            res.append(data[i]);
            res.append(", ");
        }
        res.append(data[size - 1]);
        res.append("]");

        return res.toString();
    }

    /**
     * @param e 搜索数组内元素e的索引
     * @return index 或 -1表示没有该元素
     */
    public int find(E e) {
        for (int i = 0; i < size; i++) {
            if (data[i] == e)
                return i;
        }
        return -1;
    }

    /**
     * 返回被删除数据,以备用户观察备份
     *
     * @param index
     */
    public E remove(int index) {
        if (index < 0 || index == size)
            throw new IllegalArgumentException("Remove failed.For index is illegal.");
        E ret = data[index];
        for (int i = index; i < size; i++) {
            data[i] = data[i + 1];
        }
        size--;
        return ret;
    }
}

