//use for iteration
let a1 = [3,5,7,8]
let a2 = [...a1,3,6,90,67,69] //here ...a1 is spread operator
let a3 = [...a1,...a2]
console.log(a2)
console.log(a3)