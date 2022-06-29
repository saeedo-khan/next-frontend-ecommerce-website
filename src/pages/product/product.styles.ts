import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        product:{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: theme.spacing(20),
            marginBottom: theme.spacing(5),
            [theme.breakpoints.down('md')]:{
                flexDirection: 'column',
                marginTop: theme.spacing(6)
            }
            
        },
        productDetails:{
            width: '40%',
            [theme.breakpoints.down('md')]:{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        productDetails__container:{
            margin: '0 auto',
            width: '100%'
        },
        product_identy:{
            marginBottom: theme.spacing(3),
            [theme.breakpoints.down('md')]:{
                textAlign: 'center',
            }
        },
        product__price:{
            marginTop: theme.spacing(1),
            fontSize: 25,
            [theme.breakpoints.down('md')]:{
                marginTop: theme.spacing(2)
            }
        },
        product__title:{
            fontSize: 35,
            [theme.breakpoints.down('sm')]:{
                fontSize: 28
            }
        },
        product_addtoCart:{
            display: 'flex',
            marginBottom: theme.spacing(5),
            marginTop: theme.spacing(6),
            [theme.breakpoints.down('md')]:{
                marginBottom: theme.spacing(8),
                marginTop: theme.spacing(9),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
        product__count:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: theme.spacing(5),
            [theme.breakpoints.down('md')]:{
                marginLeft: theme.spacing(3)
            }
        },
        btn__addtoCart:{
            backgroundColor: '#333',
            color: 'white',
            fontWeight: 600,
            fontSize: 21,
            '&:hover':{
                backgroundColor: '#EE9051'
            }
        },
        container__magnify:{
            width: '50%',
            height: '716px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]:{
                width: '100%',
                marginTop: theme.spacing(10)
            }
        },
        container__accordion:{
            width: '80%',
            display: 'block',
            [theme.breakpoints.down('md')]:{
                margin: '0 auto'
            }
        }
    })
)

export default useStyles