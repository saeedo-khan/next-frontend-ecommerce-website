import React from 'react'
import { Box,IconButton,TableCell,TableRow,Typography } from '@mui/material';
import Image from 'next/image';
import { formImageToUrl } from '../../../utility/url';


// icons
import { RiCloseFill } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import useCart, { ICartItems } from '../../context/cart/CartContext';


interface CartItemProps {
    item: ICartItems
}

const CartItem: React.FC<CartItemProps> = ({item}) => {


    const { quanty, decQuanty, incQuanty, onRemove, toggleCartItemQuanitity } = useCart()

            return (
                <TableRow>
                <TableCell>
                    <Box sx={{width: '220px', height: '250px', position: 'relative', margin: '5rem 0'}}>
                        <Image
                        src={item.cartItem.data.attributes.image.data.attributes.formats.medium.url}
                        alt={item.cartItem.data.attributes.title}
                        layout='fill'
                        objectFit='cover'
                        />
                    </Box>
                </TableCell>
    
                <TableCell>
                    <Box sx={{width: '40%', cursor: 'default'}}>
                        <Typography>{item.cartItem.data.attributes.title}</Typography>
                        <Typography>SKU:<Box component='span'>N/A</Box></Typography>
                    </Box>
                </TableCell>
    
                <TableCell>
                    <Typography>$ {item.cartItem.data.attributes.price}</Typography>
                </TableCell>
    
                <TableCell>
                    <Box sx={{display: 'flex'}}>
                        <Box>
                            <IconButton onClick={() => toggleCartItemQuanitity(item.id, 'inc')}>
                                <AiOutlinePlus />
                            </IconButton>
                        </Box>
                        <Box 
                        mr={2}
                        ml={2}
                        sx={{width: '80px', height: '40px', border: '1px solid rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20}}>
                            {item.qty}
                        </Box>
                        <Box>
                            <IconButton onClick={() => toggleCartItemQuanitity(item.id, 'dec')}>
                                <AiOutlineMinus />
                            </IconButton>
                        </Box>
                    </Box>
                </TableCell>
    
                <TableCell>
                    <Typography>$ {item.cartItem.data.attributes.price * item.qty}</Typography>
                </TableCell>
    
                <TableCell>
                    <Box sx={{ width: '40%', textAlign: 'center'}}>
                        <IconButton onClick={() => onRemove(item)}>
                            <RiCloseFill />
                        </IconButton>
                    </Box>
                </TableCell>
    
            </TableRow>
    
            );
}

export default CartItem