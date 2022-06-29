import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image';
import Link from 'next/link'

// component
import { Grid, Box, Divider, Typography, useTheme, useMediaQuery } from '@mui/material';

// types
import { Photos, PhotosData, Datum } from '../../../interfaces/types';

// styles
import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container_card:{
            maxWidth: '1800px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            [theme.breakpoints.down('xs')]:{
                alignItems: 'center'
            }
        },
        card:{
            margin: '0',
            padding: '0',
            [theme.breakpoints.down('sm')]:{
                marginBottom: theme.spacing(10),
                textAlign: 'center',
            }
        },
        product:{
            width: '300px',
            height: '400px', //500
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(14),
            marginLeft: theme.spacing(2),
            [theme.breakpoints.down('sm')]:{
                marginLeft: theme.spacing(3)
            },
            [theme.breakpoints.down('xs')]:{
                width: '300px',
                height: '390px',
                marginBottom: theme.spacing(5),
                marginLeft: '0'
            }
        },
        imgContainer:{
            width: '300px',
            height: '350px',
            position: 'relative',
            boxShadow: theme.shadows[1],
            backgroundColor: 'rgba(200, 200, 200,0.1)',
            [theme.breakpoints.down('xs')]:{
                width: '290px',
                height: '350px',
            }
        },
        textProduct:{
            marginTop: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        textProduct__title:{
            color: 'black',
            fontFamily: 'FuturaPT-Book',
            fontSize: '1.2rem',
            [theme.breakpoints.down('sm')]:{
                fontSize: 20
            }
        },
        textProduct__price:{
            color: 'black',
            padding: theme.spacing(1),
            borderRadius: '5px',
            marginTop: theme.spacing(1),
            cursor: 'pointer',
            fontSize: 25,
            fontFamily: 'FuturaPT-Book',
            [theme.breakpoints.down('sm')]:{
                fontSize: 21,
                marginTop: '0',
                paddingTop: '0'
            }
        },
        addItem:{
            display: 'block',
            textAlign: 'center'
        }
    })
)


// icons

interface Ipram{
    data:PhotosData[];
    categories: Photos[];
}

export const getStaticPaths: GetStaticPaths = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/men-fashions`)
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


    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/men-fashions/${String(params?.categoryId)}?populate[products][populate][0]=image`)
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


    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    


    const items = data.map((item:Datum) => 
        
            <Grid item key={item.id} xs={12} sm={6} md={4} className={classes.card} >
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
                            <Typography className={classes.textProduct__price} >${item.attributes.price}</Typography>
                        </Box>
                        
                    </Box>
                </Link>
            </Grid>
    )


    return (
        <Box sx={{backgroundColor: 'rgba(204, 204, 204, 0.1)'}} pt={13}>
            
            <h1 style={{textTransform: 'capitalize', textAlign: 'center', marginTop: '2rem'}}>
                 <Link href='/men-fashion' passHref>
                    <a style={{color: 'rgba(0,0,0,0.5)', cursor: 'pointer'}}>Men-Fashion/</a>
                 </Link> {categoryData.data.attributes.categories}
            </h1>
            <Box mt={5} mb={6}>
            <Divider />
            </Box>

            <Grid container 
            spacing={isSmall? 3 : 10} 
            className={classes.container_card} 
            direction={isSmall? 'column' : 'row'}
            >
             {items}
             {items}
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