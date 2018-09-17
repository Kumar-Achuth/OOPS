"use strict"
class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head == null;
        this.size == 0;
    }
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }
    size_of_list() {
        console.log(this.size);
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }
    sortList() {

        var swap;
        var current = this.head;
        var current1 = current.next;
        var n = this.size;

        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n - i - 1; j++) {

                if (parseInt(current1.element) < parseInt(current.element)) {

                    swap = current.element;

                    current.element = current1.element;

                    current1.element = swap;

                }

                if (current1.next != null) {

                    current = current1;

                    current1 = current1.next;

                }

            }

            current = this.head;

            current1 = current.next;
        }

        console.log('List sorted');
    }

    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
}
module.exports=LinkedList