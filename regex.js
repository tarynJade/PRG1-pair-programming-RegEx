//Some sample Regular expressions to have a play with

// const validWholeNumberRegEx = /^[0-9]+$/;
// const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;
// const validAlphabeticString = /^[A-Za-z]+$/;

// // Use the test method to check whether something matches the rules. 
console.log(validWholeNumberRegEx.test(456))
console.log(validPositiveWholeDecimalNumber.test(0.6))
console.log(validAlphabeticString.test("dietcoke"))

// Create three functions which check user input for three pieces of data.
// 1. Their name; 2. Their age; 3. Their height. 

const nameRegex = /^[A-Z]+$/i;

function checkName(name){
    return nameRegex.test(name)
}

console.log(checkName("Taryn?"))
console.log(checkName("Chrissie"))

const ageRegex = /^[0-9]+$/;
function checkAge(age){
    return ageRegex.test(age)
}

// console.log(checkAge(19))
// console.log(checkAge(19.5))
// console.log(checkAge("19"))
// console.log(checkAge("19a"))

const heightRegex = /^\d{1,3}$/

function checkHeight(height){
    return heightRegex.test(height)
}
console.log(checkHeight("12a"))
console.log(checkHeight("12a"))

// Other regex methods do exist such as match() (which looks for matching
// characters) and replace() (which replaces characters), but test is 
// probably the most commonly used and the one you should use here.