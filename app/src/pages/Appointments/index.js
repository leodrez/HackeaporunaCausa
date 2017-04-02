import React from 'react';
import './styles.scss';
import { withRouter } from 'react-router';

const AppointmentBlock = props => {
  const push = props.push;
  return (
    <div
      className="appointment"
      onClick={() => push()}
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

const Appointment = ({ push }) => {
  return (
    <div className="appointment-wrapper">
      <DaySection day="Monday" number="31"/>
      <AppointmentSection>
        <AppointmentBlock push={push} details="Pick up john at 10pm" from="10am" to="12am"/>
        <AppointmentBlock push={push} details="Pick up john at 10pm" from="10am" to="12am"/>
        <AppointmentBlock push={push} details="Pick up john at 10pm" from="10am" to="12am"/>
      </AppointmentSection>
    </div>
  );
};

const Appointments = props => {
  console.log('props', props);
  const push = (to = '/appointment-details/10') => props.router.push(to);
  return (
    <div>
      <Appointment push={push}/>
    </div>
  );
};

export default withRouter(Appointments);
