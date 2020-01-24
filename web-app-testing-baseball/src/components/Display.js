import React from 'react';

const Display = ({ strikeCount, ballCount }) => {
    return (
        <div>
            <div>
                <h2>Strikes</h2>
                <h3>{strikeCount}</h3>
            </div>
            <div>
                <h2>Balls</h2>
                <h3>{ballCount}</h3>
            </div>
        </div>
    )
}
export default Display;
