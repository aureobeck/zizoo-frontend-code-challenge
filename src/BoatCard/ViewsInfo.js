import React from 'react';

export default function ViewsInfo({ views }) {
    return (
        <div style={rootStyle}>
            {`HOT ${views} views in the last 24h`}
        </div>
    );
}

const rootStyle = {
    width: '30%',
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
}
