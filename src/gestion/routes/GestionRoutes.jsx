import { Navigate, Route, Routes } from "react-router-dom"
import { GestionPage } from "../pages/GestionPage"
import { SprintListPage } from "../pages/SprintListPage"
import { SprintPage } from "../pages/SprintsPage"

export const GestionRoutes = () => {

  const userData = JSON.parse(sessionStorage.getItem('userData'))

  if(userData){
    return (
      <Routes>
          <Route path="/Gestion/Dashboard" element= { <GestionPage />} />
          <Route path="/Gestion/Dashboard/SprintList" element= { <SprintPage />} />
          <Route path="/Gestion/Dashboard/SprintListPage/:projectId" element= { <SprintListPage/>} />
          
      </Routes>
    )
  }
  else{
    <Routes>
      <Route element={ <Navigate to="auth/Login" />} />
    </Routes>
  }
  
}
