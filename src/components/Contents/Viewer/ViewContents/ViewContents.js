import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from './ViewContents.module.scss'
import { atomOneDark } from 'react-syntax-highlighter/dist/styles/hljs';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const ViewContents = ({contents}) => {
    return (
        <div className={styles.ViewContents}>
            {
                <SyntaxHighlighter style={atomOneDark} showLineNumbers="true">
                    {contents}
                </SyntaxHighlighter>
            }    
        </div>
    );
};

export default ViewContents;