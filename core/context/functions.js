const email = ["nco@no.com", "naver@google.com", "jiha@gmail.com", "conner@gmail.com"]

// .includes super pretty...
const foundMail = email.find(item => item.includes("@gmail.com"))

console.log(foundMail, "?")

// .filter()
const noGmail = email.filter(potato => !potato.includes("@gmail"))

console.log(noGmail)

// split
email.forEach(email => {
    console.log(email.split("@")[0])
})

// map
const cleaned = email.map(email => email.split("@")[0])
console.log(cleaned,"cleaned")

// console.table ?!
const clean = email.map((email, index) => ({
    username: email.split("@")[0],
    points: index
}));

console.table(clean)