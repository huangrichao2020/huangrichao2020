/*
 * @Author: HuangRichao 
 * @Date: 2019-10-02 17:09:33 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-02 17:13:18
 * @Description : 自定义日志组件，可以打印消息的文件名字与所在行号
 */

  function Logger() {
    var stack = getStackTrace() || ""
    var line = stack[1] || ""
    for (var i in arguments) {
    }
    if (typeof arguments[i] == 'object') {
      arguments[i] = JSON.stringify(arguments[i])
    }
    arguments[i] += '  ' + line.replace("(", "").replace(")", "")
    log.apply(console, arguments)
  };

  // class内部的函数可以不用function定义关键字
  function getStackTrace() {
    let stack = new Error().stack || '';
    stack = stack.split('\n').map(function (line) {
    return line.trim();
    });
    return stack.splice(stack[0] == 'Error' ? 2 : 1);
  };

  var log = console.log;

  export  {Logger};