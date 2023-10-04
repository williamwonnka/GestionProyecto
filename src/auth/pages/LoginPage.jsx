import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useState } from 'react'

export const LoginPage = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
      });

      if (response.ok) {
        
        window.location.href = '/Gestion/Dashboard'
      } else {
        console.log(response)
      }
    } catch (error) {
      // Handle network error, e.g., show error message to user
      console.log(error)
    }

  }


  return (
   
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="username" 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth/>

              </Grid>
              
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Contrasena" 
                type="password" 
                value={password}
                placeholder="Contrasena"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth/>

              </Grid>

              <Grid container spacing={2} sx={{ mb:2, mt:2}}>
                <Grid item xs={12} sm={6} xl={12}>
                  <Button variant='contained' fullWidth type='submit'>Login</Button>
                </Grid>
             

              
                <Grid item xs={12} sm={6} xl={12}>
                  <Button variant='contained' fullWidth>
                    <Google/>
                    <Typography sx={{ ml:1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
                
              </Grid>

            </Grid>

      </form>

    </AuthLayout>
          

       

  )
}

