import React from 'react';
import styles from "./Banner.module.css";
import banner from "../Images/bb.png";
const Banner = () => {
    return (
        <div className={styles.container}>
            < img src={banner} alt="banner" />
            <div className={styles.textban}>
                <h1>Coffee</h1>
                <p>
                    I Need Coffe For <span>Live</span>
                </p> 
            </div>
        </div>
        
        
    );
};

export default Banner;