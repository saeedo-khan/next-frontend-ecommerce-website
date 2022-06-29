import { makeStyles, createStyles } from '@material-ui/core';
import { Theme } from "@mui/material";

// mt={5} mb={4} ml={1} sx={{display: 'flex', alignItems: 'center'}}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        
        cart_content:{
            height: '150px',
            width: '90%',
            margin: '0 auto',
            position: 'relative',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
            display: 'flex',
            alignItems: 'center'
        },
        cart_icon:{
            right: '10px',
            top: '5px'
        },
        imgContent:{
            paddingLeft: theme.spacing(1)
        },
        imgContainer:{
            width: '120px',
            height: '120px',
            position: 'relative',
            [theme.breakpoints.down('xs')]:{
                width: '90px',
                height: '90px'
            }
        },
        textContent:{
            width: '60%',
            marginLeft: 'auto'
        },
        textContent_title:{
            fontSize: 15,
            marginBottom: theme.spacing(1),
            
        },
        textContent_price:{
            fontSize: 15
        },
        btn_checkout:{
            backgroundColor: '#333',
            color: 'white',
            fontSize: 18,
            textTransform: 'capitalize',
            '&:hover':{
                backgroundColor: '#EE9051'
            }
        },
        emptyCart_text:{
            fontFamily:'FuturaPTDemi',
            fontSize: 45,
            [theme.breakpoints.down('sm')]:{
                fontSize: 30
            }
        }
    })
)

export default useStyles