import React, {Component}  from 'react';
import styles from "./Card.module.css";


class Card extends Component {
    render() {
        const { image, name, cost} = this.props;
        return (
            <div className={styles.continerr}>
                <img src={image} />
                <h3>{name}</h3>
                <p>{cost}</p>
            </div>
        );
    }
}

export default Card;



