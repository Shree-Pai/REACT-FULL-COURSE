import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUsers } from "./userAction"

function Fetch(){

    const {users,loading,error} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch]);

    if(loading){
        return <p>Loading User Details</p>
    }
    if(error){
        return <p>Error : {error}</p>
    }

    return(
        <div>
            <h2>Users from API : </h2>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        <strong>{user.name}</strong> : {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch;