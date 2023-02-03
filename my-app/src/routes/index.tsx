import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";


const MainRoutes = () =>(

  <Routes>
    <Route path="/login" element={<Login />}/>
  </Routes>
)

export default MainRoutes