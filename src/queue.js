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
  constructor()
  {
    this.value=value;
    this.next=null;
  }
}

class Queue
{
  
  constructor(value)
  {
    this.head = null;
    this.length = 0;
  }

  // добавитть новый узел в конец списка
  add( value ) 
  {
    if( this.length === 0 ) this.head=new Node(value);
    else
    {
      // движемся от головы к последнему элементу
      let current = this.head; 

      while( current.next )
        current=this.next;
    
      current.next = new Node(value);
    }

    this.length++; 
  }

  insert(value, position)
  {
    if( position < 0 || position > this.length ) return false;
    
    let node = new Node(value);
    
    if( position === 0 )
    {
      node.next=this.head;
      this.head=node;
    }
    else
    {
      // станем в голове списка
      let current = head;
      let prev = null;
      let index = 0;

      while( index < position)
      {
        prev = current;
        current=current.next;
        index++;
      }

      prev.next=node;
      node.next=current;

    }
    
    this.length++;
  }

  get(position)
  {
    if( position < 0 || position >= this.length ) return;
    
    let current = head;
    let index = 0;
    
    while( index < position)
    {
      current=current.next;
      index++;
    }

    return current.value;
  }
  
  removeAt(position)
  {
    if( position < 0 || position >= this.length ) return;

    let current = this.head;

    if( position === 0)
    {
      this.head=current.next;
    }
    else
    {
      let prev=null;
      let index=0;
      while( index < position)
      {
        prev = current;
        current=current.next;
        index++;
      }
      prev.next=current.next;
    }
    this.length--;

    return current.value;
  }


  
  getUnderlyingList()
  {
    return this.head;
  }

  enqueue( value )
  {
    let new_node = new ListNode( value );

    if( this.head === null )
    {
      this.head = new_node;
      //this.tail = this.head;
      
      return;
    }

    //this.tail.next = new_node;
    //this.tail = new_node;
  }

  dequeue()
  {
    let first_node = this.head;

    this.head = this.head.next;

    return first_node.value;
    
  }
}

module.exports = {
  Queue
};
