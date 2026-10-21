import { useParams } from "react-router-dom"
import { useEffect ,useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { findEditingUser , editUser } from "../../services/apiService";
function EditUserPage(){
const userId=useParams().id;
const {editedAge,editedGender,editedPassword,editedUsername,setEditedAge,setEditedGender,setEditedPassword,setEditedUsername}=useContext(UserContext)



const setUserInfo=()=>{
 const user={
    username:editedUsername,
    password:editedPassword,
    gender:editedGender,
    age:editedAge,
 }
 return user;
}

useEffect(() => {
    const ctrl = new AbortController();
   
    const findUser = async () => {
        try {
            
            const data = await findEditingUser(ctrl, userId);
              console.log(data)
            setUserInfo(data);
            setEditedUsername(data.username)
            setEditedPassword(data.password)
            setEditedGender(data.gender)
            setEditedAge(data.age)
            
        } catch (error) {
            if (error.name === "AbortError") {
                return;
            }
            console.error(error.message)
        }
    };

    findUser();
    
    return () => ctrl.abort();
}, [userId]);


    return(
        <form onSubmit={async(event)=>{event.preventDefault();
            try{
                const user=setUserInfo();
                const ctrl = new AbortController();
            await editUser(ctrl,user,userId)
            }catch(err){
                console.log(err.message)
            }
        }}>
            <label htmlFor="edit-username"> username : </label>
            <input value={editedUsername} onChange={(event)=>setEditedUsername(event.target.value)} id="edit-username"  />
            <br />
            <br />
      
            <label htmlFor="edit-password"> password : </label>
            <input value={editedPassword}  onChange={(event)=>setEditedPassword(event.target.value)}  id="edit-password"  />
            <br />
            <br />
       
            <label htmlFor="edit-gender"> gender : </label>
            <input onChange={(event)=>setEditedGender(event.target.value)} value={editedGender} id="edit-gender"  />
            <br />
            <br />
       
            <label htmlFor="edit-age"> age : </label>
            <input onChange={(event)=>setEditedAge(event.target.value)} value={editedAge} id="edit-age"  />
            <br />
            <br />
            <button type="submit">submit ! </button>
        </form>
    )
}

export default EditUserPage