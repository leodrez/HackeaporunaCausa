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
      <p className="from-to">{props.date}</p>
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

const Appointment = ({ push, appState }) => {
  const appointments = () => {
    return appState.appointment.map(item => {
      return (
        <AppointmentBlock
          key={item.date}
          push={push}
          details="Pick up john at 10pm"
          date={item.date}
        />
      );
    });
  };

  return (
    <div className="appointment-wrapper">
      <DaySection day="Monday" number="31"/>
      <AppointmentSection>
        {appState && appState.appointment && appointments()}
      </AppointmentSection>
    </div>
  );
};

const Appointments = props => {
  const appState = props.appState;
  const push = (to = '/appointment-details/10') => props.router.push(to);
  return (
    <div>
      <Appointment
        push={push}
        appState={appState}
      />
    </div>
  );
};

export default withRouter(Appointments);
