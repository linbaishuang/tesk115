import Person from "../../src/practice_1/person.js"
module.exports = class Teacher extends Person{
    constructor(num, name, age, klass){
        super(name, age);
        this.num = num;
        this.klass = klass;
    }
    introduce(){
        if(this.klass !== undefined){
            return super.introduce() + " I am a Teacher. I teach Class "+this.klass.number+".";
        } else {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
    }
}