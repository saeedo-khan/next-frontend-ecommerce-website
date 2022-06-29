import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        tableTitle:{
            fontSize: '3rem',
            marginLeft: theme.spacing(1)
        },
        container_shopping:{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: theme.spacing(14),
            marginBottom: theme.spacing(10),
        },
        btn_shopping:{
            backgroundColor: '#333',
            fontSize: 13,
            width: '100%',
            wordBreak: 'keep-all',
            fontFamily: 'FuturaPTDemi',
            '&:hover':{
                backgroundColor: '#EE9051'
            }
        },
        wrapBtn_shopping:{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            [theme.breakpoints.down('sm')]:{
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
            }
        },
        wrap_checking:{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        container_totalPrice:{
            display: 'flex',
            justifyContent: 'space-around',
            [theme.breakpoints.down('sm')]:{
                justifyContent: 'center'
            }
        },
        text_price:{
            fontSize: 20,
            marginRight: theme.spacing(2),
            [theme.breakpoints.down('sm')]:{
                marginLeft: '-40px'
            }
        },
        price:{
            fontFamily: 'FuturaPTDemi',
            fontSize: 22
        }
    })
)

export default useStyles