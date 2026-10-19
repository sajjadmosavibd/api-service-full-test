import { BrowserRouter, Link,Route,Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import UserProvider from "./contexts/UserProvider";
function App() {


  return (
    <>
  
  <UserProvider>
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<Main />} >

<Route index element={<Home />} />
      <Route  path="AddUser" element={<AddUser />} />
      <Route path="UserLIst" element={<UserList />} />

      </Route>
      
     </Routes>
     
     </BrowserRouter>
     </UserProvider>
    </>
  )
}

export default App
