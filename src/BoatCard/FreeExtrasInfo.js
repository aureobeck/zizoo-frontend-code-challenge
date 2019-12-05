import React from 'react';

export default function FreeExtrasInfo({ freeExtras }) {
    return (
        <div style={rootStyle}>
        <div>
          {'FREE EXTRAS'}
        </div>
        <div>
          {freeExtras.join(', ')}
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
};
