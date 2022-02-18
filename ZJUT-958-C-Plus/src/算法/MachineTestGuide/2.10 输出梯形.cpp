#include <stdio.h>

int main() {
    int h;
    while (scanf("%d", &h) != EOF) {
        int maxLine = h + (h - 1) * 2; //计算最后一行包含的星号个数
        //依次输出每行信息
        for (int i = 1; i <= h; i++) {
            //依次输出每行中的空格或星号
            for (int j = 1; j <= maxLine; j++) {
                if (j < maxLine - h - (i - 1) * 2 + 1)
                    printf(" ");
                else
                    printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}
