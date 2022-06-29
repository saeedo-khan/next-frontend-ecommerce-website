import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Header from '../components/header/Header'
import { Testmonials } from '../components/testmonials/Testmonials';
import Collections from '../components/collections/Collections';
import  Brands  from '../components/brands/Brands';
import Popular from '../components/popular/Popular';
import  NewsLetter  from '../components/newsLetter/NewsLetter';
import  Insta  from '../components/insta/Insta';
import { Box, Typography } from '@mui/material';
import {  Photos } from '../interfaces/types';



export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/men-fashions/1?populate[products][populate][0]=image`)
  const data:Photos[] = await res.json()

  const getNewItems = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/new-items/?populate[products][populate][0]=image`)
  const newItems = await getNewItems.json()

  return {
    props:{
      products: data,
      newProducts: newItems
    }
  }
}




const Home: NextPage = (props: InferGetStaticPropsType <typeof getStaticProps>) => {


  const items = props.products.data.attributes.products.data
  const newItems =  props.newProducts.data[0].attributes.products.data


  return (
    <>
      <Header />

      <Box>
        <Box sx={theme => ({
          width: '40%',
          marginLeft: theme.spacing(8),
          marginTop: theme.spacing(15),
          color: '#333',
          [theme.breakpoints.down('lg')]:{
            width: '80%',
            marginBottom: theme.spacing(10)
          },
          [theme.breakpoints.down('sm')]:{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            marginBottom: theme.spacing(10)
          }
        })}>
            <Typography variant='h2' fontFamily='FuturaPT-Book'>New in store</Typography>
            <Typography variant='body1' fontFamily='FuturaPT-Book'>
            I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.
            </Typography>
        </Box>
      <Popular products={items} /> 
      </Box>

      <Testmonials />
      <Collections />
      <Brands />
      <Box>
        <Box sx={theme => ({
          width: '40%',
          marginLeft: theme.spacing(8),
          marginTop: theme.spacing(15),
          color: '#333',
          [theme.breakpoints.down('lg')]:{
            width: '80%',
            marginBottom: theme.spacing(10)
          },
          [theme.breakpoints.down('sm')]:{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            marginBottom: theme.spacing(10)
          }
        })}>
            <Typography variant='h2' fontFamily='FuturaPT-Book'>Popular Collections</Typography>
            <Typography variant='body1' fontFamily='FuturaPT-Book' sx={{lineHeight: '25px'}}>
            I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.
            </Typography>
        </Box>
      <Popular products={newItems.reverse()}/>
      </Box>
      <NewsLetter />
      <Insta />
    </>
  )
}

export default Home