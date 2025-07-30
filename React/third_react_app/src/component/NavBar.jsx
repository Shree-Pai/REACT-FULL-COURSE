import { Link } from "react-router-dom"

function NavBar() {

    return(
        <div>
            <Link to="/home">Home</Link><br />
            <Link to="/profile">Profile</Link>
            {/* <li><a href="/home">Home</a></li>
            <li><a href="/profile">Profile</a></li> */}
        </div>
    )

}

export default NavBar;