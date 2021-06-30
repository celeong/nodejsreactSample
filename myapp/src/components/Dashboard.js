import React from 'react';

export const Dashboard = ({numberOfUsers, getAllUsers}) => {
    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: '#688c74',
        color: 'white',
        textAlign: 'center'
    };
    
    return (
        <div style={headerStyle} className="display-board">
            <h4>Users Created</h4>
            <div className="number">
                {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    );
};
