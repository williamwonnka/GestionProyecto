import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from '../components/UserList'; 
import RegistroUsuario from '../components/RegistroUsuario'; 

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/list" element={<UserList />} />
      <Route path="/admin/registro" element={<RegistroUsuario />} />
    </Routes>
  );
};

export default AdminRoutes;
