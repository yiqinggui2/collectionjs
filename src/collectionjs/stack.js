import Collection from './collection';

class Stack extends Collection{
  constructor() {
    let type = "stack";
    super(type);
    this.buffer = [];
  }
  
  toString() {
    return this.type;
  }
  
  size() {
    return this.buffer.length;
  }
  
  pop() {
    return this.buffer.shift();
  }
  
  push(e) {
    this.buffer.unshift(e);
  }
  
  peek() {
    if(this.buffer.size() === 0) {
      return null;
    } else {
      return this.buffer[0];
    }
  }
  
}

export default Stack;