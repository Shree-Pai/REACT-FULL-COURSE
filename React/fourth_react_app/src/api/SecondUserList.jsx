import { useState } from "react";

function SecondUserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErrors] = useState(null);


    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong...");
            }
            return response.json();
        })
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            setErrors(error.message);
            setLoading(false);
        })
    }
    // if (loading) {
    //     return <p>Loading Users Details... Please wait some Time...</p>
    // }
    if (error) {
        return <p>Error : {error}</p>
    }

    return (
        <div>
            
            <h1>User List</h1>
            <button onClick={fetchData}>Fetch User List</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SecondUserList;