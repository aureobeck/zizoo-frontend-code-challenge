import React from 'react';

export default function NumericInfo({ number, label, unity }) {
    return (
        <div style={rootStyle}>
            <div>
                {`${number}${unity || ''}`}
            </div>
            <div>
                {label}
            </div>
        </div>
    );
}

const rootStyle = {
    width: '20%',
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
};