class Vehicle{
    constructor(name,maker,engine){
        this.names = names;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return(`The name of the bike is${this.name}`)
    }

}
let bike1 = new Vehicle('ham','suzuki','1340cc')
console.log(bike1.names)
console.log(bike1.getDetails());