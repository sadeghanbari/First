import React from 'react';
import styles from "./Logos.module.css"
import as from "../Images/images.png"
import ab from "../Images/images.jpg"
import ac from "../Images/images (1).jpg"
const logos = () => {
    return (
        <div className={styles.continer}>
            <h3>fdggf dfggf fd</h3>
            <div>
                <img src={as} alt="logo"/>
                <img src={ab} alt="logo"/>
                <img src={ac} alt="logo"/>
            </div>
        </div>
    );
};

export default logos;