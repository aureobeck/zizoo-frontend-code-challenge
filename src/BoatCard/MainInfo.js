import React from 'react';

export default function MainInfo({ name, year, city, country }) {
    return (
        <div style={rootStyle}>
            <div>
                {name}
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    {year}
                </div>
                <div>
                    {`${city}, ${country}`}
                </div>
            </div>
        </div>
    );
}

const rootStyle = {
    width: '70%',
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
};
