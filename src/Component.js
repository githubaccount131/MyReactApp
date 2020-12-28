import React from 'react';

function FunctionComponent({ name }) {
  return (
    <div>
      <h1>I'm a function component</h1>
      <h2>Hello, {name}</h2>
    </div>
  );
}

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>I'm a Class Component</h1>
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }
  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export { FunctionComponent, ClassComponent, Timer };
