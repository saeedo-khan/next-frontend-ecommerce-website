import React, { useImperativeHandle,forwardRef } from 'react'
import { Box  } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay  } from "swiper";
import 'swiper/css/autoplay'

import { makeStyles, createStyles } from '@material-ui/core';
import { Theme } from '@mui/material';
// icons
import Image from 'next/image';
// images
import brand1 from '../../assets/images/brands/1.png'
import brand2 from '../../assets/images/brands/2.png'
import brand3 from '../../assets/images/brands/3.png'
import brand4 from '../../assets/images/brands/4.png'
import brand5 from '../../assets/images/brands/5.png'
import brand6 from '../../assets/images/brands/6.png'


SwiperCore.use([Autoplay])

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        brands:{
            maxWidth: '1300px',
            marginRight: 'auto',
            marginLeft: 'auto',
            [theme.breakpoints.down('xl')]:{
                maxWidth: '1300px'
            },
            [theme.breakpoints.down('lg')]:{
                maxWidth: '1100px'
            },
            [theme.breakpoints.down('md')]:{
                maxWidth: '700px'
            },
            [theme.breakpoints.down('sm')]:{
                maxWidth: '500px',
                width: '60%'
            }
        },
        wrapImg:{
            width: '150px',
            height: '170px',

        }
    })
)



const Brands = () => {


    const classes = useStyles()

    return (
        <Box mt={20} mb={5} className={classes.brands}>
            <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 1000
            }}
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
                        <Box className={classes.wrapImg}>
                            <Image
                            src={brand1}
                            alt='gucci'
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={classes.wrapImg}>
                            <Image
                            src={brand2}
                            alt='gucci'
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={classes.wrapImg}>
                            <Image
                            src={brand3}
                            alt='gucci'
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={classes.wrapImg}>
                            <Image
                            src={brand4}
                            alt='gucci'
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={classes.wrapImg}>
                            <Image
                            src={brand5}
                            alt='gucci'
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={classes.wrapImg}>
                            <Image
                            src={brand6}
                            alt='gucci'
                            />
                        </Box>
                    </SwiperSlide>
                    
                    
            </Swiper>
        </Box>
    );
}


export default Brands