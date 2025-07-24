import React,{Component} from "react";

class LifeCycleSecond extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
        console.log("Constructor() method is called...");
        
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps() method called...");
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate() method called...");
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate() method called...");
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate() method called...");
    }
    componentDidMount(){
        console.log("ComponentDidMount() called...");
    }
    render(){
        console.log("render() method called...");
        return(
            <div>
                <h1>Updating Phase:</h1>
                <h2>Value:{this.state.value}</h2>
                <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
            </div>
        )
    }
}
export default LifeCycleSecond;