import { Box, Card, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar, CardTask } from "../components";
import { CardContainer } from "../components/CardContainer";



const drawerWidth = 240;


export const GestionLayout = ( { children } ) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/* NavBar */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* SideBar */}
        {/* <SideBar drawerWidth= { drawerWidth }/> */}
        <Box component='main'
        sx={{ flexGrow: 1, p:3}}>
            <Toolbar/>

            { children }
            <CardContainer/>
        </Box>
    </Box>
  )
}
