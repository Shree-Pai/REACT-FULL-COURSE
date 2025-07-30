import { useParams } from 'react-router-dom';
import User1 from './User1';
import User3 from './User3';
import User2 from './User2';

function User({}){
    const { userName } = useParams();
    return(
        <div>
            {/* <h2>User Component:</h2>
            <p>This is User Component created to learn react routing:</p>
            <h3>Welcome : {userParams}</h3> */}
            {userName === "sachin" ? <User2 /> : userName === "shree" ? <User3 /> : userName === "ram" ? <User1 /> : <h2>User not found</h2>}
        </div>
    )
}

export default User;