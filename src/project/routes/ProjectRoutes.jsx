import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProyectoLista from '../components/ProyectoLista';


const ProjectRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProyectoLista />} />
    </Routes>
  );
};
export default ProjectRoute;
