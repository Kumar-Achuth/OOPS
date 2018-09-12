/*"use strict"

var utility = require('/home/bridgeit/Documents/kumar/oops/utility/utility.js')
class StockReport
{
    constructor(stockname,stockshare,stockprice)
    {
        this.stockname=stockname
        this.stockshare=stockshare
        this.stockprice=stockprice
    }
}
var stock1  = new StockReport("Google",100,500000)
console.log(stock1)
var Total_stock1_value = parseInt(stock1.stockprice*stock1.stockshare)
console.log('The total value of Google is ' +Total_stock1_value+ ' $ ')

var stock2  = new StockReport("Yahoo",20,100000)
console.log(stock2)
var Total_stock2_value = parseInt(stock2.stockshare*stock2.stockprice)
console.log('The total value of Yahoo is ' +Total_stock2_value+ ' $ ')

var stock3  = new StockReport("Microsoft",50,1000000)
console.log(stock3)
var Total_stock3_value = parseInt(stock3.stockprice*stock3.stockshare)
console.log('The total value of Microsoft is ' +Total_stock3_value+' $')

var Total_Stocks_Value = parseInt(Total_stock1_value + Total_stock2_value + Total_stock3_value )
console.log('The total value of all the stocks is : ' +Total_Stocks_Value+' $')
 // */
"use strict"
var total =0
var prompt = require('prompt-sync')()
var fs = require('fs');
var stock= fs.readFileSync('stock.json')

     var StockReport = JSON.parse(stock);
     
    for ( var i=0; i <=StockReport.stock.sharevalue.length-1;i++)
    {
var value=  parseInt(StockReport.stock.sharevalue[i]*StockReport.stock.shareprice[i])
console.log('Total share value of ' + StockReport.stock.name[i]+ ' is  : ' +StockReport.stock.sharevalue[i]*StockReport.stock.shareprice[i]+ ' rs ' )
total = total + value     
}
console.log('The totak stock value of all the companies is : ' +total)
    

