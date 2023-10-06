import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProyectoLista from '../components/ProyectoLista';
import ProyectoForm from '../components/ProyectoForm';

const ProjectRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProyectoLista />} />
      <Route path="/crear" element={<ProyectoForm />} />
      <Route path="/editar/:id" element={<ProyectoForm />} />
    </Routes>
  );
};
export default ProjectRoute;
