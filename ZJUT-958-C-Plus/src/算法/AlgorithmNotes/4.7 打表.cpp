/**
* 打表是一种典型的用空间换时间的技巧
* 一般指将所有可能需要用到的结果事先计算出来，需要用到时可以直接查表获得
* 常见用法如下：① 在程序中一次性计算出所有需要用到的结果，之后的查询直接取这些结果
*               ② 在程序B中分一次或多次计算出所有需要用到的结果，手工把结果卸载程序A的数组中，
*                  然后在程序A中就可以直接使用这些结果
*               ③ 对一些感觉不会做的题目，先用暴力程序计算小范围数据的结果，然后找规律，
*                  或许就能发现一些“蛛丝马迹”
**/