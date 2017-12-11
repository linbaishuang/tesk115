
module.exports= class Student {
    constructor(name, age, klass) {
        this.name = "Tom";
        this.age = 21;
        this.klass = 2;
    }
    introduce(){
        return "I am a Student. I am at Class "+this.klass+"."
    }
}