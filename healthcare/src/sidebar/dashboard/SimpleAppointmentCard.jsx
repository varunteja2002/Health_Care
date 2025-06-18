import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ time, title, location }) => {
  return (
    <div className="simple-appointment-card">
      <div className="time-badge">{time}</div>
      <div className="appointment-info">
        <h5>{title}</h5>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;