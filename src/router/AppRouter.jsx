import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GestionRoutes } from "../gestion/routes/GestionRoutes"



export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro  */}
        <Route path="/auth/*" element= { <AuthRoutes/> } />

        {/* After auth page */}
        <Route path="/*" element={ <GestionRoutes/>}/>
    </Routes>
  )
}
