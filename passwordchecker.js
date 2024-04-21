// user input for password
// evaluate strength - 8 chars, contain at least 1 uppercase, 1 lowercase, 1 digit, may contain special chars

// const rl = require("readline-sync")

// const password = rl.question("Please choose a password: \n")

const passwordRegex = /^([A-Z]{1,})([a-z]{1,})(.{8,})$/

function passwordChecker(password){
    return passwordRegex.test(password)

}

console.log(passwordChecker("123.TARYn"))