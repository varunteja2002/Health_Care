import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="section-title">Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>
      
      <div className="activity-bars">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="bar-container">
            <div className="bar" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
            <div className="bar-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;