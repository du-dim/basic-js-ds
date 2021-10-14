const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null; 
}

  root() {   
      return this.rootNode;    
  }

  add(data) {
   
    const newNode = new Node(data);
    if (!this.rootNode) {
        this.rootNode = newNode;
        return;
    } 
    let currentNode = this.rootNode;
    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;          
        }
        currentNode = currentNode.left;        
      }
      else {
        if (!currentNode.right) {
          currentNode.right = newNode;   
          return;       
        }
        currentNode = currentNode.right;        
      }
    }   
  }

  has(data) {
    
    if (!this.rootNode) return false; 
    let currentNode = this.rootNode;

    while(currentNode) {
      if(data === currentNode.data) return true;
      
      else if(data < currentNode.data) {
        if (!currentNode.left) {
          return false;          
        }
        currentNode = currentNode.left;        
      }
      
      else {
        if (!currentNode.right) {
          return false;          
        }
        currentNode = currentNode.right;       
      }
    }
  }
  

  find(data) {
    if (!this.rootNode) {
        return null;
    } 
    let currentNode = this.rootNode;
    while(currentNode) {
      if(data === currentNode.data) 
      return currentNode;
      if(data < currentNode.data) {
        if (!currentNode.left) {
          return null;          
        }
        currentNode = currentNode.left;        
      }

      else{
        if (!currentNode.right) {
          return null;          
        }
        currentNode = currentNode.right;
      }
        
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data); 
    
    function removeNode(node, data) {
      if (!node) {
          return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
      } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
      } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
      // если данные такие как данные корня, удаляем узел
      } else {
          // удаляем узел без потомков (листовой узел (leaf) или крайний)
          if (!node.left && !node.right) {
              node = null;
              return node;
          }
          // удаляем узел с одним потомком
          if (!node.left) {
              node = node.right;
              return node;
          } else if(!node.right) {
              node = node.left;
              return node;
          }
          // удаляем узел с двумя потомками
          // min правого поддерева хранится в новом узле
          let newNode = node.right;
          while(newNode.left) {
            newNode = newNode.left;
          }
          node.data = newNode.data;
          node.right = removeNode(node.right, newNode.data);
          return node;
      }
    }
  }
  


  min() {   
    if (!this.rootNode) {
      return null;
    }
    
    let currentNode = this.rootNode;
    while(currentNode.left) {
      currentNode = currentNode.left; 
      }
    return currentNode.data;
  }



  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while(currentNode.right) {
      currentNode = currentNode.right;  
    }            
    return currentNode.data;
  }

}
/*
const tree = new BinarySearchTree();
tree.add(7);
tree.add(3);
tree.add(6);
tree.add(9);
tree.add(8);
tree.add(1);
tree.add(14);
tree.add(10);
tree.add(16);
tree.remove(9);

console.log(tree);
console.log(tree.has(8));
console.log(tree.has(2));

console.log(tree.find(8));
console.log(tree.find(2));
console.log(tree.min());
console.log(tree.max());
*/