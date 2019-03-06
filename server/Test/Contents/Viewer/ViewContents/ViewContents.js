import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from './ViewContents.module.scss'
import { atomOneDark } from 'react-syntax-highlighter/dist/styles/hljs';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import styled, { keyframes } from 'styled-components';

const ani = keyframes`
    from {
        transform: translateX(+60%);
    }
    to {
        transform: translateX(0%);
    }
`

const aniMobile = keyframes`
    from {
        transform: translateY(+100%);
    }
    to {
        transform: translateY(0%);
    }
`

const Contents = styled.div`
    margin-left: 250px;
    padding: 0 10px;
    pre {
        padding: 15px;
    }
    font-size: 13px;

    animation: ${ani} 1s ease-out;

    @media (max-width: 600px) {
        margin-left: 0;
        width: 100%;
        padding: 0;
        font-size: 11px;
        animation: ${aniMobile} 1s ease-out;
    }
`;

const ViewContents = ({contents, type}) => {
    return (
        <div className={styles.ViewContents}>
            {
                <SyntaxHighlighter language={type} style={atomOneDark} showLineNumbers="true">
                    {contents}
                </SyntaxHighlighter>
            }    
        </div>
    );
};

export default ViewContents;