import React,{Component} from "react";

class LifeCycleFirst extends Component{

    constructor(props)
    {
        super(props);
        console.log("ChildComponent: Constructor");

        this.state={
            count:0
        };
    }
    

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps() method called...");
        return null;
    }


    render(){
        console.log("render() method Called...");
        return(
            <div>
                <h1>React Life Cycle Demo </h1>
                <h3>Count:{this.state.count}</h3>
                <button onClick={()=>this.setState({cont:this.state.count+1})}>Toggle Child Component</button>
            </div>
        )
    }


    componentDidMount(){
        console.log("ChildComponent: component Did Mount");
    }

}
export default LifeCycleFirst;