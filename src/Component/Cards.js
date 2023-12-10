import React from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import cap from "../Images/bb.jpg";
import hot from "../Images/ee.jpeg";
import shake from "../Images/sh.jpg";
import spre from "../Images/espresso.png";

const Cards = () => {
    return (
        <div className={styles.continer}>
            <Card image = {cap} name= "Spersso" cost="2 $" />
            <Card image = {hot} name= "Spersso" cost="2 $" />
            <Card image = {shake} name= "Spersso" cost="2 $" />
            <Card image = {spre} name= "Spersso" cost="2 $" />
        </div>
    );
};

export default Cards;