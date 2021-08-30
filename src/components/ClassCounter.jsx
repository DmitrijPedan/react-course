import React from "react";

class ClassCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({...this.state, count: this.state.count + 1});
  }

  decrement() {
    this.setState({...this.state, count: this.state.count - 1});
  }


  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
      )
  }

}

export default ClassCounter;
