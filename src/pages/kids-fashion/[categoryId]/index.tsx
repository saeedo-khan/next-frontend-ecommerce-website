import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image';
import Link from 'next/link'

// component
import { Grid, Box,  Divider, Typography } from '@mui/material';

// types
import { Photos, PhotosData, Datum } from '../../../interfaces/types';

// styles
import useStyles from './Category.styles'

// icons

interface Ipram{
    data:PhotosData[];
    categories: Photos[];
}

export const getStaticPaths: GetStaticPaths = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/kids-fashions`)
    const categories:Ipram = await res.json()


    const paths = categories.data.map((category) => {
        return{
            params: {
                categoryId: `${category.id}`
            }
        }
    })

    return{
        paths,
        fallback: false,
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/kids-fashions/${String(params?.categoryId)}?populate[products][populate][0]=image`)
    const data:Photos[] = await res.json()
    return{
        props:{
            categoryData: data
        }
    }
}




const Category = ({ categoryData }: InferGetStaticPropsType<typeof getStaticProps>) => {
   
    const classes = useStyles(useStyles)

    const data = categoryData.data.attributes.products.data



    const items = data.map((item:Datum) => 
        
            <Grid item key={item.id} xs={12} sm={6} md={4} className={classes.card}>
                <Link href={`/product/${item.id}`} passHref>
                    <Box className={classes.product} component={'div'}>
                        <Box className={classes.imgContainer}>
                            <Image 
                            src={item.attributes.image.data.attributes.formats.small.url} 
                            alt='product' 
                            layout='fill'
                            objectFit='initial'
                            />
                        </Box>
                        <Box className={classes.textProduct}>
                            <Box className={classes.textProduct__title}>{item.attributes.title}</Box>
                            <Typography className={classes.textProduct__price} variant='h6' fontWeight='600'>${item.attributes.price}</Typography>
                        </Box>
                        
                    </Box>
                </Link>
            </Grid>
    )


    return (
        <Box sx={{backgroundColor: 'rgba(204, 204, 204, 0.1)'}} pt={13}>
            
            <h1 style={{textTransform: 'capitalize', textAlign: 'center', marginTop: '2rem'}}>
                 <Link href='/kids-fashion' passHref>
                    <a style={{color: 'rgba(0,0,0,0.5)', cursor: 'pointer'}}>Kids-Fashion/</a>
                 </Link> {categoryData.data.attributes.categories}
            </h1>
            <Box mt={5} mb={14}>
            <Divider />
            </Box>
            <Grid container spacing={10} sx={{maxWidth: '1800px', margin: '0 auto', width: '100%'}}>
             {items}
             {items}
             {items}
             {items}
             {items}
             {items}
             {items}
             {items}
             {items}
            </Grid>
        </Box>
    );
}

export default Category