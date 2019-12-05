import React from 'react';

export default function SailTypeInfo({ sailType }) {
    return (
        <div style={rootStyle}>
            <div>
              {'SAIL TYPE'}
            </div>
            <div>
              {sailType}
            </div>
          </div>
    );
}

const rootStyle = { 
    width: '33.3%',
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px' 
}
