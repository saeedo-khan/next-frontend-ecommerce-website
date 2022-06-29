import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import { InferGetStaticPropsType } from 'next';
// types
import { PhotosData, Products } from '../../interfaces/types'
// component
import CustomizedAccordions from '../../components/accordion/Accordion';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';
// context
import useCart from '../../context/cart/CartContext';
// icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// styles
import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        product:{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: theme.spacing(20),
            marginBottom: theme.spacing(5),
            [theme.breakpoints.down('md')]:{
                flexDirection: 'column',
                marginTop: theme.spacing(6)
            }
            
        },
        productDetails:{
            width: '40%',
            [theme.breakpoints.down('md')]:{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        productDetails__container:{
            margin: '0 auto',
            width: '100%'
        },
        product_identy:{
            marginBottom: theme.spacing(3),
            [theme.breakpoints.down('md')]:{
                textAlign: 'center',
            }
        },
        product__price:{
            marginTop: theme.spacing(1),
            fontSize: 25,
            [theme.breakpoints.down('md')]:{
                marginTop: theme.spacing(2)
            }
        },
        product__title:{
            fontSize: 35,
            [theme.breakpoints.down('sm')]:{
                fontSize: 28
            }
        },
        product_addtoCart:{
            display: 'flex',
            marginBottom: theme.spacing(5),
            marginTop: theme.spacing(6),
            [theme.breakpoints.down('md')]:{
                marginBottom: theme.spacing(8),
                marginTop: theme.spacing(9),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
        product__count:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: theme.spacing(5),
            [theme.breakpoints.down('md')]:{
                marginLeft: theme.spacing(3)
            }
        },
        btn__addtoCart:{
            backgroundColor: '#333',
            color: 'white',
            fontWeight: 600,
            fontSize: 21,
            '&:hover':{
                backgroundColor: '#EE9051'
            }
        },
        container__magnify:{
            width: '50%',
            height: '716px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]:{
                width: '100%',
                marginTop: theme.spacing(10)
            }
        },
        container__accordion:{
            width: '80%',
            display: 'block',
            [theme.breakpoints.down('md')]:{
                margin: '0 auto'
            }
        }
    })
)



interface productIdProps {
    products: Products[];
    data:PhotosData[]
}


export const getStaticPaths: GetStaticPaths = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/products`)
    const products:productIdProps = await res.json()

    const paths = products.data.map((product) =>  {
        return{
            params: {
                productId: `${product.id}`
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/products/${params!.productId}?populate=*`)
    const productsData:Products = await res.json()

    return{
        props:{
            productsData
        }
    }
}


const ProductId = ({productsData}:InferGetStaticPropsType<typeof getStaticProps>) => {

    const {quanty, incQuanty, decQuanty, onAdd } = useCart()

    const classes = useStyles(useStyles)    


    
    return (
        <>
        <Box className={classes.product}>

            <Box className={classes.container__magnify}>
            
                <ReactImageMagnify
                enlargedImagePosition={'over'}
                isActivatedOnTouch={true}
                smallImage={{
                    alt: 'product',
                    isFluidWidth: true,
                    src:`${productsData.data.attributes.image.data.attributes.formats.medium.url}`,
                }}
                largeImage={{
                    src: `${productsData.data.attributes.image.data.attributes.formats.medium.url}`,
                    width: 1400,
                    height: 2200,
                }}
                ></ReactImageMagnify>
            </Box>

            <Box className={classes.productDetails}>
                <Box className={classes.productDetails__container}>
                    <Box className={classes.product_identy}>
                        <Typography className={classes.product__title} fontFamily='FuturaPTDemi'>{productsData.data.attributes.title}</Typography>
                        <Typography className={classes.product__price} fontFamily='FuturaPTDemi' fontWeight={600}>${productsData.data.attributes.price.toFixed(2)}</Typography>
                    </Box>

                            <Box className={classes.product_addtoCart}>
                                <Button variant='contained' className={classes.btn__addtoCart}
                                onClick={() => onAdd(productsData, quanty)}>
                                Add to Cart
                                </Button>
                                <Box className={classes.product__count}>
                                        <Box>
                                            <IconButton onClick={(e) => {
                                                e.stopPropagation()
                                                decQuanty()
                                            }}>
                                                <AiOutlineMinus />
                                            </IconButton>
                                        </Box>

                                        <Box ml={1} mr={1}>{quanty}</Box>
                                        
                                        <Box>
                                            <IconButton onClick={(e) => {
                                                e.stopPropagation()
                                                incQuanty()
                                            }}>
                                                <AiOutlinePlus />
                                            </IconButton>
                                        </Box>
                                </Box>

                            </Box>

                        <Box className={classes.container__accordion}>
                            <CustomizedAccordions  productDetail={productsData.data.attributes.description}/>
                        </Box>
                </Box>
            </Box>

        </Box>
        </>
    );
}

export default ProductId