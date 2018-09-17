var fs = require('fs')
var prompt = require('prompt-sync')()
var sum = 0
var number_of_stocks = prompt('Enter the number of stocks : ')
fs.readFile('./inventory.json', 'utf-8', function (err, inventory) {
	if (err) throw err

	var stock_object = JSON.parse(inventory)
	for (var i = 0; i <= number_of_stocks - 1; i++) {
		var name = prompt("Enter the stock name : ")
		var share = prompt('Enter the share value : ')
		var price = prompt('Enter the stock price : ')

		stock_object.stock.push({
			stockName: name,
			sharePrice: share,
			stockPrice: price,
		})

		var value = parseInt(share * price)
		console.log('The value of the total shares is : ' + value)
		sum = sum + value
		fs.writeFile('./inventory.json', JSON.stringify(stock_object), 'utf-8', function (err) {
			if (err) throw err

		}
		)
	}
	console.log(stock_object)
	console.log('The total share price  of all the stocks is ' + sum)
	var option = prompt('Enter 0 if u want to delete any stocks :')
	if (option == 0) {
		var choice = prompt('Enter the index in which u want to delete the stock : ')
		delete stock_object.stock[choice]
	}
	else {
		console.log('Thank You')
	}
	console.log(stock_object)
	fs.writeFile('./inventory.json', JSON.stringify(stock_object), 'utf-8', function (err) {
		if (err) throw err
	}
	)
})

