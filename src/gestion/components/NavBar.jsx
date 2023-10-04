import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({drawerWidth = 240}) => {

    const handleLogout = () => {
        // Clear user session data from session storage
        sessionStorage.removeItem('userData');
        // Redirect to the login page
        window.location.href = '/auth/login';
    };
    

  return (
    
    <AppBar
    position = 'fixed'
    sx = {{
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px`}
        }}
    >
        <Toolbar>
            <IconButton
            color='inherit'
            edge="start"
            sx={{ mr: 2, display:{ sm: 'none' } }}
            >
                <MenuOutlined/>
               
                
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'></Typography>
                    
                <IconButton color='error' onClick={handleLogout}>
                    <LogoutOutlined/>
                </IconButton>

            </Grid>

        </Toolbar>


    </AppBar>
  )
}
