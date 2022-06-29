import React from 'react'
import styles from './newsletter.module.css'

const NewsLetter = () => {
    return (
        <div className={styles.newsLetter}>
            <span className={styles.line}>
                <hr />
            </span>
            <div className={styles.content}>
                <h2>Get our latest update In Your Email</h2>
                <p>Subscribe now to get 15% off on any product</p>

                <div className={styles.text}>
                    <input type='text' placeholder='Your email addres..'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter