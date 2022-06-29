import React from 'react'
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay  } from "swiper";
import useStyles from './Testmonials.styles';
import { Testmonial } from './Testmonial';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay])
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS()


export const Testmonials = () => {

    const classes = useStyles(useStyles)

    return (
        
        <Box className={classes.testmonials} mt={10} paddingY={7}>
                <Box className={classes.textWrapper}>
                    <Box
                    sx={theme => ({
                        width: '40%',
                        marginLeft: theme.spacing(8),
                        color: '#333',
                        [theme.breakpoints.down('lg')]:{
                          width: '60%',
                          marginBottom: theme.spacing(10)
                        },
                        [theme.breakpoints.down('sm')]:{
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          width: '80%',
                          marginBottom: theme.spacing(10)
                        }
                      })}
                    >
                        <Typography variant='h2' fontFamily='FuturaPT-Book'>Testimonials</Typography>
                        <Typography variant='body1' fontFamily='FuturaPT-Book'>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                    </Box>
                </Box>

                <Box sx={{width: '80%', margin: '3rem auto'}}>

                 <Swiper
                    className={classes.swipe}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true}}
                    autoplay={true}
                    breakpoints={{
                        360: {
                        slidesPerView: 1,
                        },
                        500:{
                            slidesPerView: 1.5,
                        },
                        670:{
                            slidesPerView: 2,
                        },
                        1100:{
                            slidesPerView: 3
                        },
                        1500: {
                        slidesPerView: 4,
                        },
                    }}
                    >


                        <SwiperSlide>
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
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box className={classes.testmonial} sx={{position: 'relative'}}>
                                <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                                    <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
                                </Box>
                                <Box className={classes.wrapText}>
                                    <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                                </Box>
                                <Box className={classes.wrapName}>
                                    <Typography variant='h6' className={classes.name} fontWeight={600}>Andrea Ilunka</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box className={classes.testmonial} sx={{position: 'relative'}}>
                                <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                                    <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
                                </Box>
                                <Box className={classes.wrapText}>
                                    <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                                </Box>
                                <Box className={classes.wrapName}>
                                    <Typography variant='h6' className={classes.name} fontWeight={600}>Jose Portilla</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box className={classes.testmonial} sx={{position: 'relative'}}>
                                <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                                    <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
                                </Box>
                                <Box className={classes.wrapText}>
                                    <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                                </Box>
                                <Box className={classes.wrapName}>
                                    <Typography variant='h6' className={classes.name} fontWeight={600}>Edwin Diaz</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Box className={classes.testmonial} sx={{position: 'relative'}}>
                                <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                                    <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
                                </Box>
                                <Box className={classes.wrapText}>
                                    <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                                </Box>
                                <Box className={classes.wrapName}>
                                    <Typography variant='h6' className={classes.name} fontWeight={600}>Jonas Schmedtmann</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box className={classes.testmonial} sx={{position: 'relative'}}>
                                <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                                    <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
                                </Box>
                                <Box className={classes.wrapText}>
                                    <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                                </Box>
                                <Box className={classes.wrapName}>
                                    <Typography variant='h6' className={classes.name} fontWeight={600}>Edwin Diaz</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box className={classes.testmonial} sx={{position: 'relative'}}>
                                <Box className={classes.wrapTestmNumber} sx={{position: 'absolute'}}>
                                    <Typography variant='h1' className={classes.testmNumber} fontWeight={700}>#01</Typography>
                                </Box>
                                <Box className={classes.wrapText}>
                                    <Typography variant='h6' className={classes.text} fontWeight={600}>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                                </Box>
                                <Box className={classes.wrapName}>
                                    <Typography variant='h6' className={classes.name} fontWeight={600}>Jose Portilla</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        
                       
                    </Swiper>
                    

                </Box>

      </Box>
    );
}