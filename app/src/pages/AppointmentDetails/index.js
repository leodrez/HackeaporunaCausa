import React from 'react';
import { withRouter } from 'react-router';
import './styles.scss';

const DetailsBlock = icon => props => {
  return (
    <div className="details-block">
      <div className="details-icon">
        <i className={`fa fa-${icon}`} aria-hidden="true"/>
      </div>
      <div className="details-description">
        {props.children}
      </div>
    </div>
  );
};

const TimeBlock = (props) => {
  const NewComponent = DetailsBlock('clock-o');
  return (
    <NewComponent>
      <p className="detail-text">{props.description}</p>
      <p className="detail-text">{props.day}</p>
      <p className="detail-text">{props.time}</p>
    </NewComponent>
  );
};

const LocationBlock = (props) => {
  const NewComponent = DetailsBlock('map-marker');
  return (
    <NewComponent>
      <p className="detail-text">{props.address}</p>
    </NewComponent>
  );
};

const AlarmBlock = (props) => {
  const NewComponent = DetailsBlock('bell');
  return (
    <NewComponent>
      <p className="detail-text">{props.timeBefore}</p>
    </NewComponent>
  );
};

const AppointmentDetails = props => {
  console.log('appointmentDetails params', props.params);
  console.log(props);
  const goBack = () => props.router.goBack();
  return (
    <div className="details-wrapper">
      <div className="details-header">
        <div className="details-icon-group">
          <span onClick={goBack} className="close-icon">
            <span>X</span>
          </span>
          <span className="settings-icon">
            <span>...</span>
          </span>
        </div>
        <h3>Pick up John at 10 AM</h3>
      </div>
      <div className="details-body">
        <TimeBlock
          day="Tuesday, Apr 11"
          time="8 - 9:30 AM"
          description="Repeat every Tue and Thu"
        />
        <LocationBlock address="Urb. Los cumbres calle violets San Juan, PR 00927"/>
        <AlarmBlock timeBefore="1 Hour"/>
      </div>
    </div>
  );
};

export default withRouter(AppointmentDetails);
