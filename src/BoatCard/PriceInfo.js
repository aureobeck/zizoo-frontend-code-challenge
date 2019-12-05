import React from 'react';

export default function PriceInfo({ price, periodType }) {
    return (
        <div style={rootStyle}>
            <div>
                {'FROM'}
            </div>
            <div>
                {`$ ${price} ${periodType}`}
            </div>
        </div>
    );
}

const rootStyle = {
    width: '50%',
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
}