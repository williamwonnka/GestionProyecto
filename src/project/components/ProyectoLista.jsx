import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Card } from 'react-bootstrap';

function ProyectoList() {
  const [proyectos, setProyectos] = useState([]);
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [descripcionProyecto, setDescripcionProyecto] = useState('');
  const [showAgregarModal, setShowAgregarModal] = useState(false); // Modal para agregar proyectos
  const [showEditarModal, setShowEditarModal] = useState(false);   // Modal para editar proyectos
  const [editProyectoId, setEditProyectoId] = useState(null);

  const agregarProyecto = () => {
    if (nombreProyecto && descripcionProyecto) {
      const nuevoProyecto = {
        id: Date.now(),
        nombre: nombreProyecto,
        descripcion: descripcionProyecto,
      };
      setProyectos([...proyectos, nuevoProyecto]);
      setNombreProyecto('');
      setDescripcionProyecto('');
      setShowAgregarModal(false); // Cierra el modal de agregar proyectos
    }
  };

  const editarProyecto = (id) => {
    setEditProyectoId(id);
    setShowEditarModal(true); // Muestra el modal de editar proyectos
    const proyectoAEditar = proyectos.find((proyecto) => proyecto.id === id);
    setNombreProyecto(proyectoAEditar.nombre);
    setDescripcionProyecto(proyectoAEditar.descripcion);
  };

  const guardarCambiosProyecto = () => {
    const proyectosActualizados = proyectos.map((proyecto) =>
      proyecto.id === editProyectoId
        ? { ...proyecto, nombre: nombreProyecto, descripcion: descripcionProyecto }
        : proyecto
    );
    setProyectos(proyectosActualizados);
    setShowEditarModal(false); // Cierra el modal de editar proyectos
  };

  const eliminarProyecto = (id) => {
    const proyectosActualizados = proyectos.filter((proyecto) => proyecto.id !== id);
    setProyectos(proyectosActualizados);
  };

  return (
    <div className="container mt-5 text-center">
      <h1>Proyectos</h1>
      <Button variant="primary" onClick={() => setShowAgregarModal(true)}>Agregar Proyecto</Button>
      <div className="row mt-4">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="col-md-4 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{proyecto.nombre}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                <Button variant="info" onClick={() => editarProyecto(proyecto.id)}>Editar</Button>
                <Button variant="danger" onClick={() => eliminarProyecto(proyecto.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal para agregar proyectos */}
      <Modal show={showAgregarModal} onHide={() => setShowAgregarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAgregarModal(false)}>Cerrar</Button>
          <Button variant="primary" onClick={agregarProyecto}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para editar proyectos */}
      <Modal show={showEditarModal} onHide={() => setShowEditarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditarModal(false)}>Cerrar</Button>
          <Button variant="primary" onClick={guardarCambiosProyecto}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProyectoList;
