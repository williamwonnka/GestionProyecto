
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TaskForm } from './TaskForm';
import { AddTaskOutlined } from '@mui/icons-material';

export const CardColumn = ( { title, tasks, addTask, onDrop, editTask} ) => {

    const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Función para abrir el modal con los detalles de la tarea o para agregar una nueva tarea
  const openModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const formStyle = {
    margin: '80px', // Adjust the value to set the desired margin
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };

  
  useEffect(() => {
    // Code to execute when tasks prop changes
  }, [tasks]);

  return (
    <div
      className="col-md-3"
      onDrop={(e) => onDrop(e)} 
      onDragOver={(e) => e.preventDefault()}
    >
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <div className="task-container">
            {/* Mapeo de las tareas y creación de elementos de tarea */}
            {tasks.map((task) => (
              <div
              key={task.id}
              className="task"
              draggable
              onDragStart={(e) => {
                const taskId = task.id.toString();              
                e.dataTransfer.setData('taskId', taskId); // Ensure task.id is set correctly
              }}
              onClick={() => openModal(task)}
            >
                <div>
                  <h5>{task.title}</h5>
                  <p>Encargado: {task.assignee}</p>
                </div>
                <span>&#9776;</span>
              </div>
            ))}
          </div>
          {/* Botón para abrir el modal y agregar una nueva tarea */}
          <Button variant="primary" onClick={() => openModal(null)}>
            Agregar Tarea
          </Button>
        </Card.Body>
      </Card>

      {/* Modal para mostrar detalles de la tarea o agregar/editar una tarea */}
      <Modal show={showModal} onHide={closeModal} style={formStyle}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Componente TaskForm para manejar el formulario de la tarea */}
         <TaskForm
         closeModal={closeModal}
         addTask={addTask}
         task={tasks}/>
          
        </Modal.Body>
      </Modal>
    </div>
  );
  
}
