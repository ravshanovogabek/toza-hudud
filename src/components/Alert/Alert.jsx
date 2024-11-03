import React from 'react';
import './alert.css';

const Alert = ({ message, onClose }) => {
    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <span className="alert-message">{message}</span>
                <button onClick={onClose} className="alert-button">OK</button>
            </div>
        </div>
    );
};

export default Alert;
