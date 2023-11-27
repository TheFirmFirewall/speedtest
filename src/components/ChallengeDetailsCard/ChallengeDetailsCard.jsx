import React from "react";
import './ChallengeDetailsCard.css';

const ChallengeDetailsCard = ({ metricName, metricValue }) => {
    return (
        <div className="details-card-container">
            <div className="metric-name">{ metricName }</div>
            <div className="metric-value">{ metricValue }</div>
        </div>
    );
};

export default ChallengeDetailsCard;