import React from 'react';

function Header(props) {
    return (
        <div>
            <h1><u>График лицензирования организаций</u></h1>
            <div className="main-line">
                <h3>не прошли лицензирование -</h3>
                <div className="line-red"></div>
            </div>
            <div className="main-line">
                <h3>прошли лицензирование -</h3>
                <div className="line-blue"></div>
            </div>
        </div>
    );
}

export default Header;