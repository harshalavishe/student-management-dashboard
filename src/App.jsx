import AddUser from "./AddUser.jsx";
import ShowUser from "./ShowUser.jsx";
import UserDetail from "./UserDetail.jsx";
import {Routes,Route} from "react-router-dom";
import './App.css'

function App() {
 
  return (
    <>
   <Routes>
        <Route path="/" element={<ShowUser />} />
        <Route path="/users" element={<ShowUser />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </>
  )
}
export default App
