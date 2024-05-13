class User < T = string> {
    constructor(public value: T){}
    show(msg: T): void {
        console.log(`${msg}- ${this.value}`);
        
    }
}
 let user1 = new User <string> ("Amna");
 console.log(user1.value);
 user1.show("Message")

 let user2 = new User<string |number> (100);
 console.log(user2.value);
 user2.show("Message");
 
 