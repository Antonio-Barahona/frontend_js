class User {
    constructor(name){
        this.name = name;
        this.lastName = 'Meriles';
        this.hello= this.sayHi;
    }
    sayHi(){
        console.log(this.name);
    }
}

//Uso;

let user = new User("Fran ");
user.sayHi()


let user2 = new User("Marcos");
user2.sayHi()