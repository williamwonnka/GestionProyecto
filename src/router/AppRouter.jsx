import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GestionRoutes } from "../gestion/routes/GestionRoutes"
import ProjectRoute from '../project/routes/ProjectRoutes';




export const AppRouter = () => {

  return (
    <Routes>
      {/* Routes accessible without logging in */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Protected routes (accessible only after authentication) */}
      <Route path="/*" element={<GestionRoutes />} />
      <Route path="/proyecto/*" element={<ProjectRoute />} />
    </Routes>
  )
}
