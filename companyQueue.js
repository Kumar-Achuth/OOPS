"use strict"
// var utility1 = require('./linkedList')
  // var utility2 = require('./queue.js')
var prompt = require('prompt-sync')();
//var q = new utility2();
var prompt = require('prompt-sync')();
var d = new Date();
class Node {
    constructor(data, next = null) {
       // this.next = null;
        this.data = data,
            this.next = next
    }
}
class Queue {
    constructor() {
        this.tail = null;
        this.head = null;

    }


    enqueue(item) {
        let node = new Node(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }


    dequeue() {
        if (!this.head) {
            return 'No item'
        } else {
            let itemToPop = this.head
            this.head = this.head.next
            return itemToPop
        }
    }

    len() {
        let current, counter
        [current, counter] = [this.head, 0]
        while (current) {
            counter++
            current = current.next
        }
        return counter;
    }

    peek() {
        if (this.head) {
            return this.head.data
        } else {
            return 'Empty'
        }
    }

    isEmpty() {
        return this.len() < 1;
    }

    printQ() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}
 var q= new Queue()
class StockAccount {

    buy(count) {
        for (let i = 0; i < count; i++) {

            var name = prompt('Enter the name : ');
            var number = prompt('Enter the number of shares : ');
            var price = prompt('Enter the price : ');
            var date = (d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear())
            var time = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())


            let user = {
                Stockname: name,
                Sharenumber: number,
                Shareprice: price,
                date: date,
                time: time
            };

            console.log('Successfully purchased the stock on ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

            q.enqueue(user)
        }
    }

    sell(count) {
        for (let i = 0; i < count; i++) {

            var res = q.dequeue();
            console.log(res);
        }
    }
    stockList() {
        q.printQ();
    }
}
/*var stock = new StockAccount();
var count = prompt('Enter no of stocks to be purchased : ')
stock.buy(count);
stock.stockList();
count = prompt('Enter no of stocks to be sold : ')
stock.sell(count);
stock.stockList();*/

var stock = new StockAccount();
while (1) {
    console.log('1.Buy Stocks')
    console.log('2.Sell Stocks')
    console.log('3.Print Stock list')
    console.log('4.Exit')
    var choice = prompt('What do u want to do ?')
    switch (choice) {
        case '1': var count = prompt("enter the number of stocks to be purchased: ");
            stock.buy(count);
            break;
        case '2': var count = prompt("enter the number of stocks to be sold: ");
            stock.sell(count)
            break;

        case '3': //stock.stockReport();
            stock.stockList();
            break;

        case '4': process.exit()

        default: console.log('No Such Option ')
            break;
    }
}
