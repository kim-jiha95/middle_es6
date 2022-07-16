// string .includes
const isEmail = email => email.includes("@");

console.log(isEmail("conner@trace.com"))

//  string.repeat
const CC_Number = "3436"

const displayName = `${"*".repeat(10)}${CC_Number}`

console.log(displayName)

// string.startswith
const name = "Mr.Nicolas"

console.log(name.endsWith("s"), "?")