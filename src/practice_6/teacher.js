
module.exports = class Teacher{
    constructor(name, age, klass){
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce(){
        if(this.klass >= 0){
            return "My name is "+this.name+". I am "+this.age+" years old. I am a Teacher. I teach Class "+ this.klass +".";
        } else {
            return "My name is "+this.name+". I am "+this.age+" years old. I am a Teacher. I teach No Class.";
        }
    }

}

