import React from 'react';
import { pinkishGrey, charcoalGrey } from '../constants/colors';

export default function MainInfo({ name, year, city, country }) {
    return (
        <div style={rootStyle}>
            <div style={nameStyle}>
                {name}
            </div>
            <div style={{ display: 'flex' }}>
                <div style={infoStyle}>
                    {year}
                </div>
                <div style={infoStyle}>
                    {`${city}, ${country}`}
                </div>
            </div>
        </div>
    );
}

const rootStyle = {
    width: '70%',
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
};

const nameStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    color: charcoalGrey,
};

const infoStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    fontWeight: 'bold',
    color: charcoalGrey,

};