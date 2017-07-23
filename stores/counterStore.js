import Store from './Store';

class CounterStore extends Store {
  constructor(){
    super(0);
  }

  increment(){
    let counter = this.getState();
    this.setState(++counter);
  }

  decrement(){
    let counter = this.getState();
    this.setState(--counter);
  }
}

const counterStore = new CounterStore();

export default counterStore;
