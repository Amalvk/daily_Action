import React from 'react';
class CounterContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.increment = this.increment.bind(this);
    }
   
    increment() {
      this.setState((oldState) => {
        return { count: oldState.count + 1 };
      });
    }
   
    render() {
      return <Counter count={this.state.count} increment={this.increment} />;
    }
  }
   
  class Counter extends React.Component {
    render() {
      return (
        <div>
          <p>The count is {this.props.count}.</p>
          <button onClick={this.props.increment}>Add 1</button>
        </div>
      );
    }
  }
  export default CounterContainer