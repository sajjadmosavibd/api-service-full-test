import { useContext, useEffect ,useState} from "react"

import DeleteUser from "../DeleteUser/DeleteUser";
import { UserContext } from "../../contexts/UserProvider"
import { Link } from "react-router-dom";
function UserList(){
    const {getUsersService,isReload}=useContext(UserContext);
    const [users,setUsers]=useState([])
    const getUsers=async(controller)=>{
     const data=await getUsersService(controller);
    
  setUsers( data ? Object.entries(data) :[]);

    }
    useEffect(()=>{
        
        const ctrl=new AbortController();
       getUsers(ctrl)
       
       return()=> ctrl.abort()
        
    },[isReload])
    return(
        <>
        {users.map(user=><div key={user[0]}>
            <p>{user[1].username}</p>
            <p>{user[1].password}</p>
            <p>{user[1].age}</p>
            <p>{user[1].gender}</p>
            <Link to={`/edit/${user[0]}`}> Edti User </Link>
            
            <DeleteUser  userId={user[0]} />
            <br></br>
            <br></br>
        </div>)}
        </>
    )
}
export default UserList