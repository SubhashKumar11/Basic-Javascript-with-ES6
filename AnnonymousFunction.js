//function which dont have name called anonymous function
let person = { //object
    personname:'ram',
    lastname: 'kumar'
}
person.age = 56;
person.sayhello = function () {//here function has no name
    console.log('say hello')
}




function show() {
    console.log('hello')
}
setTimeout(() => {
    show()
}, 3000);//run after 3 seconds