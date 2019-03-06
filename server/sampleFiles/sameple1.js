import React from 'react';
import styles from './ViewContents.module.scss'

const ViewContents = ({contents}) => {
    return (
        <div className={styles.ViewContents}>
            {contents}
        </div>
    );
};

export default ViewContents;