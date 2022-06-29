import React from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
// image
import gesture from '../../assets/images/gesture.jpg'
import bags from '../../assets/images/bags.jpg'
import joyful from '../../assets/images/joyful.jpg'
// style
import useStyles from './Collection.styles';
import Link from 'next/link';

const Collections = () => {

    const classes = useStyles(useStyles)

    return (
        <Box mt={8} className={classes.collections}>
            <Box className={classes.container}>

                <Box className={classes.section1}>
                    <Link href={`/men-fashion`} passHref>
                        <Box className={classes.Box1} component={'div'}>
                            <Image
                            src={joyful}
                            alt='collection'
                            layout='fill'
                            objectFit='cover'
                            className={classes.modelImg}
                            />
                            <Box sx={{position: 'absolute'}} className={classes.box1_text}>
                                <Typography className={classes.box1_title} >Men Fashion</Typography>
                                <Typography  className={classes.subtitle}>Quisque condimentum ipsum at velit hendrerit venenatis.</Typography>
                                <Typography  className={classes.box1_more}>DISCOVER MORE</Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Box className={classes.innerBoxes}>
                    <Link href={`/women-fashion`} passHref>
                            <Box className={classes.Box2}>
                                <Image
                                src={gesture}
                                alt='collection'
                                layout="fill"
                                objectFit='cover'
                                className={classes.modelImg}
                                />
                                <Box sx={{position: 'absolute'}} className={classes.box2_collectionTxt}>
                                    <Typography className={classes.box2_title}>Womens Fashion</Typography>
                                    <Typography variant='h6' className={classes.box2_subtitle}>Quisque condimentum ipsum at velit hendrerit venenatis.</Typography>
                                    <Typography variant='h5' className={classes.box2_more}>DISCOVER MORE</Typography>
                                </Box>
                            </Box>
                    </Link>
                        <Link href={`/kids-fashion`} passHref>
                            <Box className={classes.Box3}>

                                <Image
                                    src={bags}
                                    alt='collection'
                                    layout="fill"
                                    objectFit='cover'
                                    className={classes.modelImg}
                                    />
                                    <Box sx={{position: 'absolute'}} className={classes.box3_collectionTxt}>
                                        <Typography variant='h4' className={classes.box3_title}>Kids Fashion</Typography>
                                        <Typography variant='h6' className={classes.box3_subtitle}>Quisque condimentum ipsum at velit hendrerit venenatis.</Typography>
                                        <Typography variant='h5' className={classes.box3_more}>DISCOVER MORE</Typography>
                                    </Box>
                            </Box>
                        </Link>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}


export default Collections