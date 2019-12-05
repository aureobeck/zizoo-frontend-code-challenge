import React from 'react';

export default function Row({ children }) {
    return (
        <div style={rootStyle}>
            {children}
        </div>

    );
}

const rootStyle = {
    display: 'flex',
};
