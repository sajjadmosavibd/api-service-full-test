import { createContext, useContext ,useState} from "react"
import { addUser , getUsers , deleteUser} from "../services/apiService";
function UserProvider({children}){

    const [newUsername,setNewUsername]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [newAge,setNewAge]=useState(0);
    const [newGender,setNewGander]=useState("");
    const [addUserError,setAddUserError]=useState([]);
    const error={}
    const checkValues=()=>{
        
        if([...newUsername].length < 8){
            error.username="username must contains atleast 8 character";
            
        }
        if([...newPassword].length  < 10){
            error.password="password must be atleast 10 character"
        }
        if(!newGender){
            error.gender="you must select a gender";
        }
        if(newAge < 18){
         error.age="you must be older than 18";
        }
        setAddUserError(error);
        
        
    }


     const setNewUser=()=>{
    const user={
        username:newUsername,
        password:newPassword,
        age:newAge,
        gender:newGender
    }
    return user
 }
 const clearInputs=()=>{
    setNewAge(0);
    setNewUsername("");
    setNewPassword("");
    setNewGander("")
 }

    const submitHandler=async(event,controller)=>{
        event.preventDefault();
        checkValues()
        if(Object.keys(error).length < 1){
            try{
                await addUser(setNewUser(),controller)
                clearInputs();
            }catch(err){
                if(err.name==="AbortError"){
                    return
                }
                console.log(err.message);
            }
        }

    }




    const getUsersService=async(controller)=>{
        try{
        const users=await getUsers(controller);
        return users
        }catch(err){
            if(err.name==="AbortError"){
                return;
            }
            console.log(err)
        }
    }

    const deleteUserHandler=async(userId,controller)=>{
        try{
            await deleteUser(userId,controller)
        }catch(err){
            if(err.name==="AbortError"){
                return
            }
            console.log(err.message)
        }
    }
    
    return(
         <UserContext.Provider value={{deleteUserHandler,getUsersService,newUsername,newPassword,newAge,newGender,checkValues,submitHandler,setNewUsername,setNewPassword,setNewAge,setNewGander,addUserError}}>
{children}
    </UserContext.Provider>)
}



const UserContext=createContext();

export default UserProvider;
export {UserContext}