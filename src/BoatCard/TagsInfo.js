import React from 'react';

export default function TagsInfo({ tags }) {
    return (
        <div style={rootStyle}>
            {tags.map(tag => (
                <div>
                {`✔️ ${tag}`}
            </div>
            ))}
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
