"use strict";
exports.__esModule = true;
// import { log } from "util";
var b_1 = require("./b");
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        // tslint:disable-next-line:no-console
        // log(this.fullName);
        b_1.log2(this.firstName);
    }
    return Student;
}());
// :是类型注解，轻量级的约束函数或变量
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var users = {
    firstName: "Huang",
    lastName: "Richao"
};
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
