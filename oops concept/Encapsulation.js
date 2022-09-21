class Person{
  constructor(names,id){
    this.names = names;
    this.id = id;
  }
  add_Address(add){
    this.add = add;
  }
  get_details(){
    console.log(`Name is ${this.name},Address is :${this.add}`)
  }
}
let person1 = new Person('ram',21)
person1.add_Address('delhi')
person1.get_details();