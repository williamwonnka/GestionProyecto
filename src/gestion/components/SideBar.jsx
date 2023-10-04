import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        comopnent='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open={ true }
            sx= {{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }
                }}
        >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Gestion App
                    </Typography>
                </Toolbar>
                <Divider/>
                   
                

                <List>
                        {
                            ['Sprints', 'Ver tareas', 'Usuarios'].map( text => 
                                <ListItem key={ text } disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot/>
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={ text }/>                                           
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            )
                        }
                    </List>
        </Drawer>

    </Box>
  )
}
