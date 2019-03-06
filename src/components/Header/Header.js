import React from 'react';

const Header = ({title}) => {
    return (
        <div>
            <h2 style={{textAlign: "center", margin: "0", padding: "0"}}>{title}</h2>
        </div>
    );
};

export default Header;