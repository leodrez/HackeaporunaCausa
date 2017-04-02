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

const Appointment = ({ push, appState, day, number }) => {
  const appointmentBlocks = (appointments) => {
    return appointments.map(appointment => {
      return (<AppointmentBlock
        key={appointment.date}
        push={push}
        details="Pick up john at 10pm"
        date={appointment.date}
      />)
    })
  };

  return (
    <div className="appointment-wrapper">
      <DaySection day={day} number={number}/>
      <div className="appointment-section">
        {appState && appState.appointment && appointmentBlocks(appState.appointment)}
      </div>
    </div>
  );
};

const Appointments = props => {
  const push = (to = '/appointment-details/10') => props.router.push(to);
  return (
    <div>
      <Appointment push={push} day="Monday" number={1} {...props}/>
      <Appointment push={push} day="Wednesday" number={4} {...props}/>
      <Appointment push={push} day="Sunday" number={6} {...props}/>

      <Appointment push={push} day="Monday" number={8} {...props}/>
      <Appointment push={push} day="Wednesday" number={10} {...props}/>
      <Appointment push={push} day="Sunday" number={26} {...props}/>
    </div>
  );
};

export default withRouter(Appointments);
