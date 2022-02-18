package pattern.structre.array;

import java.io.File;
import java.io.IOException;

/**
 * IO操作体会
 */
public class IOTest {
    public static void main(String[] args) throws IOException {
        File file=new File("names.txt");
        System.out.println("是否存在文件"+file.exists());
        System.out.println("是文件吗"+file.isFile());
        System.out.println("是目录吗"+file.isDirectory());
        System.out.println("文件名称"+file.getName());
        System.out.println("文件路径"+file.getPath());
        System.out.println("绝对路径"+file.getAbsoluteFile());
        System.out.println("最后修改"+file.lastModified());
        System.out.println("文件大小"+file.length()+"字节");
        }
}
