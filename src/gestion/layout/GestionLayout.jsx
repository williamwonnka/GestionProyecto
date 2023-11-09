import { Box, Card, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar, CardTask } from "../components";
import { CardContainer } from "../components/CardContainer";
import { useState } from "react";
import { SprintPage } from "../pages/SprintsPage";



const drawerWidth = 240;


export const GestionLayout = ( { children } ) => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  let componentToRender = null;
  if (selectedItem === 'Proyectos') {
    componentToRender = <SprintPage />;
  } else if (selectedItem === 'Ver tareas') {
    componentToRender = <OtherComponent />;
  }
  
  return (
    <Box sx={{ display: 'flex' }}>

        {/* NavBar */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* SideBar */}
        <SideBar drawerWidth={drawerWidth} onSidebarItemClick={handleSidebarItemClick} />

        {/* Render components on dashboard */}
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {componentToRender}
        {children}
      </Box>
    </Box>
  )
}
