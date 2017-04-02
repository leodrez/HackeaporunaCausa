import React from 'react';
import './styles.scss';

const AppointmentBlock = props => {
  return (
    <div className="appointment">
      <p>{props.details}</p>
      <p>{props.date}</p>
    </div>
  );
};

const DaySection = props => {
  return (
    <div className="appointment-day-section">
      <div className="day">
        {props.day}
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
      <DaySection day="Monday"/>
      <AppointmentSection>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
        <AppointmentBlock details="Pick up john at 10pm" date="jan 31, 2018"/>
      </AppointmentSection>
    </div>
  );
};

const Appointments = () => {
  return (
    <div>
      <h2>Appointments</h2>
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
