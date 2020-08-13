class Stack {

    constructor() 
    { 
        this.items = []; 
    }

    push(element) 
    {  
      this.items.push(element); 
    } 

    pop() 
    { 
    if (this.items.length == 0) 
        return "Stack is empty"; 
    return this.items.pop(); 
    } 
 
    top() 
    { 
    return this.items[this.items.length - 1]; 
    } 

    isEmpty() 
    {  
    return this.items.length == 0; 
    } 

    display() 
    { 
    return this.items.join(" "); 
    }
}

var stack = new Stack();

stack.push(97); 
stack.push(37); 
stack.push(21);
stack.push(7);

stack.top();

stack.display();

stack.pop();

stack.display();

stack.isEmpty();
