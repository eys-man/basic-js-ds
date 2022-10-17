const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {

  // root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }

  // add(/* data */) {
    // throw new NotImplementedError('Not implemented');
    //remove line with error and write your code here
  // }

  // has(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }

  // find(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }

  // remove(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }

  // min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }

  // max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }
// }
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor()
  {
    this.root = null;
  }

  root()
  {
    return this.data;
  }

  add( data )
  {
    // начинаем добавлять с корня
    this.root = add_data(this.root, data);

    function add_data( node, data)
    {
      if( !node ) return new Node(data); // если перешли на узел, которого нет, добавить его

      if( node.data === data ) return node; // если такой элемент уже есть

      if( data < node.data )
        node.left = add_data( node.left, data);
      else
        node.right = add_data(node.right, data);

      return node;
    }
  }

  has( data )
  {
    return search_data( this.root, data);

    function search_data(node, data)
    {
      if( !node ) return false; // если поиск не увенчался успехом

      if( node.data === data ) return true; // да, такой есть

      if (node.data < data)
        return search_data(node.right, data);
      else
        return search_data(node.left, data);
    }
   
  }

  find( data )
  {
    if( this.root === null ) return null;
    
    let current = this.root;

    while( current != null )
    {
      if( data > current.data )
      {
        current=current.right;
        continue;
      }
      else if( data < current.data )
      {
        current=current.left;
        continue
      }
      else return current;
    }

    return null;
  }

  remove( data )
  {
    this.root = remove_node(this.root, data);

    function remove_node(node, data)
    {
      if( !node ) return null; // если нет узла с таким значением, то и не надо ничего удалять

      if( data < node.data )
      {
        node.left = remove_node(node.left, data);
        return node;
      }
      else if( data > node.data )
      {
        node.right = remove_node(node.right, data);
        return node;
      }
      else // т.к. равен, надо его удалить
      {
        if( !node.left && !node.right ) // это лист, т.к. потомков нет
          return null;

        if( !node.left ) // нет левого потомка
        {
          node=node.right;
          return node;
        }

        if( !node.right ) // нет правого потомка
        {
          node=node.left;
          return node;
        }

        // поиск минимального в правой ветке
        let min_right = node.right; 
        // в самый низ налево, т.е. к минимальному в этой ветке
        while( min_right.left )
          min_right = min_right.left
        
          node.data = min_right.data;
          node.right = remove_node(node.right, min_right.data);

          return node;
      }
    }
  }

  min()
  {
    if( !this.root ) return;

    let node = this.root;
    while( node.left )
      node=node.left;
   
    return node.data;
  }

  max()
  {
    if( !this.root ) return;

    let node = this.root;
    while( node.right )
      node=node.right;
    
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};