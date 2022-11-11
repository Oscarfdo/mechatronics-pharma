import {Button, Grid, TextField, Link, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';


export const Login = () => {

    const recetar = () =>{
        navigate ('/recetar');
    }

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    sx={{mainHeight: '100vh', background: 'primary.main', padding: 8}}
    >
        <Grid item
        className='box-shadow'
        xs={3}
        sx={{backgroundColor: 'secondary.main', padding:3, borderRadius:2 }}>
            <Typography variant='h5' sx={{mb:1}}>Iniciar Sesión</Typography>

            <form>

            <Grid container>

                <Grid item xs={6} sx={{mt:2}}>
                    <TextField
                        label="Usuario"
                        type="usuario"
                        placeholder='Usuario'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6} sx={{mt:2}}>
                    <TextField
                        label="Contraseña"
                        type="contraseña"
                        placeholder='Contraseña'
                        fullWidth
                    />
                </Grid>

                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                    <Grid item xs={12}>
                        
                        <Link component={RouterLink} color='inherit' to="/recetar">
                        <Button variant='contained' fullWidth>
                        Iniciar Sesión
                        </Button>
                        </Link>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>

                    <Link component={RouterLink} color='inherit' to="/registro" >
                    Crear Cuenta 
                    </Link>
                    
                </Grid>

            </Grid>

            </form>
        </Grid>
    </Grid>
  )
}
