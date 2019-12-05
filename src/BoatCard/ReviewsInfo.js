import React from 'react';

export default function ReviewsInfo({ reviews }) {
    return (
        <div style={rootStyle}>
            <div>
                {`⭐️⭐️⭐️⭐️⭐️`}
            </div>
            <div>
                {`${reviews} REVIEWS`}
            </div>
        </div>
    );
}

const rootStyle = {
    width: '40%',
    borderColor: '#000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
};