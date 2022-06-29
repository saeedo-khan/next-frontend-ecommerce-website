import React, { useEffect, useState } from 'react'
import { Box, Button, Theme, Typography } from '@mui/material';
import Link from 'next/link';
import { makeStyles, createStyles } from '@material-ui/core';
import { runFireworks } from '../../../lib/utils'
import { AiFillShopping } from "react-icons/ai";
import { BsBagCheckFill } from 'react-icons/bs';
import useCart from '../../context/cart/CartContext';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrap_succes:{
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(10),
            [theme.breakpoints.down('sm')]:{
                marginTop: theme.spacing(20)
            }
        },
        container:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column'
        },
        success__btn:{
            backgroundColor: 'black',
            color: 'white',
            height: '60px',
            width: '220px',
            padding: theme.spacing(1),
            fontSize: 15,
            fontFamily: 'FuturaPTDemi',
            '&:hover':{
                backgroundColor: 'rgba(237, 108, 2, 0.7)',
                color: 'white'
            }
        },
        iconShopping:{
            fontSize: 300,
            [theme.breakpoints.down('sm')]:{
                fontSize: 200
            }
        },
        text_wrap:{
            textAlign: 'center',
            fontFamily: 'FuturaPTDemi'
        },
        text_head:{
            fontFamily:'FuturaPTDemi',
            marginTop: theme.spacing(2),
            fontSize: 45,
            [theme.breakpoints.down('sm')]:{
                fontSize: 35,
            }
        },
        text_email:{
            fontFamily:'Alata',
            marginTop: theme.spacing(2),
            fontSize: 28,
            [theme.breakpoints.down('sm')]:{
                fontSize: 20
            }
        },
        text_contact:{
            fontFamily:'Work Sans',
            marginTop: theme.spacing(2),
            fontSize: 20,
            [theme.breakpoints.down('sm')]:{
                fontSize: 19,
                lineHeight: 3,
            }
        }
    })
)

const Success = () => {

    const { setShoppingCart, setTotalPrice, setTotalQuantites } = useCart()

    const classes = useStyles()

    useEffect(() => {
        localStorage.clear()
        setShoppingCart([])
        setTotalPrice(0)
        setTotalQuantites(0)
        runFireworks()
    },[setShoppingCart, setTotalPrice, setTotalQuantites])
    return (
        <Box className={classes.wrap_succes}>
            <Box className={classes.container}>
                    <Box sx={{textAlign: 'center'}}>
                        <BsBagCheckFill className={classes.iconShopping} />
                    </Box>

                    <Box className={classes.text_wrap}>
                        <Typography className={classes.text_head}>Thank you for your order!</Typography>
                        <Typography className={classes.text_email} >Check your email inbox for the recipt.</Typography>
                        <Typography className={classes.text_contact}>If you have any questions, please email : 
                        <a href='mailto: saeedo0o1@hotmail.com'> saeedo0o1@hotmail.com</a>
                        </Typography>
                    </Box>
                    
                    
                    <Link href='/' passHref>
                        <Box mt={6} component={'div'}>
                            <Button variant='contained' className={classes.success__btn}>
                                Continue Shopping
                            </Button>
                        </Box>
                    </Link>
            </Box>
        </Box>
    );
}

export default Success