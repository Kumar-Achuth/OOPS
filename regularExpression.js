var prompt = require('prompt-sync')()
var fs = require('fs')
var data = fs.readFileSync('details.txt')
data = data.toString()
var restriction = /[a-zA-Z]/g
var restriction1 = /[0-9]/g
var restriction2 = /[!@#$%^&*+_]/g

var name = prompt('Enter your First name : ')
if (name.search(restriction1) == -1 && name.search(restriction2) == -1) {
    var string = data.replace(/<<name>>/g, name)
}
else {
    console.log('Invalid Input ')
    process.exit()
}
var fullname = prompt('Enter your Full name : ')

if (fullname.search(restriction1) == -1 && fullname.search(restriction2) == -1) {
    var string = string.replace(/<<full name>>/g, fullname)

}
else {
    console.log('Invalid Input')
    process.exit()
}
var contact = prompt('Enter your contact number : ')

if (contact.search(restriction) == -1 && contact.search(restriction2) == -1) {
    if (contact.length == 10) {
        string = string.replace(/91-xxxxxxxxxx/g, contact)
    }
    else {
        console.log('Enter 10 digit number')
        process.exit()
    }

}
else {
    console.log('invalid')
    process.exit()
}
var date = new Date()
var d = date.getDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getFullYear()
string = string.replace(/01-01-2016/g, d)
console.log(string)
