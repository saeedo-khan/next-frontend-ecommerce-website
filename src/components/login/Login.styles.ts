import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        login:{
            width: '500px',
            backgroundColor: 'white',
            padding: '2rem 0',
            borderRadius: '10px',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            
        },
        formControl:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        container__login:{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
        },
        input__field:{
            width: '70%',
            marginBottom: theme.spacing(3),
            '& label.Mui-focused':{
                color: 'black'
            },
            '& .MuiOutlinedInput-root':{
                '&.Mui-focused fieldset': {
                    borderColor: "rgba(237, 108, 2, 0.2)"
                }
            },
        },
        sign__btn:{
            width: '60%',
            marginTop: theme.spacing(2),
            backgroundColor: 'black',
            '&:hover':{
                background: 'rgba(237, 108, 2, 0.7)'
            }
        },
        toggleSign:{
            display: 'block',
            textAlign: 'center',
            color: 'red',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    })
)

export default useStyles