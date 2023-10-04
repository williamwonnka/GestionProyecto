import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from 'react'

export const TaskForm = ({ task, addTask, closeModal, onTaskEdit }) => {



    const [title, settitle] = useState()
    const [details, setdetails] = useState()
    const [userId, setuserId] = useState()
    const [setstatusId, setsetstatusId] = useState()


    const handleCreateTask = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://127.0.0.1:8000/api/tasksManagement/createTask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, details, name, lastname }),
          });
    
          if (response.ok) {
            handleSubmit();
          } else {
            
          }
        } catch (error) {
          // Handle network error, e.g., show error message to user
         
        }
    
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
          // Si task existe, significa que estamos editando una tarea existente
        //   onTaskEdit(formData); // Llama a la función de edición con los nuevos datos del formulario
        console.log(formData)
        addTask(formData); // Llama a la función para agregar una nueva tarea con los datos del formulario
        } else {
          // Si no hay task (nueva tarea), agregamos una nueva tarea
         
        }
        closeModal(); // Cierra el modal después de agregar o editar la tarea
      };

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        comments: '',
        assignee: '',
        assignedTo: '', 
        points: '', 
        status: '', // Valor inicial del estado de la tarea
      });
    
      // Efecto para actualizar el estado del formulario cuando se selecciona una tarea existente para edición
      useEffect(() => {
        if (task) {
          setFormData({ ...task }); // Si hay una tarea, carga sus datos en el formulario para editar
        } else {
          // Si no hay una tarea (nueva tarea), establece valores iniciales en el formulario
          setFormData({
            id: Date.now(),
            title: '',
            description: '',
            comments: '',
            assignee: '',
            assignedTo: '',
            points: '',
            status: '', // Estado por defecto para una nueva tarea
          });
        }
      }, [task]);
    
      // Función para manejar cambios en los campos del formulario
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      
        const formButton = {
            margin: '10px', // Adjust the value to set the desired margin
        };

      
    
      // Función para manejar el envío del formulario
      
    
      return (
        <Form onSubmit={handleSubmit}>
          {/* Campo de entrada para el título de la tarea */}
          <Form.Group controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
    
          {/* Campo de entrada para la descripción de la tarea */}
          <Form.Group controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>
    
          {/* Campo de entrada para comentarios */}
          <Form.Group controlId="comments">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control
              as="textarea"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>
    
          {/* Campo de entrada para el encargado de la tarea */}
          <Form.Group controlId="assignee">
            <Form.Label>Encargado</Form.Label>
            <Form.Control
              type="text"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
            />
          </Form.Group>
    
          {/* Campo de entrada para asignado a */}
          <Form.Group controlId="assignedTo">
            <Form.Label>Asignado a</Form.Label>
            <Form.Control
              type="text"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
            />
          </Form.Group>
    
          {/* Campo de entrada para puntos */}
          <Form.Group controlId="points">
            <Form.Label>Puntos</Form.Label>
            <Form.Control
              type="text"
              name="points"
              value={formData.points}
              onChange={handleChange}
            />
          </Form.Group>
    
          {/* Campo de selección para el estado de la tarea */}
          <Form.Group controlId="status">
            <Form.Label>Estado de la Tarea</Form.Label>
            <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleChange}
                >
                <option value="" disabled>Please select an option...</option>
                <option value="pending">Pending</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
                </Form.Control>

          </Form.Group>
    
          {/* Botón para guardar los cambios o agregar una nueva tarea */}
          <Button variant="primary" type="submit" style={formButton}>
            Guardar
          </Button>
        </Form>
      );
}

