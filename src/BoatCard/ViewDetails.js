import React from 'react';
import { pinkishGrey, charcoalGrey, paleRed, white } from '../constants/colors';

export default function ViewDetails({ isMobile }) {
    return (
        <div style={{...rootStyle,  width: isMobile ? '50%' : null}}>
          <div style={labelStyle}>
            {'⚡️ DIRECT BOOKING'}
          </div>
          <div style={buttonStyle}>
            {'VIEW DETAILS'}
          </div>
        </div>
    );
}

const rootStyle = {
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px',
    textAlign: 'center'
};

const labelStyle = {
  padding: '2px',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontSize: '12px',
  color: charcoalGrey,
};

const buttonStyle = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '16px',
  backgroundColor: paleRed,
  color: white,
  padding: '5px'
};