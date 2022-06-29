import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        contact:{
            fontFamily: 'FuturaPTDemi',
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(4)
        },
        headerContact:{
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(5),
            marginLeft: theme.spacing(4),
            [theme.breakpoints.down('md')]:{
                marginTop: theme.spacing(8)
            }
        },
        text__top:{
            fontSize: 70,
            letterSpacing: 1,
            color: '#333333'
        },
        text__navLink:{
            marginTop: theme.spacing(1)
        },
        wrap_nav:{
            fontSize: 25,
            color: '#EE9051'
        },
        text__nav:{
            cursor: 'pointer',
            color: '#333333'
        },
        content:{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '80%',
            margin: '0 auto',
            [theme.breakpoints.down('md')]:{
                display: 'flex',
                flexDirection: 'column'
            }
        },
        content__info:{
            width: '50%',
            display: 'block',
            margin: '0 auto',
            [theme.breakpoints.down('md')]:{
                width: '90%',
                margin: '0 auto',
                marginTop: theme.spacing(10),
                marginBottom: theme.spacing(10)
            }
        },
        text_info:{
            fontSize: 50,
            fontFamily: 'FuturaPTDemi',
            color: '#333333'
        },
        address__contact:{
            display: 'flex',
            marginTop: theme.spacing(2)
        },
        email__contact:{
            display: 'flex',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        phone__contact:{
            display: 'flex',
            marginBottom: theme.spacing(2)
        },
        text__contact:{
            width: '70%',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('md')]:{
                width: '100%'
            }
        },
        content__form:{
            width: '50%',
            display: 'block',
            margin: '0 auto',
            [theme.breakpoints.down('md')]:{
                width: '100%',
                marginBottom: theme.spacing(20)
            }
        },
        form_text:{
            fontSize: 40,
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(6),
            textTransform: 'uppercase',
            color: '#333333',
            fontFamily: 'FuturaPTDemi',
        },
        fieldText:{
            marginBottom: theme.spacing(4),
        },
        btn__form:{
            backgroundColor: 'black',
            color: 'white',
            height: '60px',
            fontSize: 18,
            '&:hover':{
                backgroundColor: '#EE9051'
            },
            [theme.breakpoints.down('md')]:{
                width: '40%',
                textAlign: 'center'
            }
        }
    })
)

export default useStyles