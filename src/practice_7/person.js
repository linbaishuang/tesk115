
module.exports = class Person{
    constructor(name, age){
        this.name = "Tom";
        this.age = 21;
    }
    introduce(){
        return "My name is " + this.name +". I am "+ this.age +" years old.";

    }
}


