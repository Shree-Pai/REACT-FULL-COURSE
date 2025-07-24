import React, { Component } from "react";
import TimerComponent from "./TimerComponent";

class LifeCycleThird extends Component {
    constructor() {
        super();
        this.state = {
            showTimer: true,
            appState: Math.random()
        };
        console.log("ParentComponent: Constructor");
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ appState: Math.random() });
            console.log("ParentComponent: appState updated");
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    toggleTimer = () => {
        this.setState({ showTimer: !this.state.showTimer });
    };

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <p>App State: {this.state.appState.toFixed(1)}</p>
                <button onClick={this.toggleTimer}>Toggle Timer</button>
                {this.state.showTimer && <TimerComponent />}
            </div>
        );
    }
}

export default LifeCycleThird;
