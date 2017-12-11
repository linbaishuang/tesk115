

module.exports = class Worker{
    constructor(name, age){
        this.name = "Tom";
        this.age = 21;
    }
    introduce(){
        return "My name is Tom. I am "+this.age+" years old. I am a Worker. I have a job.";
    }
}