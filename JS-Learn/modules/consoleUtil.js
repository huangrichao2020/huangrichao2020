var getStackTrace = function () {
    var obj = {};
    Error.captureStackTrace(obj, getStackTrace);
    return obj.stack;
  };
  var log = console.log;
  console.log = function () {
    var stack = getStackTrace() || ""
    var matchResult = stack.match(/\(.*?\)/g) || []
    var line = matchResult[1] || ""
    for (var i in arguments) {
    }
    if (typeof arguments[i] == 'object') {
      arguments[i] = JSON.stringify(arguments[i])
    }
    arguments[i] += '----' + line.replace("(", "").replace(")", "")
    log.apply(console, arguments)
  };

  export default {console}