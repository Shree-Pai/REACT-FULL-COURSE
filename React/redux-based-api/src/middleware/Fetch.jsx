import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchPosts } from "./Action"

function Fetch(){

    const {posts,loading,error} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    },[dispatch]);

    if(loading){
        return <p>Loading posts Details</p>
    }
    if(error){
        return <p>Error : {error}</p>
    }

    return(
        <div>
            <h2>Posts from API : </h2>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>
                        <strong>{post.title}</strong> : {post.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch;