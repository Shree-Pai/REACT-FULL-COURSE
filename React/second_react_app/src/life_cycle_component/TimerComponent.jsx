import React,{Component} from "react";

class TimerComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            seconds:100
        };
    }

    componentDidMount(){
        console.log("Timer component Mounted...");
        this.interval=setInterval(()=>{
            this.setState({seconds:this.state.seconds-1});
        },1000);
    }

    componentWillUnmount(){
        console.log("Component Will Unmount. Clearing interval...");
        clearInterval(this.interval);

    }
    render(){
        return(
            <div>
                <h2>Timer Component:</h2>
                <h3>Timer : {this.state.seconds}seconds</h3>
            </div>
        )
    }
}

export default TimerComponent;