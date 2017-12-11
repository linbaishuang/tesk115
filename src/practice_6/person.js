module.exports = class Person{
    constructor(name, age){
        this.name = "Tom";
        this.age = 21;
    }
    introduce(){
        var intro;
        intro = "My name is " + this.name +". I am "+ this.age +" years old.";
        return intro;
    }
}


