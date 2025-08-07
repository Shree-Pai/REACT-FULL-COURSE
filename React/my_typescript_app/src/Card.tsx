
interface CardProps{
    children: React.ReactNode;
    style?:React.CSSProperties;
}

const Card: React.FC<CardProps>=({children,style})=>{

    return(
        <div style={{padding:'20px',
        border:'1px solid gray',
        borderRadius:'8px',
        boxShadow:' 10px 30px rgba(0,0,0,0.5)',...style}}>
            {children}
        </div>
    )
}

export default Card;