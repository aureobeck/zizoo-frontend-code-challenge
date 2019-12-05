import React from 'react';
import Column from './Column';
import Row from './Row';

export default function SailTypeInfo({ sailType, isMobile }) {
  const ColumnIfMobile = isMobile ? Column : Row;

  return (
    <ColumnIfMobile style={rootStyle}>
      <div style={elementStyle}>
        {'SAIL TYPE'}
      </div>
      <div style={elementStyle}>
        {sailType}
      </div>
    </ColumnIfMobile>
  );
}

const rootStyle = {
  padding: '10px'
}

const elementStyle = {
  padding: '2px',
};
