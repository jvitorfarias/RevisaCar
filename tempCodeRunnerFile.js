const readlineSync = require('readline-sync')

let userAge = readlineSync.question("Qual sua idade?")

console.log(userAge, typeof userAge)