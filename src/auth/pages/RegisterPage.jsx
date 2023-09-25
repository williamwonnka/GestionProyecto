import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const RegisterPage = () => {
  return (
    
    <AuthLayout title="Register">
       <form>
            <Grid container>

            <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Nombre" 
                type="text" 
                placeholder="John Doe"
                fullWidth/>

              </Grid>


              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth/>

              </Grid>
              
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Contrasena" 
                type="password" 
                placeholder="Contrasena"
                fullWidth/>

              </Grid>

              <Grid container spacing={2} sx={{ mb:2, mt:2}}>
                <Grid item xs={12} sm={12} xl={12}>
                  <Button variant='contained' fullWidth>Crear cuenta</Button>
                </Grid>
             

              
               
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                Ya tienes una cuenta?
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                  Ingresa
                </Link>
                
              </Grid>

            </Grid>

      </form>
    </AuthLayout>
  )
}
