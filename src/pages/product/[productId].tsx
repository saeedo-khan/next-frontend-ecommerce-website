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
// styles
import  useStyles  from './product.styles'
// context
import useCart from '../../context/cart/CartContext';
// icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



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