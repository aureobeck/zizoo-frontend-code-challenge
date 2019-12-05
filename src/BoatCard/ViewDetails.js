import React from 'react';

export default function ViewDetails({ isMobile }) {
    return (
        <div style={{...rootStyle,  width: isMobile ? '50%' : null}}>
          <div>
            {'DIRECT BOOKING'}
          </div>
          <div>
            {'VIEW DETAILS'}
          </div>
        </div>
    );
}

const rootStyle = {
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
};