package pattern.structre.array;
public class RecurseSum {

    public static int sum(int[] a,int n){
        return n<1 ? 0 : sum(a,n-1)+a[n-1];
    }
    public static void main(String[] args){
        int[] a = {1,2124,53,213,241,6};
        System.out.println(sum(a,a.length));
    }
}
