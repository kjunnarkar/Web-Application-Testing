import React from 'react';

const Dashboard = ({ addStrikes, addBalls, addHit, addFoul, strikeCount, ballCount }) => {
    return (
        <div>
            <div>
                <button onClick={() => addStrikes(strikeCount)}>Strike</button>
                <button onClick={() => addBalls(ballCount)}>Ball</button>
                <button onClick={() => addHit()}>Hit</button>
                <button onClick={() => addFoul(strikeCount)}>Foul</button>
            </div>
        </div>
    )
}
export default Dashboard;
