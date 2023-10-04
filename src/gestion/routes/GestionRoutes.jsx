import { Navigate, Route, Routes } from "react-router-dom"
import { GestionPage } from "../pages/GestionPage"

export const GestionRoutes = () => {
  return (
    <Routes>
        <Route path="/Gestion/Dashboard" element= { <GestionPage />} />
        <Route path="/*" element={ <Navigate to="auth/Login" />} />
    </Routes>
  )
}
