import Collection from './collection';

class Queue extends Collection{
  constructor() {
    let type = "queue";
    super(type);
    this.buffer = [];
  }
  
  size() {
    return this.buffer.length;
  }
  
  enqueue(e) {
    this.buffer.push(e);
  }
  
  dequeue() {
    if(this.size() === 0) {
      return null;
    } else {
      return this.buffer.shift();
    }
  }
  
  peek() {
    if(this.size() === 0) {
      return null;
    } else {
      return this.buffer[0];
    }
  }
  
}

export default Queue;