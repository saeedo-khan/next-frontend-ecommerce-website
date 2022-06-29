
import { makeStyles, createStyles } from '@material-ui/core';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => 
createStyles({
    account: {
        '& :hover':{
            color: 'red'
        }
    },
    navs:{
        fontFamily: 'FuturaPTDemi, sans-serif',
        textTransform: 'uppercase',
    },
    navItem:{
        width: '100%',
        backgroundColor: '#EA8D4F',
        height: '2px'
    },
    navHover:{
        width: '100%',
        backgroundColor: '#EA8D4F',
        height: '2px',
        transform: 'scaleX(0.1)',
        '&:hover':{
            transform: 'scaleX(1)'
        }
    },
    cart:{
        width: 500,
        [theme.breakpoints.down('sm')]:{
            width: 450
        },
        [theme.breakpoints.down('xs')]:{
            width: 300
        },
        overflowX: 'hidden',
        scrollbarWidth:'thin',
        scrollbarColor: 'rgba(0,0,0,0.9) rgba(0,0,0,0.1)',
    },
    topText: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    text:{
        fontSize: 30,
        [theme.breakpoints.down('xs')]:{
            fontSize:20
        }
    },
    topText_icon:{
        transform: 'rotate(45deg)',
        transition: '0.1s linear',
        '&:hover': {
            transform: 'rotate(0deg)',
            
        }
    },
})
)

export default useStyles