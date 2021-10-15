const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;    
  }

  enqueue(value) {
    let node = new Node(value),
    currentNode = this.head;

    // 1-ый случай: пустой список
    if (!currentNode) {
        this.head = node;
        this.length++;
        return node;
    }

    // 2-ой случай: непустой список
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;
    return node;
  }

  dequeue() {
    let currentNode = this.head;
    let r = currentNode.value;

    // 1-ый случай: пустой список
    if (!currentNode) {
        return null;
    }
    // 2-ой случай: непустой список
    else {    
     this.head = currentNode.next;
     this.length--;  
     return r;                  
    }
  }
    
}
/*
let q = new Queue();
q.enqueue(7);
q.enqueue(6);
q.enqueue(5);
console.log(q.getUnderlyingList());

console.log(q.dequeue());
console.log(q.getUnderlyingList());
*/