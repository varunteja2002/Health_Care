import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>
      
      <div className="day-group">
        <h4 className="day-title">On Thursday</h4>
        <div className="thurs-App">
          <SimpleAppointmentCard 
          time="09:00 AM" 
          title="Dentist Appointment" 
          location="City Dental Clinic"
        />
        <SimpleAppointmentCard 
          time="02:30 PM" 
          title="Therapist Session" 
          location="Online"
        />
        </div>
      </div>
      
      <div className="day-group">
        <h4 className="day-title">On Saturday</h4>
        <div className='satur-App'>
          <SimpleAppointmentCard 
          time="11:00 AM" 
          title="Physiotherapy" 
          location="Health Center"
        />
        <SimpleAppointmentCard 
          time="04:00 PM" 
          title="Follow-up Checkup" 
          location="Main Hospital"
        />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;