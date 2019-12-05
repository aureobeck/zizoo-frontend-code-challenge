import React from 'react';
import Column from './Column';
import Row from './Row';

export default function PriceInfo({ price, periodType, isMobile }) {
    const ColumnIfMobile = isMobile ? Column : Row;
    
    return (
        <ColumnIfMobile style={{...rootStyle,  width: isMobile ? '50%' : null}}>
            <div>
                {'FROM'}
            </div>
            <div>
                {`$ ${price} ${periodType}`}
            </div>
        </ColumnIfMobile>
    );
}

const rootStyle = {
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
}