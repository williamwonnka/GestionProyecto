import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react"




export const RegisterPage = () => {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/authentication/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name, lastname }),
      });

      if (response.ok) {
        window.location.href = '/auth/login'
      } else {
        
      }
    } catch (error) {
      // Handle network error, e.g., show error message to user
     
    }

  }

  return (
    
    <AuthLayout title="Register">
       <form onSubmit={handleSubmit}>
            <Grid container>

            <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Nombre" 
                type="text" 
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth/>

              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Apellido" 
                type="text" 
                placeholder="Apellido"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                fullWidth/>

              </Grid>


              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Usuario" 
                type="text" 
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth/>

              </Grid>
              
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Contrasena" 
                type="password" 
                placeholder="Contrasena"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth/>

              </Grid>

              <Grid container spacing={2} sx={{ mb:2, mt:2}}>
                <Grid item xs={12} sm={12} xl={12}>
                  <Button variant='contained' fullWidth type="submit">Crear cuenta</Button>
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
