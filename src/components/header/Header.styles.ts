// import {  createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
createStyles({ 
    header:{
        [theme.breakpoints.down('sm')]:{
            display: 'block',
            width: '100%',
            marginTop: '100px'
        }
    },
    containerHeader:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    headerText:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '80vh',
        [theme.breakpoints.down('sm')]:{
            width: '50%',
            height: '0',
        }
    },
    square:{
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        [theme.breakpoints.down('sm')]:{
            width: '5px',
            height:'5px',
            backgroundColor: 'red',
        }
    },
    headerTextTop:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
        }
    },
    hero:{
        fontFamily: 'Alata',
        fontSize: 105,
        [theme.breakpoints.down('sm')]:{
            fontSize: 31,
            fontWeight: '700',
            color: '#333',
        }
    },
    heroYear:{
        fontSize: 30,
        color: '#333',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]:{
            fontSize: 15,
            marginBottom: '1rem',
            paddingLeft: '0.2rem',
            display: 'block'
        }
    },
    headerTextBottom:{
        fontFamily: 'Dosis',
        fontSize: 20,
        [theme.breakpoints.down('sm')]:{
            width: '80%',
            fontSize: 12,
            fontWeight: 600,
            margin: '0 auto',
            textTransform: 'capitalize',
            marginTop: '0.5rem'
        }
    },
    btnHeader:{
        marginTop: '3rem',
        marginBottom: '3rem',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1rem',
            marginBottom: '1rem'
        }
    },
    btn:{
        fontFamily: 'FuturaPTDemi',
        textTransform: 'capitalize',
        color: 'white',
        cursor: 'pointer',
        backgroundColor: 'black',
        padding: theme.spacing(2),
        fontSize: 25,
        '&:hover':{
            backgroundColor: '#EE9051',
            transition: 'all 0.3s ease-in'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: 16,
            fontWeight: 500,
            borderRadius: 0,
            padding: theme.spacing(1),
        }
    },
    list:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '30%',
        marginTop: 'auto',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.8rem'
        }
    },
    listItem:{
        cursor: 'pointer',
        fontSize: 25,
        padding: '0.5rem',
        '&:hover':{
            color: 'tomato'
        },
        [theme.breakpoints.down('sm')]:{
            padding: '0.2rem',
            marginLeft: '0.2rem',
            fontSize: 21
        }
    },
    
    headerImg:{
        zIndex: -1,
        width: '50%',
        [theme.breakpoints.up(('sm'))]:{
            width: '50%'
        }
    },
    modelImage:{
        width: '100%',
        display: 'block',
        objectFit: 'cover',
    }
})

)


export default useStyles