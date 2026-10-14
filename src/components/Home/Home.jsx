import { Link } from "react-router-dom"
function Home(){

    return(
    <>
    
    <Link to="/AddUser">Add New User!</Link>
     <Link to="UserList">Show User List!</Link>
    </>
    )
}

export default Home