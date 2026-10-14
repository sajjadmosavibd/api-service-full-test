import { BrowserRouter, Link,Route,Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
function App() {


  return (
    <>
  
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<Main />} >

<Route index element={<Home />} />
      <Route  path="AddUser" element={<AddUser />} />
      <Route path="UserLIst" element={<UserList />} />

      </Route>
      
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
