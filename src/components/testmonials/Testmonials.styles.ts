import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        testmonials:{
            backgroundColor: '#F2F2F2',
            [theme.breakpoints.down('sm')]:{

            }
        },
        textWrapper:{
            
            [theme.breakpoints.down('sm')]:{
                width: '90%',
                margin: '0 auto'
            }
        },
        swipe:{
            minHeight: '400px'
        },
        testmonial:{
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'default',
        },
        testmNumber:{
            color: 'rgba(220,220,220,0.8)',
            fontFamily: 'FuturaPT-Bold',
        },
        wrapTestmNumber:{
            zIndex: -1,
            top: '0'
        },
        wrapText:{
            zIndex: 10,
            marginTop: theme.spacing(3)
        },
        text:{
            fontFamily: 'FuturaPT-Bold',
            textTransform: 'capitalize',
            wordBreak: 'break-word'
        },
        wrapName:{
            marginTop: theme.spacing(2),
        },
        name:{
            textTransform: 'uppercase'
        }
    })
)

export default useStyles