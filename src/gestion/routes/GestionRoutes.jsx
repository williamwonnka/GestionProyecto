import { Navigate, Route, Routes } from "react-router-dom"
import { GestionPage } from "../pages/GestionPage"

export const GestionRoutes = () => {

  const userData = JSON.parse(sessionStorage.getItem('userData'))

  if(userData){
    return (
      <Routes>
          <Route path="/Gestion/Dashboard" element= { <GestionPage />} />
          
      </Routes>
    )
  }
  else{
    <Routes>
      <Route element={ <Navigate to="auth/Login" />} />
    </Routes>
  }
  
}
