import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function ProyectoList() {
  const [proyectos, setProyectos] = useState([]);
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [descripcionProyecto, setDescripcionProyecto] = useState('');
  const [showAgregarModal, setShowAgregarModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [editProyectoId, setEditProyectoId] = useState(null);

  // Función para obtener la lista de proyectos
  const obtenerProyectos = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    fetch('http://127.0.0.1:8000/api/projectsManagement/getProjectList', {
      headers: {
        'Authorization': `Bearer ${userData}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        setProyectos(data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de proyectos:', error);
      });
  };
  
  useEffect(() => {
    obtenerProyectos();
  }, []);

  const agregarProyecto = () => {
    if (nombreProyecto && descripcionProyecto) {
      // Realiza una solicitud POST para crear un nuevo proyecto
      fetch('http://127.0.0.1:8000/api/projectsManagement/createProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nombreProyecto, description: descripcionProyecto }),
      })
        .then(() => {
          // Después de crear el proyecto, actualiza la lista de proyectos
          obtenerProyectos();

          setNombreProyecto('');
          setDescripcionProyecto('');
          setShowAgregarModal(false);
        })
        .catch((error) => {
          console.error('Error al crear un proyecto:', error);
        });
    }
  };

  const editarProyecto = (id) => {
    setEditProyectoId(id);
    setShowEditarModal(true);
    const proyectoAEditar = proyectos.find((proyecto) => proyecto.id === id);
    setNombreProyecto(proyectoAEditar.nombre);
    setDescripcionProyecto(proyectoAEditar.descripcion);
  };

  const guardarCambiosProyecto = () => {
    if (editProyectoId) {
      // Realiza una solicitud PUT para actualizar el proyecto
      fetch(`http://127.0.0.1:8000/api/projectsManagement/updateProject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ project_id: editProyectoId, name: nombreProyecto, description: descripcionProyecto }),
      })
        .then(() => {
          // Después de actualizar el proyecto, actualiza la lista de proyectos
          obtenerProyectos();

          setShowEditarModal(false);
        })
        .catch((error) => {
          console.error('Error al actualizar un proyecto:', error);
        });
    }
  };

  const eliminarProyecto = (id) => {
    // Realiza una solicitud DELETE para eliminar un proyecto
    fetch(`http://127.0.0.1:8000/api/projectsManagement/deleteProject`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project_id: id }),
    })
      .then(() => {
        // Después de eliminar el proyecto, actualiza la lista de proyectos
        obtenerProyectos();
      })
      .catch((error) => {
        console.error('Error al eliminar un proyecto:', error);
      });
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
                <Card.Title>{proyecto.name}</Card.Title> 
                <Card.Text>{proyecto.description}</Card.Text> 
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