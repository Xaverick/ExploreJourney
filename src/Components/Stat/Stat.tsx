import React from 'react';
import './Stat.css';


const StatComponent = ({ percentage }: { percentage: number }) => {
  const progressStyle = {
    background: `conic-gradient(#4d5bf9 ${percentage * 3.6}deg, #e0e0e0 ${percentage * 3.6}deg 360deg)`
  };

  return (
    <div className="stat-container">
      <div className="circle" style={progressStyle}>
        <div className="inner-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatComponent;
