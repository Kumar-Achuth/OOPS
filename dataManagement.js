"use strict"
var prompt = require('prompt-sync')()
var fs = require('fs');
var data = fs.readFileSync('data.json')

var cash = JSON.parse(data);
console.log(' 1 for Rice \n 2 for Pulse \n 3 for wheat : ')
var option = prompt('Enter the option for different groceries :')
if (option == 1) {
    for (var i = 0; i <= cash.rice.weight.length - 1; i++) {
        console.log('Total inventory value of: ' + cash.rice.name[i] + ' is  : ' + cash.rice.weight[i] * cash.rice.price[i] + ' rs ')
    }
}
else if (option == 2) {
    for (var i = 0; i <= cash.pulses.weight.length - 1; i++) {
        console.log('Total inventory value of: ' + cash.pulses.name[i] + ' is  : ' + cash.pulses.weight[i] * cash.pulses.price[i] + ' rs ')
    }
}
else if (option == 3) {
    for (var i = 0; i <= cash.wheat.weight.length - 1; i++) {
        console.log('Total inventory value of: ' + cash.wheat.name[i] + ' is  : ' + cash.wheat.weight[i] * cash.wheat.price[i] + ' rs ')
    }
}
else {
    console.log('Please enter valid input : ')
}
   // console.log(cash)
