import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        line:{
            //sx={{width: '90%', height: '1px', backgroundColor: 'rgba(0,0,0,0.3)'}}
            width: '90%',
            height: '1px',
            backgroundColor: 'rgba(0,0,0,0.3)'
        },
        accordion__text:{
            width: '90%'
        }
    })
)


export default useStyles