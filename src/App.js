import React from 'react';
import { FunctionComponent, ClassComponent, Timer } from './Component';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  state = {
    number: 0
  };
  add = () => {
    this.setState({ number: this.state.number + 1 });
  };
  subtract = () => {
    this.setState({ number: this.state.number - 1 });
  };
  selectName() {
    let names = ["Eric", "John", "Clara", "Chloe"];
    return names[Math.floor(Math.random() * names.length)];
  };
  render() {
    return (
      <div>
        <header className="intro">
          <img src={logo} alt="React Logo" />
          <h1>Hello React!</h1>
          <p>
            React is a JavaScript library for building user interfaces
          </p>
        </header>
        <br />
        <div className="greeting">
          <ClassComponent />
          <FunctionComponent
            name={this.selectName()}
          />
        </div>
        <br />
        <div className="app">
          <div className="numberapp">
            <h2>Little Application</h2>
            <h3>Number is: {this.state.number}</h3>
            <button onClick={this.add}>Add</button>
            <button onClick={this.subtract}>Subtract</button>
          </div>
          <br />
          <div className="timer">
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
