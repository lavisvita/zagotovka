class People {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    getMan(){
        console.log(this.firstName + "\n" + this.secondName);
    }
}

module.exports = People;