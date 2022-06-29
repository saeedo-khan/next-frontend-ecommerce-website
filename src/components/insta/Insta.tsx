import React from 'react'
import Image from 'next/image';

// images
import image1 from '../../assets/images/insta/1.jpg'
import image2 from '../../assets/images/insta/2.jpg'
import image3 from '../../assets/images/insta/3.jpg'
import image4 from '../../assets/images/insta/4.jpg'
import image5 from '../../assets/images/insta/5.jpg'

// styles
import styles from './insta.module.css'

const Insta = () => {
    return (
        <div className={styles.insta}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <Image 
                    src={image1} 
                    alt='women' 
                    objectFit='cover'
                    layout='fill'
                     />
                </div>
                <div className={styles.img}>
                    <Image src={image2} alt='female' objectFit='cover' layout='fill' />
                </div>
                <div className={styles.img}>
                    <Image src={image3} alt='watches' objectFit='cover' layout='fill'/>
                </div>
                <div className={styles.img}>
                    <Image src={image5} alt='shoes' objectFit='cover' layout='fill'/>
                </div>
                <div className={styles.img}>
                    <Image src={image4} alt='happy women' objectFit='cover' layout='fill'/>
                </div>
            </div>
        </div>
    );
}

export default Insta