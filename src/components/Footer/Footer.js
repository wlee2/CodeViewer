import React from 'react';
import styles from './Footer.module.scss'


const Footer = ({Footer}) => {
    return (
        <div className={styles.Footer}>
            {Footer}
        </div>
    );
};

export default Footer;