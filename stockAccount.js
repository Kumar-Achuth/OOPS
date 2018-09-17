"use strict"
var fs = require('fs')
var prompt = require('prompt-sync')()
var sum = 0
var data = fs.readFileSync('/home/bridgeit/Documents/kumar/oops/main/stockAccount.json')
var stock_object = JSON.parse(data)
class stockAccount {
    constructor() {
    }
    /**
     * Function to add stocks to the stock Account
     */
    buy() {
        var stocklength = prompt('Enter the number of stocks : ')
        for (var i = 0; i <= stocklength - 1; i++) {
            var name = prompt("Enter the stock name : ")
            var share = prompt('Enter the share value : ')
            var price = prompt('Enter the stock price : ')

            stock_object.stocks.push({
                stockname: name,
                sharevalue: share,
                shareprice: price,
            })
            var value = parseInt(share * price)
            sum = parseInt(sum + value)
            console.log('The value of the total shares is : ' + value)
            fs.writeFileSync('./stockAccount.json', JSON.stringify(stock_object), 'utf-8', function (err) {
                if (err) throw err
            }
            )
        }
        console.log(sum)
        console.log(stock_object)
        var date = new Date()
        var n = date.getDate() + ',' + (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getMinutes())
        console.log('The purchase time is : ' + n)
    }
    /**
     * Function to sell shares 
     */
    sell() {
        var index = prompt('Enter the index of stock u want to delete : ')
        stock_object.stocks.splice(index, 1)
        fs.writeFileSync('./stockAccount.json', JSON.stringify(stock_object), 'utf-8', function (err) {
            if (err) throw err

        }

        )
        console.log(stock_object)
        var date = new Date()
        var n = date.getDate() + ',' + (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getMinutes())
        console.log('The purchase time is : ' + n)
    }
    printstockreport() {
        console.log(stock_object)
        var date = new Date()
        var n = date.getDate() + ',' + (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getMinutes())
        console.log('The purchase time is : ' + n)
    }
    valueofshares() {
        for (var i = 0; i <= stock_object.stocks.length - 1; i++) {
            var total = (parseInt(stock_object.stocks[i].shareprice * stock_object.stocks[i].sharevalue))
            console.log('The total share price of ' + stock_object.stocks[i].stockname + ' stock is ' + total)
            sum = parseInt(sum + total)
        }
        console.log('the total shares of all the stocks is ' + sum)
    }
}
var stockreport = new stockAccount()
while (1) {
    console.log('Press 1 to buy stocks ')
    console.log('Press 2 to sell shares : ')
    console.log('Press 3 to get the stock report : ')
    console.log('Press 4 to get the share values of all the stocks :')
    console.log('Press 5 to exit : ')
    var choice = prompt('Enter the choice u want to perform ')
    switch (parseInt(choice)) {
        case 1: stockreport.buy()
            break;

        case 2: stockreport.sell()
            break;

        case 3: stockreport.printstockreport()
            break;

        case 4: stockreport.valueofshares()
            break;

        case 5: process.exit()

        default: console.log('No such option ')
            break;
    }
}

