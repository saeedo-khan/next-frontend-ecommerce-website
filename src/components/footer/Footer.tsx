import Image from 'next/image';
import React from 'react'

// logo
import logo from '../../assets/images/Pngtree.png'

// icons
import { CgInstagram } from "react-icons/cg";
import { ImPinterest } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImFacebook } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';


// style
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <Image 
                        src={logo} 
                        alt='logo'
                        objectFit='cover'
                        />
                    </div>
                    <div className={styles.newsletter}>
                        <span className={styles.wrapNewsletter}>
                            <p style={{paddingRight: '0.4rem'}}>Follow us on social media</p>
                            <CgInstagram />
                        </span>
                    </div>
                </div>

                <div className={styles.line}></div>

                <div className={styles.bottom}>

                    <div className={styles.copyRight}>
                        <p className={styles.copyRight__text}>Copyright © 2018 EngoTheme. All rights reserved.</p>
                    </div>

                    <div className={styles.socialContact}>
                        <div className={styles.icon1}>
                            <ImPinterest />
                        </div>
                        <div className={styles.icon2}>
                            <ImTwitter />
                        </div>
                        <div className={styles.icon3}>
                            <ImFacebook />
                        </div>
                        <div className={styles.icon4}>
                            <ImLinkedin2 />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}