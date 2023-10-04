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

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     closeModal();
//   };


const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
    console.log(tasks)
    closeModal();
  };


  // Effect to handle tasks state updates
  useEffect(() => {
    // Perform any actions that depend on the updated tasks state here
    // For example, you can update other components or perform additional logic
    console.log('Tasks updated:', tasks);
  }, [tasks]); // This effect will run whenever tasks state changes


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
          title="POR HACER"
          tasks={tasks.filter((task) => task.status === 'por-hacer')}
          addTask={addTask}
          onTaskMove={moveTask} 
          editTask={editTask}
        />
        <CardColumn
          title="EN CURSO"
          tasks={tasks.filter((task) => task.status === 'en-curso')}
          addTask={addTask}
          onTaskMove={moveTask} 
          editTask={editTask}
        />
        <CardColumn
          title="LISTO"
          tasks={tasks.filter((task) => task.status === 'listo')}
          addTask={addTask}
          onTaskMove={moveTask} 
          editTask={editTask}
        />
      </div>
    </div>
  );
};