import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProyectoForm() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [descripcionProyecto, setDescripcionProyecto] = useState('');

  useEffect(() => {
    if (id) {
      //cargar los datos del proyecto con el ID proporcionado
      //Esto simula la carga de datos desde una API o una base de datos
      const proyectoEncontrado = proyectos.find((proyecto) => proyecto.id === parseInt(id));
      if (proyectoEncontrado) {
        setProyecto(proyectoEncontrado);
        setNombreProyecto(proyectoEncontrado.nombre);
        setDescripcionProyecto(proyectoEncontrado.descripcion);
      }
    }
  }, [id]);

  const guardarCambios = () => {
    // guardar los cambios en el proyecto (crear o editar)
    // Esto simula la actualización de datos en una API o una base de datos
    if (id) {
      const proyectosActualizados = proyectos.map((p) =>
        p.id === parseInt(id) ? { ...p, nombre: nombreProyecto, descripcion: descripcionProyecto } : p
      );
      setProyectos(proyectosActualizados);
    }
  };

  return (
    <div>
      <h1>Proyecto</h1>
      <div className="mb-3">
        <label htmlFor="nombreProyecto" className="form-label">Nombre del Proyecto</label>
        <input
          type="text"
          className="form-control"
          id="nombreProyecto"
          value={nombreProyecto}
          onChange={(e) => setNombreProyecto(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcionProyecto" className="form-label">Descripción del Proyecto</label>
        <textarea
          className="form-control"
          id="descripcionProyecto"
          value={descripcionProyecto}
          onChange={(e) => setDescripcionProyecto(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={guardarCambios}>Guardar Cambios</button>
    </div>
  );
}

export default ProyectoForm;
