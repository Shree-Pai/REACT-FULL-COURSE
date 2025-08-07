
interface MyProps{
    name:string;
}

//const PropComp:React.FC<MyProps>=({name})=>{

const PropComp=(props:MyProps)=>{   //without destructuring
    return(
        <div>
             <h2>PropComp in Typescript : </h2>
            <p>Name : {props.name}</p>
        </div>
    )
}

export default PropComp;