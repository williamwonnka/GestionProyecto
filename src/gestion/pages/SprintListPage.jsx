import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar, SideBar } from "../components";
import { GestionLayout } from "../layout/GestionLayout";

export const SprintListPage = () => {

  const [sprints, setSprints] = useState([]);
  const { projectId } = useParams(); 
  const storedUserData = sessionStorage.getItem('userData');
  const userData = JSON.parse(storedUserData);
  const userId = userData.data.user_id;
  const navigate = useNavigate();

  const handleSidebarItemClick = (itemText) => {
    // Handle sidebar item click logic here
    if (itemText.toLowerCase() === 'proyectos') {
      // Navigate to the 'Proyectos' page
      navigate('/Gestion/Dashboard/SprintList');
    } else {
      // Handle other sidebar item click logic here
      console.log('Clicked Sidebar Item:', itemText);
    }
  };

  // const response = await fetch(`http://127.0.0.1:8000/api/backlogManagement/getSprintListWithTasks?projectId=${projectId}`);
  useEffect(() => {
    console.log(projectId);
    const fetchSprintsByProject = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/backlogManagement/getSprintListWithTasks?project_id=${projectId}`, {
          headers: {
            'user-id': userId,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSprints(data.Sprints); // Assuming the projects data is an array of objects
        } else {
          console.error('Failed to fetch sprints');
        }
      } catch (error) {
        console.error('Error fetching sprints:', error);
      }
    };

    fetchSprintsByProject();
  }, [projectId]);



  return (
    <>

    <SideBar drawerWidth={240} onSidebarItemClick={handleSidebarItemClick} />     
    <NavBar drawerWidth={240}/> 

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: 40, marginTop: 10}}>
        {Array.isArray(sprints) && sprints.length > 0 ? (
          sprints.map((sprints) => (
            <Card key={sprints.project_id} variant="outlined" sx={{ minWidth: 275 }}>
               
              <CardContent>
                <Typography variant="h6">Titulo: {sprints.name}</Typography>
                <Typography variant="body2" color="text.secondary">Fecha inicio: {sprints.start_date}</Typography>
                <Typography variant="body2" color="text.secondary">Fecha fin: {sprints.end_date}</Typography>
                {/* Add more project details here */}
                <Button onClick={() => handleOpenModal(project.id)}>Agregar tarea</Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">No sprints available.</Typography>
        )}
      </Box>

    </>
  )
}
