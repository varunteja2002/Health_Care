import React from 'react'
import './CalenderView.css';

const CalendarView = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({length: 31}, (_, i) => i + 1);
  
  const appointments = {
    15: ['09:00'],
    18: ['11:00'],
    20: ['13:00', '15:00']
  };

  return (
    <div className="calendar-view">
      <h3 className="section-title">October 2021</h3>
      <div className="calendar-grid">
        {days.map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        
        {dates.map(date => (
          <div key={date} className={`calendar-date ${appointments[date] ? 'has-appointment' : ''}`}>
            {date}
            {appointments[date]?.map(time => (
              <div key={time} className="appointment-time">{time}</div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="appointment-cards">
        <div className="appointment-card">
          <h4>Dentist</h4>
          <p>9.00-11.00</p>
          <p>Dr.Cameron Williamson  </p>
        </div>
        <div className="appointment-card">
          <h4>Physiotherapy</h4>
          <p>11:00-12.00</p>
          <p>Dr.Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;