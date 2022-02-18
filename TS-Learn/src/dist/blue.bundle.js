/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./QuickUse/blue.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./QuickUse/blue.ts":
/*!**************************!*\
  !*** ./QuickUse/blue.ts ***!
  \**************************/
/*! exports provided: log2, sentence, tuple2, enum2, any2, void2, never2, object2, typeAssert2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log2\", function() { return log2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sentence\", function() { return sentence; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tuple2\", function() { return tuple2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enum2\", function() { return enum2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"any2\", function() { return any2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"void2\", function() { return void2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"never2\", function() { return never2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"object2\", function() { return object2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeAssert2\", function() { return typeAssert2; });\n/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable */ \"./QuickUse/variable.ts\");\n\nfunction log2(str) {\n    console.log(str);\n}\nfunction sentence() {\n    var name = \"Gene\";\n    var age = 37;\n    var sentence = \"Hello, my name is \" + name + \".\\n    I'll be \" + (age + 1) + \" years old next month.\";\n    log2('执行blue部分');\n    log2(sentence);\n    tuple2();\n    enum2();\n    any2();\n    void2();\n    // never2();\n    object2();\n    typeAssert2();\n    log2('执行variable部分');\n    Object(_variable__WEBPACK_IMPORTED_MODULE_0__[\"variable\"])();\n}\n// export function array2(){\n//     let list:number[] = [1,2,3];\n//     let list2:Array<number> = [1,2,3];\n//     list=[1];\n//     list2=[2];\n// }\nfunction tuple2() {\n    var tuple;\n    tuple = ['hello', 10];\n    log2(tuple[0].substr(1));\n    tuple[0] = '11'; // \n    log2(tuple[1].toString());\n}\nfunction enum2() {\n    // 默认对应的枚举值为0,1,2\n    // Color[index]为对应的枚举名\n    // Color.Green为对应的枚举值\n    var Color;\n    (function (Color) {\n        Color[Color[\"Red\"] = 0] = \"Red\";\n        Color[Color[\"Green\"] = 1] = \"Green\";\n        Color[Color[\"Blue\"] = 2] = \"Blue\";\n    })(Color || (Color = {}));\n    ;\n    var c = Color.Green;\n    var colorName = Color[2];\n    log2(\"color:\" + colorName + \" \" + c);\n}\nfunction any2() {\n    var notSure = 4;\n    var list = [1, true, \"free\"];\n    notSure = 'maybe';\n    notSure = false;\n    log2(notSure + list.toString());\n}\nfunction void2() {\n    var u = undefined;\n    var n = null;\n    var s = 1;\n    console.log(\"This is my warning message\" + s + u + n);\n}\nfunction never2() {\n    // 返回never的函数必须存在无法达到的终点\n    function error(message) {\n        throw new Error(message);\n    }\n    // 推断的返回值类型为never\n    function fail() {\n        return error(\"Something failed\");\n    }\n    // 返回never的函数必须存在无法达到的终点\n    function infiniteLoop() {\n        while (true) {\n            fail();\n        }\n    }\n    infiniteLoop();\n}\nfunction object2() {\n    function create(o) {\n        log2(\"create:\" + o);\n    }\n    ;\n    create({ prop: 0 }); // OK\n    create(null); // OK\n    create(42); // Error\n    create(\"string\"); // Error\n    create(false); // Error\n    create(undefined); // Error\n}\nfunction typeAssert2() {\n    var someValue = \"this is a string\";\n    // someValue是any类型，所以使用它的prototype属性时得用as做一下类型断言，便于在编译器阶段就阻止程序运行\n    var strLength = someValue.length;\n    log2(\"strLength: \" + strLength);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9RdWlja1VzZS9ibHVlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUXVpY2tVc2UvYmx1ZS50cz8xODJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhcmlhYmxlIH0gZnJvbSAnLi92YXJpYWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cyKHN0cjogc3RyaW5nIHwgbnVtYmVyIHwgbnVtYmVyW10pIHtcbiAgICBjb25zb2xlLmxvZyggc3RyIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlKCl7XG4gICAgbGV0IG5hbWU6IHN0cmluZyA9IGBHZW5lYDtcbiAgICBsZXQgYWdlOiBudW1iZXIgPSAzNztcbiAgICBsZXQgc2VudGVuY2U6IHN0cmluZyA9IGBIZWxsbywgbXkgbmFtZSBpcyAkeyBuYW1lIH0uXG4gICAgSSdsbCBiZSAkeyBhZ2UgKyAxIH0geWVhcnMgb2xkIG5leHQgbW9udGguYDtcbiAgICBsb2cyKCfmiafooYxibHVl6YOo5YiGJylcbiAgICBsb2cyKHNlbnRlbmNlKTtcbiAgICB0dXBsZTIoKTtcbiAgICBlbnVtMigpO1xuICAgIGFueTIoKTtcbiAgICB2b2lkMigpO1xuICAgIC8vIG5ldmVyMigpO1xuICAgIG9iamVjdDIoKTtcbiAgICB0eXBlQXNzZXJ0MigpO1xuXG4gICAgbG9nMign5omn6KGMdmFyaWFibGXpg6jliIYnKVxuICAgIHZhcmlhYmxlKCk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcnJheTIoKXtcbi8vICAgICBsZXQgbGlzdDpudW1iZXJbXSA9IFsxLDIsM107XG4vLyAgICAgbGV0IGxpc3QyOkFycmF5PG51bWJlcj4gPSBbMSwyLDNdO1xuLy8gICAgIGxpc3Q9WzFdO1xuLy8gICAgIGxpc3QyPVsyXTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHR1cGxlMigpe1xuICAgIGxldCB0dXBsZTogW3N0cmluZywgbnVtYmVyXTtcbiAgICB0dXBsZSA9IFsnaGVsbG8nLDEwXTtcbiAgICBsb2cyKHR1cGxlWzBdLnN1YnN0cigxKSk7XG4gICAgdHVwbGVbMF0gPSAnMTEnOyAvLyBcbiAgICBsb2cyKHR1cGxlWzFdLnRvU3RyaW5nKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW51bTIoKXtcbiAgICAvLyDpu5jorqTlr7nlupTnmoTmnprkuL7lgLzkuLowLDEsMlxuICAgIC8vIENvbG9yW2luZGV4XeS4uuWvueW6lOeahOaemuS4vuWQjVxuICAgIC8vIENvbG9yLkdyZWVu5Li65a+55bqU55qE5p6a5Li+5YC8XG4gICAgZW51bSBDb2xvciB7UmVkLCBHcmVlbiwgQmx1ZX07XG4gICAgbGV0IGM6IENvbG9yID0gQ29sb3IuR3JlZW47XG4gICAgbGV0IGNvbG9yTmFtZTogc3RyaW5nID0gQ29sb3JbMl07XG4gICAgbG9nMihgY29sb3I6JHsgY29sb3JOYW1lIH0gJHsgYyB9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbnkyKCl7XG4gICAgbGV0IG5vdFN1cmU6YW55ID0gNDtcbiAgICBsZXQgbGlzdDphbnlbXSA9IFsxLHRydWUsXCJmcmVlXCJdO1xuICAgIG5vdFN1cmUgPSAnbWF5YmUnO1xuICAgIG5vdFN1cmUgPSBmYWxzZTtcbiAgICBsb2cyKG5vdFN1cmUrbGlzdC50b1N0cmluZygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvaWQyKCk6IHZvaWQge1xuICAgIHZhciB1OnVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgbjpudWxsID0gbnVsbDtcbiAgICBsZXQgczpudW1iZXIgPSAxO1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBteSB3YXJuaW5nIG1lc3NhZ2VcIitzK3Urbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXZlcjIoKSB7XG4gICAgLy8g6L+U5ZuebmV2ZXLnmoTlh73mlbDlv4XpobvlrZjlnKjml6Dms5Xovr7liLDnmoTnu4jngrlcbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvLyDmjqjmlq3nmoTov5Tlm57lgLznsbvlnovkuLpuZXZlclxuICAgIGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICAgIHJldHVybiBlcnJvcihcIlNvbWV0aGluZyBmYWlsZWRcIik7XG4gICAgfVxuXG4gICAgLy8g6L+U5ZuebmV2ZXLnmoTlh73mlbDlv4XpobvlrZjlnKjml6Dms5Xovr7liLDnmoTnu4jngrlcbiAgICBmdW5jdGlvbiBpbmZpbml0ZUxvb3AoKTogbmV2ZXIge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgZmFpbCgpXG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgaW5maW5pdGVMb29wKCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdDIoKXtcbiAgICAgZnVuY3Rpb24gY3JlYXRlKG86IG9iamVjdCB8IHVuZGVmaW5lZCB8IG51bGwgfCBib29sZWFuIHwgbnVtYmVyIHwgc3RyaW5nKTogdm9pZHtcbiAgICAgICAgIGxvZzIoYGNyZWF0ZTokeyBvIH1gKVxuICAgICB9O1xuXG4gICAgY3JlYXRlKHsgcHJvcDogMCB9KTsgLy8gT0tcbiAgICBjcmVhdGUobnVsbCk7IC8vIE9LXG5cbiAgICBjcmVhdGUoNDIpOyAvLyBFcnJvclxuICAgIGNyZWF0ZShcInN0cmluZ1wiKTsgLy8gRXJyb3JcbiAgICBjcmVhdGUoZmFsc2UpOyAvLyBFcnJvclxuICAgIGNyZWF0ZSh1bmRlZmluZWQpOyAvLyBFcnJvclxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydDIoKXtcbiAgICBsZXQgc29tZVZhbHVlOiBhbnkgPSBcInRoaXMgaXMgYSBzdHJpbmdcIjtcbiAgICAvLyBzb21lVmFsdWXmmK9hbnnnsbvlnovvvIzmiYDku6Xkvb/nlKjlroPnmoRwcm90b3R5cGXlsZ7mgKfml7blvpfnlKhhc+WBmuS4gOS4i+exu+Wei+aWreiogO+8jOS+v+S6juWcqOe8luivkeWZqOmYtuauteWwsemYu+atoueoi+W6j+i/kOihjFxuICAgIGxldCBzdHJMZW5ndGg6IG51bWJlciA9IChzb21lVmFsdWUgYXMgc3RyaW5nKS5sZW5ndGg7XG4gICAgbG9nMihgc3RyTGVuZ3RoOiAke3N0ckxlbmd0aH1gKTtcbn1cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./QuickUse/blue.ts\n");

