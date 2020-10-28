import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tickTockClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tickTockClock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div className="Clock">
        <h1> The time is {this.state.time}</h1>
      </div>
    );
  }
}
