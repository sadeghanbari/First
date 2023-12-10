import React, { Component } from 'react';
import styles from "./Search.module.css"

class Search extends Component {
    render() {
        return (
            <div className={styles.search}>
                <p>Search What You Want ? </p>
                <input placeholder="Search ..."/>
            </div>
        );
    }
}

export default Search;