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

  const moveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
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
            onTaskMove={moveTask} 
            editTask={editTask}
            />
            <CardColumn
            title="EN CURSO"
            tasks={tasks.filter((task) => task.status === 'inprogress')}
            addTask={addTask}
            onTaskMove={moveTask} 
            editTask={editTask}
            />
            <CardColumn
            title="LISTO"
            tasks={tasks.filter((task) => task.status === 'done')}
            addTask={addTask}
            onTaskMove={moveTask} 
            editTask={editTask}
            />

      </div>
    </div>
  );
};