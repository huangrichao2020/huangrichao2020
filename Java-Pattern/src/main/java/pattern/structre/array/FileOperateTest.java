package pattern.structre.array;

/**
import java.io.File;
import java.io.IOException;*/
import java.io.*;

public class FileOperateTest {
    public static void main(String[] args) throws IOException {
        File dir = new File("dir");
        if(!dir.exists())
            dir.mkdir();
        File dir1 = new File(dir,"dir1");
        if(!dir1.exists())
            dir1.mkdir();

        File file = new File(dir1,"names.txt");
        if(!file.exists())
            file.createNewFile();

        System.out.println(dir1.getAbsoluteFile());
        System.out.println("文件的绝对路径是:"+file.getAbsoluteFile());



    }
}
