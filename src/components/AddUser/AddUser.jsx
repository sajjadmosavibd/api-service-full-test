import { useContext ,useEffect , useState} from "react"
import { UserContext } from "../../contexts/UserProvider";

function AddUser(){

    const [controller,setController]=useState();
    useEffect(()=>{
        const ctrl=new AbortController();
        setController(ctrl)
    },[])
    const {newUsername,newPassword,newAge,newGender,checkValues,submitHandler,setNewUsername,setNewPassword,setNewAge,setNewGander,addUserError}=useContext(UserContext);
    return(
        <form onSubmit={()=>submitHandler(event,controller)}>
        <label  htmlFor="add-username"> enter username : </label>
        <input value={newUsername} onChange={(event)=>setNewUsername(event.target.value)} id="add-username" placeholder="sajjad ..." />
        {addUserError.username && <p>{addUserError.username}</p>}
        <br />
        <br />
        <label htmlFor="add-password"> enter password : </label>
        <input value={newPassword} onChange={(event)=>setNewPassword(event.target.value)} id="add-password" placeholder="123sd ..." />
        {addUserError.password && <p>{addUserError.password}</p>}
        <br />
        <br />
        <label htmlFor="add-gender"> enter gender : </label>
        <input value={newGender} onChange={(event)=>setNewGander(event.target.value)} id="add-gender" placeholder="male/female ..." />
        {addUserError.gender && <p>{addUserError.gender}</p>}
        <br />
        <br />
        <label htmlFor="add-age"> enter age : </label>
        <input  value={newAge} onChange={(event)=>setNewAge(event.target.value)} id="add-age" placeholder="22 ..." />
        {addUserError.age && <p>{addUserError.age}</p>}
        <br/>
        <br/>
        <button  type="submit"> Submit !</button>
        </form>
    )
}

export default AddUser