## bash
vim test.sh
chmod 777 test.sh
ls -al 可看到文件权限rwx

x表示文件可执行
即./test.sh即可执行

echo -n 输出不换行，默认忽略引号，输出引号必须带\
echo -e 解码 "\033[31m123\033[0m"

变量
- 引用变量使用${variable}
- mydate = `date` 
- mydate = $(date)

for file in "${ls}";do echo -n ${file};done;

数学运算
- expr 1 + 5