import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';
import { CardColumn } from './CardColumn';


export const CardContainer = () => {

    const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };

  
  const addTask = (task) => {
    task.id=Date.now();
    setTasks(prevTasks => [...prevTasks, task]);
    closeModal();
  };
  
  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    closeModal();
  };

//   const moveTask = (taskId, newStatus) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, status: newStatus } : task
//     );
//     setTasks(updatedTasks);
//   };
  

  const handleDrop = (e, newStatus) => {

    e.preventDefault()
    const taskId = e.dataTransfer.getData('taskId')
    const updatedTasks = tasks.map((task) =>
    task.id.toString() === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (

   
    <div className="container">
      <h1 className="text-center">Tablero Sprint</h1>
      <div className="row">
        <CardColumn
          title="Pendientes"
          tasks={tasks.filter((task) => task.status === 'pending')}
          addTask={addTask}
          onDrop={(taskId) => handleDrop(taskId, 'pending')} // Corrected here
          editTask={editTask}
        />
        <CardColumn
          title="EN CURSO"
          tasks={tasks.filter((task) => task.status === 'inprogress')}
          addTask={addTask}
          onDrop={(taskId) => handleDrop(taskId, 'inprogress')} // Corrected here
          editTask={editTask}
        />
        <CardColumn
          title="LISTO"
          tasks={tasks.filter((task) => task.status === 'done')}
          addTask={addTask}
          onDrop={(taskId) => handleDrop(taskId, 'done')}// Corrected here
          editTask={editTask}
        />
      </div>
    </div>
  );
};