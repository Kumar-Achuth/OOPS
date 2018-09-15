"use strict"
var prompt = require('prompt-sync')()
var EX = {};

/*
 * Linked List node with item object and next pointer to another node
 */
EX.StackNode = function(){
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function(){
	var head = null;
	var size = null;
	
	/**
	 * Push function
	 * itereate through the list and then add the node to the last node in the list
	 */
	this.pushToStack = function(item){
		var node = new EX.StackNode();
		node.item = item;
		node.next = null;
		if(size < 1 && head === null){
			head = node;
			head.next = null;
			size = 1;
		}else{
			var current = head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}
	/**
	 * Pop Function
	 * Iterate through the list and grab the last item and remove it from list
	 */
	this.popFromStack = function(){
		var current = head;
		if(size === 0){
			return;
		}
		if(size === 1){
			head = null;
			size = 0;
			return current;
		}
		var prev = current;  // 543
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
		size -= 1;
		return current;
	}
	// Function to check if stack is empty
	this.isStackEmpty = function(){
		return (size < 1) ? true : false;
	}
	// Function to get top item of the stack
	this.stackTop = function(){
		var current = head;
		if(size > 0 && head !== null){
			while(current.next !== null){
				current = current.next;
			}
			return current.item;
		}else{
			console.log("There is no item in the stack");
			return null;
		}
	}
	this.printStack = function(){
		var current = head;
		while(current.next !== null){
            //console.log("Item "+current.item + " is on the stack.");
            console.log(current.item)
			current = current.next;
		}
		console.log(current.item );
	}
}
var stack = new EX.LinkedStack();
class StockAccount 
{
    Purchase(count)
    {
        for(var i=0;i<count;i++)
        {
            var name = prompt('Enter the name of the stock : ');
            var number = prompt('Enter the number of shares : ');
            var price = prompt('Enter the Shareprice : ');
            var Stocks={
                Stockname : name, 
                Share  : number,
                Shareprice : price
            }
            stack.pushToStack(Stocks);
            //console.log(l.printList());
            console.log("Successfully purchased the Stock ");
            var date=new Date();
            var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            console.log("the time of purchase is : "+time);
        }
        stack.printStack()
    }
Sale(count)
{
   // stack.printStack()
    for(var i=0;i<count;i++)
        {
            stack.popFromStack();           
        }
        var date=new Date();
            var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            console.log("The time of sale is : " +time);
}
}
var st = new StockAccount()
var count=prompt("Enter the number of stocks to be purchased : ");
st.Purchase(count)
 var count = prompt('Enter the number of stocks to be deleted : ')
st.Sale(count)
stack.printStack()