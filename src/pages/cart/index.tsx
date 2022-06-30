import { Box,Button,Container,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography } from '@mui/material';
import React from 'react'
import useCart, { ICartItems } from '../../context/cart/CartContext';
import Link from 'next/link';
import getStripe from '../../../lib/getStripe'
import { parseCookies } from 'nookies'
// types
import CartItem from '../../components/CartItem/CartItem';

// icons
import { BsCart } from "react-icons/bs";
import Register from '../../components/register/Register';

// styles
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
        },
        emptycart_text:{
            fontSize: 50,
            [theme.breakpoints.down('sm')]:{
                fontSize: 30
            }
        },
        emptycart_text1:{
            fontSize: 25,
            textAlign: 'center',
            [theme.breakpoints.down('sm')]:{
                fontSize: 19
            }
        }
    })
)




interface CartProps {
    item: ICartItems;
    CartItem: ICartItems;
}





const Cart: React.FC<CartProps> = () => {

    const { shoppingCart, totalPrice } = useCart()

    const classes = useStyles(useStyles)
    
    const cookies = parseCookies()

    const cartItems = shoppingCart.map((item) => 
        <CartItem item={item} key={item.id}/>
    )

    // Applying stripe payment function
    const handleCheckout = async () => {
        const stripe =  await getStripe()

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(shoppingCart)
        })

        if(response.status === 500) return;

        const data = await response.json();

        stripe.redirectToCheckout({ sessionId: data.id });
    }
    
    return(
        <Box>
            {!cookies.formClient? (
                <Box mt={13} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Register />
                </Box>
            ) : (
            <Box>

                {shoppingCart.length >= 1? (
                <Box mt={14}>
                    <Box ml={4}>
                        <Box mt={4} mb={4}>
                            <Typography variant='h4'><Box component='span' sx={{color: 'rgba(0,0,0,0.5)', cursor:'pointer'}}> <Link href='/'>Home</Link> </Box>  /  Cart</Typography>
                        </Box>
                    </Box>
                <Box sx={{width: '100%', height: '1px', background: 'rgba(0,0,0,0.2)'}}></Box>

                <Box mt={16}>
                    <Box sx={{width: '90%', margin: '0 auto'}}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{width: '20%'}}>
                                            <Typography variant='h5' fontWeight={600}>Product</Typography>
                                        </TableCell>
                                        <TableCell sx={{width: '40%'}}>
                                            <Typography variant='h5' fontWeight={600}>Description</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='h5' fontWeight={600}>Price</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='h5' fontWeight={600}>Quantity</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='h5' fontWeight={600}>Total</Typography>                                    
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='h5' fontWeight={600}>Delete</Typography>                                    
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {cartItems}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>

                {/* Checkout and total price */}
                <Box className={classes.container_shopping}>
                    <Box className={classes.wrapBtn_shopping}>
                        <Link href='/' passHref>
                            <a>
                            <Button variant='contained' className={classes.btn_shopping}>Continue shopping</Button>
                            </a>
                        </Link>
                    </Box>
                    <Box className={classes.wrap_checking}>
                        <Box className={classes.container_totalPrice}>
                            <Typography className={classes.text_price}>Total Price :</Typography>
                            <Typography className={classes.price}>$ {totalPrice}</Typography>
                        </Box>
                        <Box mt={10} sx={{textAlign: 'center'}}>
                            <Button variant='contained' color='secondary' onClick={handleCheckout} sx={{
                            backgroundColor: '#333',
                            color: 'white',
                            fontSize: 18,
                            textTransform: 'capitalize',
                            '&:hover':{
                                backgroundColor: '#EE9051'
                            }
                            }}>
                                Checkout
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            ) : (
            <Box sx={{display: 'flex', alignItems:'center',justifyContent: 'center', height: '80vh', flexDirection: 'column'}}>
                <Box sx={{textAlign: 'center'}}>
                    <BsCart fontSize={300} />
                </Box>

                <Box mt={4}>
                    <Typography fontFamily='FuturaPTDemi' className={classes.emptycart_text}>Your cart are empty </Typography>
                    <Typography fontFamily='FuturaPTDemi' className={classes.emptycart_text1}>What are you waiting for? </Typography>
                </Box>
                <Box>
                    <Link href='/' passHref>
                            
                        <Button variant='contained' 
                        component={'a'}
                        sx={{
                            backgroundColor: 'black',
                            fontFamily:'FuturaPTDemi',
                            textTransform: 'capitalize',
                            fontSize: 18,
                            mt: 7,
                            '&: hover':{
                                backgroundColor: '#EE9051'
                            }
                        }}>
                            
                            Shopping now
                        </Button>
                    </Link>
                </Box>
            </Box>
            )}
                </Box>
            )}

            
        </Box>
    )
    
        
}

export default Cart


