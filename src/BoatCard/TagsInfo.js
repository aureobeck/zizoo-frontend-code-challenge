import React from 'react';
import Column from './Column';
import Row from './Row';

export default function TagsInfo({ tags, isMobile }) {
    const ColumnIfMobile = isMobile ? Column : Row;

    return (
        <ColumnIfMobile style={rootStyle}>
            {tags.map(tag => (
                <div style={tagStyle}>
                    {`✔️ ${tag}`}
                </div>
            ))}
        </ColumnIfMobile>
    );
}

const rootStyle = {
    padding: '10px'
};

const tagStyle = {
    padding: '2px',
    marginRight: '2px',
};
