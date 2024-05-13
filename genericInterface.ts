interface Book{
    itemType: string;
    title: string;
    isbn: number;
}
 interface Game{
    itemType: string;
  title: string;
  style: string;
  price: number;
 }
 class collection <T>{
    public data : T[] = [];

    add(item: T):void {
        this.data.push(item)
    }
}
    let itemOne = new collection<Book>();
    itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
    itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
    console.log(itemOne);
    
    // Creating an instance of `Collection` with type parameter `Game`
    let itemTwo = new collection<Game>();
    itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
    console.log(itemTwo);
 
