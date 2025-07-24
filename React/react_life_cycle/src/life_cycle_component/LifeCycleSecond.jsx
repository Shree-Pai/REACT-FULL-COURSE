import React,{Component} from "react";

class LifeCycleSecond extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
        console.log("ChildComponent: Constructor");
        
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps() method called...");
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("ChildComponent: should Component Update");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate() method called...");
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("ChildComponent: component Did Mount Update");
    }
    componentDidMount(){
        console.log("ChildComponent: component Did Mount");
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