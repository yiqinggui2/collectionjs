import Collection from './collection';

class Stack extends Collection{
  constructor() {
    let type = "stack";
    super(type);
    this.buffer = [];
  }
  
  size() {
    return this.buffer.length;
  }
  
  pop() {
    if(this.size() === 0) {
      return null;
    } else {
      return this.buffer.shift();
    }
  }
  
  push(e) {
    this.buffer.unshift(e);
  }
  
  peek() {
    if(this.size() === 0) {
      return null;
    } else {
      return this.buffer[0];
    }
  }
  
}

export default Stack;