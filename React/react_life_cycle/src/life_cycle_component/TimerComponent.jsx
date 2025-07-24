// TimerComponent.js
import React, { Component } from "react";

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    console.log("ChildComponent: componentDidMount");
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("ChildComponent: componentWillUnmount");
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.seconds !== nextState.seconds;
  }

  render() {
    console.log("ChildComponent: render");
    return (
      <div>
        <h2>Timer Component:</h2>
        <h3>Timer: {this.state.seconds} seconds</h3>
      </div>
    );
  }
}

export default TimerComponent;
