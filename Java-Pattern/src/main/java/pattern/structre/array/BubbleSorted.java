package pattern.structre.array;

import java.util.Arrays;

public class BubbleSorted {
    public static void main(String[] args){
        int[] messArray = {12,421,523,234,21,123,75,43,864,24,6,7,8};
        int len = messArray.length;
        messArray = bubbleSorted(messArray,len);
        System.out.println(Arrays.toString(messArray));
    }

    public static int[] bubbleSorted(int[] messArray,int len){
        for(boolean sorted = false ; sorted = !sorted ; len--)
            for (int i = 1; i < len; i++)
                if (messArray[i - 1] > messArray[i]) {
                    int flag = messArray[i];
                    messArray[i] = messArray[i-1];
                    messArray[i-1] = flag;
                    sorted = false;
                }
        System.out.println(messArray[0]);
        return messArray;
    }

}
