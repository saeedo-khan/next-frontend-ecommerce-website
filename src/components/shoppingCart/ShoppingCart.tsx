import { Box, IconButton, Typography, Paper, Button } from '@mui/material';
import React from 'react'
import Image from 'next/image';
import useCart from '../../context/cart/CartContext';
import { formImageToUrl } from '../../../utility/url';
import Link from 'next/link';

// styles
import useStyles from './ShoppingCart.styles'

// icons
import { BsPlusLg } from "react-icons/bs";
import { BsCart } from "react-icons/bs";




const ShoppingCart= () => {

    
    const { shoppingCart, onRemove, totalPrice} = useCart()

    const classes = useStyles(useStyles)


    const items = shoppingCart.map((item, idx) => 
        <Paper className={classes.cart_content} elevation={2} key={idx} sx={{cursor: 'pointer'}}>
                                
            <Box className={classes.cart_icon} sx={{position: 'absolute'}}>
                <IconButton size='small' sx={{transform: 'rotate(45deg)'}} onClick={() =>{ 
                    // dispatch({type: 'REMOVE_PRODUCT', payload: item})
                    onRemove(item)
                }}>
                    <BsPlusLg color='black' />
                </IconButton>
            </Box>

            <Link href={`/product/${item.id}`}>
                <>
                <Box className={classes.imgContent}>
                    <Box className={classes.imgContainer}>
                        <Image 
                            src={item.cartItem.data.attributes.image.data.attributes.formats.small.url}
                            alt={item.cartItem.data.attributes.title}
                            layout='responsive'
                            objectFit='cover'
                            width={90}
                            height={90}
                        />
                    </Box>
                </Box>
                <Box className={classes.textContent}>
                    <Typography className={classes.textContent_title}>{item.cartItem.data.attributes.title}</Typography>
                    <Typography className={classes.textContent_price}>$ {item.cartItem.data.attributes.price}</Typography>
                </Box>
                </>
            </Link>
        </Paper>
    )
    

    return (
        <Box>
            {shoppingCart.length >= 1 ? (
                <>
                    {items}

                    <Box display='flex' alignItems='center' justifyContent="center">
                        <Link href='/cart' passHref>
                            <Button variant='contained' className={classes.btn_checkout}>
                                Checkout
                            </Button>
                        </Link>
                        <Box ml={3}>TotalPrice: $ {totalPrice.toFixed(2)}</Box>
                    </Box>
                </>
            ) : (
                <Box mt={20}>
                    <Box sx={{textAlign: 'center'}}>
                        <BsCart fontSize={200} />
                    </Box>

                    <Box mt={4} sx={{textAlign: 'center'}}>
                        <Typography className={classes.emptyCart_text}>Your cart are empty </Typography>
                    </Box>
                </Box>
            )}

            
        </Box>
    );
}

export default ShoppingCart