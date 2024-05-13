var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    User.prototype.show = function (msg) {
        console.log("".concat(msg, "- ").concat(this.value));
    };
    return User;
}());
var user1 = new User("Amna");
console.log(user1.value);
user1.show("Message");
var user2 = new User(100);
console.log(user2.value);
user2.show("Message");
