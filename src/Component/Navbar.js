import React from 'react';
import styles from "./Navbar.module.css";
import clogo from "../Images/filelogo.jpg";
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listcontainer}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div className={styles.logo}>
                < img className={styles.logo} src={clogo} alt="logo" />
            </div>
        </header>
    );
};

export default Navbar;