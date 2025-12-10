"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Aviral",
    email: "aviral@example.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "aviral", isPaid: false, email: "h@h.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser1(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
var finalUser = createUser1({
    name: "Aviral",
    email: "aviral@example.com",
    isActive: true,
});
console.log("finalUser val is: ", finalUser);
var myUser = {
    _id: "12345",
    name: "Aviral",
    email: "aviral@example.com",
    isActive: true
};
myUser.email = "h@gmail.com";
