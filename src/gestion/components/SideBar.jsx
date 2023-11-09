import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { SprintPage } from "../pages/SprintsPage";
import { SprintListPage } from "../pages/SprintListPage";

export const SideBar = ({ drawerWidth, onSidebarItemClick }) => {

    const [selectedItem, setSelectedItem] = useState();

    const handleListItemClick = (text) => {
      onSidebarItemClick(text);
    };
  
    return (
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant='permanent' // temporary
          open={true}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar>
            <Typography variant='h6' noWrap component='div'>
              Gestion App
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {['Proyectos','Usuarios'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleListItemClick(text)}>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {selectedItem === 'Proyectos' && <SprintPage />}
      </Box>
    );
  };
