import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        register:{
            width: '900px',
            backgroundColor: 'white',
            padding: '2rem 0',
            borderRadius: '10px',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]:{
                width: '80%'
            }
        },
        formControl:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        
        input__field:{
            width: '70%',
            marginBottom: theme.spacing(2),
            '& label.Mui-focused':{
                color: 'black'
            },
            '& .MuiOutlinedInput-root':{
                '&.Mui-focused fieldset': {
                    borderColor: "rgba(237, 108, 2, 0.2)"
                }
            }
        },
        sign__btn:{
            width: '50%',
            margin: '2rem 0 1rem 0',
            background: 'black',
            '&:hover':{
                background: 'rgba(237, 108, 2, 0.7)'
            }
        }
    })
)

export default useStyles