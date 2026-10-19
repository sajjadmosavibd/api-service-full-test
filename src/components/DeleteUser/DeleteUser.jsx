import { useContext ,useEffect,useState} from "react";
import { UserContext } from "../../contexts/UserProvider";
function DeleteUser({userId}){
const {deleteUserHandler}=useContext(UserContext);
const [controller,setController]=useState()
useEffect(()=>{
const ctrl=new AbortController();
setController(ctrl);

return()=> ctrl.abort()
},[])
    return(
        <button onClick={async()=>{ await deleteUserHandler(userId,controller)}} >
        Delete User !
        </button>
    )
}

export default DeleteUser