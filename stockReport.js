"use strict"
var total = 0
var prompt = require('prompt-sync')()
var fs = require('fs');
var stock = fs.readFileSync('stock.json')

var StockReport = JSON.parse(stock);

for (var i = 0; i <= StockReport.stock.sharevalue.length - 1; i++) {
    var value = parseInt(StockReport.stock.sharevalue[i] * StockReport.stock.shareprice[i])
    console.log('Total share value of ' + StockReport.stock.name[i] + ' is  : ' + StockReport.stock.sharevalue[i] * StockReport.stock.shareprice[i] + ' rs ')
    total = total + value
}
console.log('The totak stock value of all the companies is : ' + total)


