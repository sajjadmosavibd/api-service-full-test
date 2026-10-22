 
 const baseURL="https://react-test-bb09f-default-rtdb.firebaseio.com"
 
 const getUsers=async(controller)=>{
    const response=await fetch(`${baseURL}/users.json`,{
        signal:controller.signal
    });
    if(!response.ok){
        throw new Error("Loading User Failed");
    }
    const data=await response.json();
    return data;
 }


 const addUser=async(user,controller)=>{
    const response=await fetch(`${baseURL}/users.json`,{
        signal:controller.signal,
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    });
    if(!response.ok){
        throw new Error("Add User Failed");
    }
     return;
 }


 const deleteUser=async(userId,controller)=>{
    const response= await fetch(`${baseURL}/users/${userId}.json`,{
        signal:controller.signal,
        method:"DELETE"
    });
    if(!response.ok){
        throw new Error("delete user failed");
    }
    return
 }

 const getUserById=async(controller,userId)=>{
    const response= await fetch(`${baseURL}/users/${userId}.json`,{
        signal:controller.signal,
    })
    if(!response.ok){
        throw new Error("find user failed")
    }
    const data=await response.json();
    return data
 }

 const editUser=async(controller,user,userId)=>{
    const response= await fetch(`${baseURL}/users/${userId}.json`,{
        signal:controller.signal,
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
        method:"PUT"
    })
    if(!response.ok){
        throw new Error("edit user failed")
    }
 }

 export {getUsers , addUser , deleteUser ,getUserById , editUser}