import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
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

export const Testmonial = () => {
    const classes = useStyles()
    return (
        <Box className={classes.testmonial} sx={{position: 'relative'}}>
            <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
            </Box>
            <Box className={classes.wrapText}>
                <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
            </Box>
            <Box className={classes.wrapName}>
                <Typography variant='h6' className={classes.name} fontWeight={600}>Iman Muhammed</Typography>
            </Box>
        </Box>
    );
}