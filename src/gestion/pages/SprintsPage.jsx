import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { SprintListPage } from './SprintListPage';
import { useNavigate } from 'react-router-dom';
import { NavBar, SideBar } from '../components';
import { Navbar } from 'react-bootstrap';

export const SprintPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [sprintInfo, setSprintInfo] = useState({
    name: '',
    start_date: '',
    end_date: '',
    project_id: null,
  });

  const handleOpenModal = (project_id) => {
    setSprintInfo({
      ...sprintInfo,
      project_id: project_id,
    });
    setOpenModal(true);
  };

  
  const showAlert = (response) => {
    if (response == true) {
      Swal.fire({
        icon: 'success',
      })
    }
    else {
      Swal.fire({
        title: 'Error',
        icon: 'error',
      })
    }
  }
  

  const handleCloseModal = () => {
    setOpenModal(false);
    // Reset sprintInfo fields if needed
    setSprintInfo({
      name: '',
      start_date: '',
      end_date: '',
      project_id: null,
    });
  };

  const storedUserData = sessionStorage.getItem('userData');

  // Parse the storedUserData JSON string to an object
  const userData = JSON.parse(storedUserData);

  // Extract user_id from the userData object
  const userId = userData.data.user_id;


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projectsManagement/getProjectList', {
          headers: {
            'user-id': userId,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setProjects(data.data); // Assuming the projects data is an array of objects
        } else {
          console.error('Failed to fetch projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [userId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      var validate = false;
      const response = await fetch('http://127.0.0.1:8000/api/projectsManagement/createProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-id': userId
        },
        body: JSON.stringify({ name, description }),
      });

      if (response.ok) {
        validate = true;
        showAlert(validate)
        window.location.href = '/Gestion/Dashboard'
      } else {
        validate=false;
        showAlert(false);
      }
    } catch (error) {
      // Handle network error, e.g., show error message to user
      console.log(error)
    }

    handleClose();

  }

  const handleCreateModal = async () => {
    try {
      var validate = false;
      const response = await fetch('http://127.0.0.1:8000/api/backlogManagement/createSprint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-id': userId
        },
        body: JSON.stringify(sprintInfo),
      });

      if (response.ok) {
        // Sprint created successfully, handle the response if needed
        validate = true;
        showAlert(validate);
        
      } else {
        // Handle error response from the API
        validate=false;
        console.error('Failed to create sprint');
        showAlert(validate);
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.error('Error creating sprint:', error);
    }

    // Close the modal after handling the form submission
    handleCloseModal();
  };

  const handleSprintsButtonClick = (projectId) => {
    // Redirect to a different page with the projectId as a URL parameter
    navigate(`/Gestion/Dashboard/SprintListPage/${projectId}`);
  };

  return (

    <>


    <SideBar drawerWidth={240} />     
    <NavBar drawerWidth={240}/> 

      {/* OpenModal Button */}
      <Button onClick={handleOpen}>Agregar proyecto</Button>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: 40, marginTop: 10}}>
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <Card key={project.id} variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                {/* Add more project details here */}
                <Button onClick={() => handleOpenModal(project.id)}>Agregar sprint</Button>
                <Button onClick={() => handleSprintsButtonClick(project.id)}>Ver sprint</Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">No projects available.</Typography>
        )}

        {/* Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Crear Sprint</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Nombre"
              type="text"
              fullWidth
              value={sprintInfo.name}
              onChange={(e) => setSprintInfo({ ...sprintInfo, name: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Fecha de inicio"
              type="date"
              fullWidth
              value={sprintInfo.start_date}
              onChange={(e) => setSprintInfo({ ...sprintInfo, start_date: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Fecha de fin"
              type="date"
              fullWidth
              value={sprintInfo.end_date}
              onChange={(e) => setSprintInfo({ ...sprintInfo, end_date: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleCreateModal} color="primary">
              Crear Sprint
            </Button>
          </DialogActions>
        </Dialog>
      </Box>


      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ingrese los detalles del proyecto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, ingrese el nombre y la descripción del proyecto.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"ß
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Descripción"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </>

  )
}
