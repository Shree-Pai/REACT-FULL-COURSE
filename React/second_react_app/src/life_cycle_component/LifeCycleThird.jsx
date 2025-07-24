import React,{Component} from "react";
import TimerComponent from "./TimerComponent";

class LifeCycleThird extends Component{
    constructor(){
        super();
        this.state={
            showTimer:true
        };
        console.log("Constructor Called...");
    }
    toggleTimer=()=>{
        this.setState({showTimer: !this.state.showTimer});
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleTimer}>Toggle Timer</button>
                {this.state.showTimer && <TimerComponent/>}
            </div>
        )
    }
}

export default LifeCycleThird;