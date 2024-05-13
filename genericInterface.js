var collection = /** @class */ (function () {
    function collection() {
        this.data = [];
    }
    collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return collection;
}());
var itemOne = new collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Creating an instance of `Collection` with type parameter `Game`
var itemTwo = new collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
