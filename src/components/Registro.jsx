import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';


export const Registro = () => {
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
            <Typography variant='h5' sx={{mb:1}}>Registro</Typography>

            <form>

            <Grid container>

                
                <Grid container
                direction="column"
                alignItems="center"
                >
                    <Grid item xs={6} sx={{mt:2}}>
                        <TextField
                            label="Nombre"
                            type="nombre"
                            placeholder='Nombre(s)'
                            fullWidth
                         />
                    </Grid>
                </Grid>

                <Grid container
                direction="column"
                alignItems="center"
                >
                        <Grid item xs={6} sx={{mt:2}}>
                            <TextField
                                label="Apellido"
                                type="apellido"
                                placeholder='Apellido(s)'
                                fullWidth
                            />
                        </Grid>
                    </Grid>
               

                <Grid container
                direction="column"
                alignItems="center"
                >
                    <Grid item xs={6} sx={{mt:2}}>
                            <TextField
                                label="Correo"
                                type="correo"
                                placeholder='Correo'
                                fullWidth
                            />
                    </Grid>
                </Grid>


                <Grid container
                direction="column"
                alignItems="center"
                >
                    <Grid item xs={6} sx={{mt:2}}>
                        <TextField
                            label="Clave"
                            type="clave"
                            placeholder='No. Secreto'
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container
                direction="column"
                alignItems="center"
                >
                    <Grid item xs={6} sx={{mt:2}}>
                        <TextField
                            label="Contraseña"
                            type="contraseña"
                            placeholder='Contraseña'
                            fullWidth
                        />
                    </Grid>
                </Grid>


                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        <Grid item xs={6}>
                          
                            <Link component={RouterLink} color='inherit' to="/recetar">
                            <Button variant='contained' fullWidth>
                            Registrar
                            </Button>
                            </Link>
                           
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>

                    <Link component={RouterLink} color='inherit' to="/Login" >
                    Ya tengo Cuenta 
                    </Link>
                    
                </Grid>

            </Grid>

            </form>
        </Grid>
    </Grid>
  )
}
