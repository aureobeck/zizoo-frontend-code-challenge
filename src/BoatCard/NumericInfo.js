import React from 'react';
import { charcoalGrey, pinkishGrey } from '../constants/colors';

export default function NumericInfo({ number, label, unity }) {
    return (
        <div style={rootStyle}>
            <div style={numberStyle}>
                {`${number}${unity || ''}`}
            </div>
            <div style={labelStyle}>
                {label}
            </div>
        </div>
    );
}

const rootStyle = {
    width: '20%',
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '5px',
    textAlign: 'center'
};

const numberStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    color: charcoalGrey,
};

const labelStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    color: pinkishGrey,
}