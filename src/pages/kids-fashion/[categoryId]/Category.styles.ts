import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container_card:{
            maxWidth: '1800px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            [theme.breakpoints.down('xs')]:{
                alignItems: 'center'
            }
        },
        card:{
            margin: '0',
            padding: '0',
            [theme.breakpoints.down('sm')]:{
                marginBottom: theme.spacing(10),
                textAlign: 'center',
            }
        },
        product:{
            width: '300px',
            height: '400px', //500
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(14),
            marginLeft: theme.spacing(2),
            [theme.breakpoints.down('sm')]:{
                marginLeft: theme.spacing(3)
            },
            [theme.breakpoints.down('xs')]:{
                width: '300px',
                height: '390px',
                marginBottom: theme.spacing(5),
                marginLeft: '0'
            }
        },
        imgContainer:{
            width: '300px',
            height: '350px',
            position: 'relative',
            boxShadow: theme.shadows[1],
            backgroundColor: 'rgba(200, 200, 200,0.1)',
            [theme.breakpoints.down('xs')]:{
                width: '290px',
                height: '350px',
            }
        },
        textProduct:{
            marginTop: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        textProduct__title:{
            color: 'black',
            fontFamily: 'FuturaPT-Book',
            fontSize: '1.2rem',
            [theme.breakpoints.down('sm')]:{
                fontSize: 20
            }
        },
        textProduct__price:{
            color: 'black',
            padding: theme.spacing(1),
            borderRadius: '5px',
            marginTop: theme.spacing(1),
            cursor: 'pointer',
            fontSize: 25,
            fontFamily: 'FuturaPT-Book',
            [theme.breakpoints.down('sm')]:{
                fontSize: 21,
                marginTop: '0',
                paddingTop: '0'
            }
        },
        addItem:{
            display: 'block',
            textAlign: 'center'
        }
    })
)

export default useStyles