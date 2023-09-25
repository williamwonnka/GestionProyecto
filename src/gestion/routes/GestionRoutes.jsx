import { Navigate, Route, Routes } from "react-router-dom"
import { GestionPage } from "../pages/GestionPage"

export const GestionRoutes = () => {
  return (
    <Routes>
        <Route path="/" element= { <GestionPage />} />
        <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
