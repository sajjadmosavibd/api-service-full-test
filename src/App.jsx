import { BrowserRouter, Link,Route,Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
function App() {


  return (
    <>
     <BrowserRouter>
     <Link to="/AddUser">Add New User!</Link>
     <Link to="UserList">Show User List!</Link>
     <Routes>

      <Route path="/AddUser" element={<AddUser />} />
      <Route path="/UserLIst" element={<UserLIst />} />
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
