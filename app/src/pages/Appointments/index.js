import React from 'react';
import './styles.scss';

const AppointmentBlock = props => {
  return (
    <div
      className="appointment"
      onClick={() => alert('clicked')}
    >
      <p>{props.details}</p>
      <p className="from-to">{props.from} - {props.to}</p>
    </div>
  );
};

const DaySection = props => {
  return (
    <div className="appointment-day-section">
      <div className="day">
        <h4 className="date">{props.day}</h4>
        <h4 className="date">{props.number}</h4>
      </div>
    </div>
  )
};

const AppointmentSection = props => {
  return (
    <div className="appointment-section">
      {props.children}
    </div>
  );
};

const Appointment = props => {
  return (
    <div className="appointment-wrapper">
      <DaySection day="Monday" number="31"/>
      <AppointmentSection>
        <AppointmentBlock details="Pick up john at 10pm" from="10am" to="12am"/>
        <AppointmentBlock details="Pick up john at 10pm" from="10am" to="12am"/>
        <AppointmentBlock details="Pick up john at 10pm" from="10am" to="12am"/>
      </AppointmentSection>
    </div>
  );
};

const Appointments = () => {
  return (
    <div>
      <Appointment/>
      <Appointment/>
      <Appointment/>
      <Appointment/>
      <Appointment/>
      <Appointment/>
      <Appointment/>
      <Appointment/>
      <Appointment/>
    </div>
  );
};

export default Appointments;