/***/ }),

/***/ "./QuickUse/variable.ts":
/*!******************************!*\
  !*** ./QuickUse/variable.ts ***!
  \******************************/
/*! exports provided: variable, scope2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"variable\", function() { return variable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope2\", function() { return scope2; });\n/* harmony import */ var _blue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blue */ \"./QuickUse/blue.ts\");\n\nfunction variable() {\n    Object(_blue__WEBPACK_IMPORTED_MODULE_0__[\"log2\"])('打印scope2方法');\n    scope2();\n    scope3();\n    let2(false);\n    const2();\n    deconstruct2();\n    IIFE2();\n}\nfunction scope2() {\n    for (var i = 0; i < 10; i++) {\n        // capture the current state of 'i'\n        // setTimeout\n        (function (i) {\n            setTimeout(function () { console.log(i); }, 100 * i);\n        })(i);\n    }\n}\nfunction scope3() {\n    var _loop_1 = function (i) {\n        setTimeout(function () { console.log(i); }, 100 * i);\n    };\n    // let会在不同的循环里创建新的作用栈{}，供执行语句使用\n    for (var i = 0; i < 10; i++) {\n        _loop_1(i);\n    }\n}\nfunction let2(input) {\n    // 每个{}都是一个栈作用域，let会在对应的作用域下挂不同的变量指针\n    // 类似的还有catch\n    // x++;\n    var x = 1;\n    // 不可在同一栈内定义形参 let input = 0;\n    if (x === 1) {\n        var x_1 = 2;\n        // 在不同的作用栈{}内可以定义相同的变量\n        // 此处的input会自动屏蔽掉外层的input，在之后的作用域内无法访问外层input\n        var input_1 = false;\n        console.log(x_1);\n        // expected output: 2\n    }\n    console.log(x);\n    var a = 100;\n    // let a = 101;\n    if (input) {\n        // Still okay to reference 'a'\n        // let修饰的变量只能作用在当前作用域内，避免了反复声明，全局污染。\n        // let与const类似，都不会创建window对象，let定义的是block-scoped variable\n        // 同一作用域内定义相同的变量，var会指向同一引用，let会创建新的引用。\n        var b = a + 1;\n        return b;\n    }\n    // Error: 'b' doesn't exist here\n    return a;\n}\nfunction IIFE2() {\n    // 表达式（）内的语句会立即执行，也就是说,需要将一段处理结果赋给\n    // 一个变量的话，可以在第一个（）内定义一个匿名函数，再用第二个()表示立即执行\n    var result = (function () {\n        var name = \"Barry\";\n        return name;\n    })();\n    // IIFE 执行后返回的结果：\n    result; // \"Barry\"\n}\nfunction const2() {\n    var numLivesForCat = 9;\n    // 默认const对象不可修改，但是其内部状态可修改。\n    var kitty = {\n        name: \"Aurora\",\n        numLives: numLivesForCat,\n    };\n    // Error\n    // kitty = {\n    //     name: \"Danielle\",\n    //     numLives: numLivesForCat\n    // };\n    // all \"okay\"\n    kitty.name = \"Rory\";\n    kitty.name = \"Kitty\";\n    kitty.name = \"Cat\";\n    kitty.numLives--;\n}\nfunction deconstruct2() {\n    // 定义数组\n    var input = [1, 2];\n    // 解构就是批量赋值\n    var first = input[0], second = input[1];\n    Object(_blue__WEBPACK_IMPORTED_MODULE_0__[\"log2\"])(first); // outputs 1\n    Object(_blue__WEBPACK_IMPORTED_MODULE_0__[\"log2\"])(second); // outputs 2\n    function f(_a) {\n        var first = _a[0], second = _a[1];\n        console.log(first);\n        console.log(second);\n    }\n    f([1, 2]);\n    var _a = [1, 2, 3, 4], first1 = _a[0], rest1 = _a.slice(1);\n    var _b = { a: 1, b: 2 }, a = _b.a, _c = _b.b, b = _c === void 0 ? 1001 : _c;\n    Object(_blue__WEBPACK_IMPORTED_MODULE_0__[\"log2\"])(first1);\n    Object(_blue__WEBPACK_IMPORTED_MODULE_0__[\"log2\"])(rest1);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9RdWlja1VzZS92YXJpYWJsZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1F1aWNrVXNlL3ZhcmlhYmxlLnRzPzYyNmIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBsb2cyIH0gZnJvbSAnLi9ibHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlKCl7XG4gICAgbG9nMign5omT5Y2wc2NvcGUy5pa55rOVJyk7XG4gICAgc2NvcGUyKCk7XG4gICAgc2NvcGUzKCk7XG4gICAgbGV0MihmYWxzZSk7XG4gICAgY29uc3QyKCk7XG4gICAgZGVjb25zdHJ1Y3QyKCk7XG4gICAgSUlGRTIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3BlMigpe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAvLyBjYXB0dXJlIHRoZSBjdXJyZW50IHN0YXRlIG9mICdpJ1xuICAgICAgICAvLyBzZXRUaW1lb3V0XG4gICAgICAgIChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZyhpKTsgfSwgMTAwICogaSk7XG4gICAgICAgIH0pKGkpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBzY29wZTMoKXtcbiAgICAvLyBsZXTkvJrlnKjkuI3lkIznmoTlvqrnjq/ph4zliJvlu7rmlrDnmoTkvZznlKjmoIh7fe+8jOS+m+aJp+ihjOivreWPpeS9v+eUqFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhpKTsgfSwgMTAwICogaSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGxldDIoaW5wdXQ6IGJvb2xlYW4pIHtcbiAgICAvLyDmr4/kuKp7femDveaYr+S4gOS4quagiOS9nOeUqOWfn++8jGxldOS8muWcqOWvueW6lOeahOS9nOeUqOWfn+S4i+aMguS4jeWQjOeahOWPmOmHj+aMh+mSiFxuICAgIC8vIOexu+S8vOeahOi/mOaciWNhdGNoXG4gICAgLy8geCsrO1xuICAgIGxldCB4ID0gMTtcbiAgICAvLyDkuI3lj6/lnKjlkIzkuIDmoIjlhoXlrprkuYnlvaLlj4IgbGV0IGlucHV0ID0gMDtcbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgICBsZXQgeCA9IDI7XG4gICAgICAgIC8vIOWcqOS4jeWQjOeahOS9nOeUqOagiHt95YaF5Y+v5Lul5a6a5LmJ55u45ZCM55qE5Y+Y6YePXG4gICAgICAgIC8vIOatpOWkhOeahGlucHV05Lya6Ieq5Yqo5bGP6JS95o6J5aSW5bGC55qEaW5wdXTvvIzlnKjkuYvlkI7nmoTkvZznlKjln5/lhoXml6Dms5Xorr/pl67lpJblsYJpbnB1dFxuICAgICAgICBsZXQgaW5wdXQgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIC8vIGV4cGVjdGVkIG91dHB1dDogMlxuICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh4KTtcblxuICAgIGxldCBhID0gMTAwO1xuICAgIC8vIGxldCBhID0gMTAxO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgICAvLyBTdGlsbCBva2F5IHRvIHJlZmVyZW5jZSAnYSdcbiAgICAgICAgLy8gbGV05L+u6aWw55qE5Y+Y6YeP5Y+q6IO95L2c55So5Zyo5b2T5YmN5L2c55So5Z+f5YaF77yM6YG/5YWN5LqG5Y+N5aSN5aOw5piO77yM5YWo5bGA5rGh5p+T44CCXG4gICAgICAgIC8vIGxldOS4jmNvbnN057G75Ly877yM6YO95LiN5Lya5Yib5bu6d2luZG935a+56LGh77yMbGV05a6a5LmJ55qE5pivYmxvY2stc2NvcGVkIHZhcmlhYmxlXG4gICAgICAgIC8vIOWQjOS4gOS9nOeUqOWfn+WGheWumuS5ieebuOWQjOeahOWPmOmHj++8jHZhcuS8muaMh+WQkeWQjOS4gOW8leeUqO+8jGxldOS8muWIm+W7uuaWsOeahOW8leeUqOOAglxuICAgICAgICBsZXQgYiA9IGEgKyAxO1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICAvLyBFcnJvcjogJ2InIGRvZXNuJ3QgZXhpc3QgaGVyZVxuICAgIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBJSUZFMigpe1xuICAgIC8vIOihqOi+vuW8j++8iO+8ieWGheeahOivreWPpeS8mueri+WNs+aJp+ihjO+8jOS5n+WwseaYr+ivtCzpnIDopoHlsIbkuIDmrrXlpITnkIbnu5PmnpzotYvnu5lcbiAgICAvLyDkuIDkuKrlj5jph4/nmoTor53vvIzlj6/ku6XlnKjnrKzkuIDkuKrvvIjvvInlhoXlrprkuYnkuIDkuKrljL/lkI3lh73mlbDvvIzlho3nlKjnrKzkuozkuKooKeihqOekuueri+WNs+aJp+ihjFxuICAgIHZhciByZXN1bHQgPSAoZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgdmFyIG5hbWUgPSBcIkJhcnJ5XCI7IFxuICAgICAgICByZXR1cm4gbmFtZTsgXG4gICAgfSkoKTsgXG4gICAgLy8gSUlGRSDmiafooYzlkI7ov5Tlm57nmoTnu5PmnpzvvJpcbiAgICByZXN1bHQ7IC8vIFwiQmFycnlcIlxufVxuXG5cbmZ1bmN0aW9uIGNvbnN0Migpe1xuICAgIGNvbnN0IG51bUxpdmVzRm9yQ2F0ID0gOTtcbiAgICAvLyDpu5jorqRjb25zdOWvueixoeS4jeWPr+S/ruaUue+8jOS9huaYr+WFtuWGhemDqOeKtuaAgeWPr+S/ruaUueOAglxuICAgIGNvbnN0IGtpdHR5ID0ge1xuICAgICAgICBuYW1lOiBcIkF1cm9yYVwiLFxuICAgICAgICBudW1MaXZlczogbnVtTGl2ZXNGb3JDYXQsXG4gICAgfVxuXG4gICAgLy8gRXJyb3JcbiAgICAvLyBraXR0eSA9IHtcbiAgICAvLyAgICAgbmFtZTogXCJEYW5pZWxsZVwiLFxuICAgIC8vICAgICBudW1MaXZlczogbnVtTGl2ZXNGb3JDYXRcbiAgICAvLyB9O1xuXG4gICAgLy8gYWxsIFwib2theVwiXG4gICAga2l0dHkubmFtZSA9IFwiUm9yeVwiO1xuICAgIGtpdHR5Lm5hbWUgPSBcIktpdHR5XCI7XG4gICAga2l0dHkubmFtZSA9IFwiQ2F0XCI7XG4gICAga2l0dHkubnVtTGl2ZXMtLTtcbn1cblxuZnVuY3Rpb24gZGVjb25zdHJ1Y3QyKCl7XG4gICAgLy8g5a6a5LmJ5pWw57uEXG4gICAgY29uc3QgaW5wdXQgPSBbMSwgMl07XG4gICAgLy8g6Kej5p6E5bCx5piv5om56YeP6LWL5YC8XG4gICAgY29uc3QgW2ZpcnN0LCBzZWNvbmRdID0gaW5wdXQ7XG4gICAgbG9nMihmaXJzdCk7IC8vIG91dHB1dHMgMVxuICAgIGxvZzIoc2Vjb25kKTsgLy8gb3V0cHV0cyAyXG5cbiAgICBmdW5jdGlvbiBmKFtmaXJzdCwgc2Vjb25kXTogW251bWJlcixudW1iZXJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0KTtcbiAgICAgICAgY29uc29sZS5sb2coc2Vjb25kKTtcbiAgICB9XG5cbiAgICBmKFsxLDJdKTtcblxuICAgIGxldCBbZmlyc3QxLCAuLi5yZXN0MV0gPSBbMSwgMiwgMywgNF07XG4gICAgXG4gICAgbGV0IHsgYSwgYiA9IDEwMDEgfSA9IHthOjEsYjoyfVxuICAgIGxvZzIoZmlyc3QxKVxuICAgIGxvZzIocmVzdDEpXG5cbiAgICBcbn0iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7O0FBRkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./QuickUse/variable.ts\n");

/***/ })

/******/ });