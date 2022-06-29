import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import useStyles from './Header.styles'
import Image from 'next/image'

// icons
import { ImPinterest } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImFacebook } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';

// assets
import image from '../../assets/images/img_slider_home3.jpg'
import Link from 'next/link'


const Header = () => {


  const classes = useStyles(useStyles)  


    return(
      <Box component='header' className={classes.header}>

        <Box className={classes.containerHeader} >

          <Box className={classes.headerText}>

              <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'flex-end', marginTop: 'auto'}}>

              
                <Box className={classes.headerTextTop} component={motion.div}
                initial={{x: '80vw'}}
                animate={{x: 0}}
                transition={{type: 'spring', stiffness: 100, duration: 5, repeatType: 'reverse'}}
                >
                    <Typography className={classes.hero}>Attitude </Typography><Box className={classes.square}></Box>
                    <Typography className={classes.heroYear}>2022</Typography>

                </Box>

              

                <Box sx={{width: '100%'}} component={motion.div}
                initial={{x: '-80vw'}}
                animate={{x : 0}}
                transition={{type: 'spring', stiffness: 100, duration: 5, repeatType: 'reverse'}}
                >
                <Typography className={classes.headerTextBottom}>ebitis officia quoeq minus nesciunt sunt... </Typography>
                </Box>

              </Box>

              <Box className={classes.btnHeader} component={motion.div}
              initial={{scale: 1.4}}
              animate={{scale: 1}}
              transition={{type: 'spring', stiffness: 100, repeat: Infinity, duration: 5, repeatType: 'reverse'}}
              >
                <Link href='/women-fashion' passHref>
                  <Box component='a' className={classes.btn}>Collection now</Box>
                </Link>
              </Box>

              <Box className={classes.list}>

                <Box className={classes.listItem}>
                    <ImPinterest />
                </Box>

                <Box className={classes.listItem}>
                    <ImTwitter />
                </Box>
                
                <Box className={classes.listItem}>
                  <ImFacebook />
                </Box>
                
                <Box className={classes.listItem}>
                  <ImLinkedin2 />
                </Box>

              </Box>

          </Box>

          <Box className={classes.headerImg}>
            <Image 
            src={image}
            alt='model header image'
            objectFit='contain'
            priority
            className={classes.modelImage}
            />
          </Box>

        </Box>
    </Box>
    )
  
}

export default Header




