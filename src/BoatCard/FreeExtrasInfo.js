import React from 'react';
import Column from './Column';
import Row from './Row';

export default function FreeExtrasInfo({ freeExtras, isMobile }) {
  const ColumnIfMobile = isMobile ? Column : Row;

  return (
    <ColumnIfMobile style={rootStyle}>
      <div style={elementStyle}>
        {'FREE EXTRAS'}
      </div>
      <div style={elementStyle}>
        {freeExtras.join(', ')}
      </div>
    </ColumnIfMobile>
  );
}

const rootStyle = {
  padding: '10px'
};

const elementStyle = {
  padding: '2px',
};
