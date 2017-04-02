import React from 'react';
import { withRouter } from 'react-router';
import './styles.scss';

const DetailsHeading = props => {
  return (
    <div className="details-heading">
      {props.children}
    </div>
  );
};

const DetailsBlock = props => {
  return (
    <div className="details-block">
      {props.children}
    </div>
  );
};

const DetailsIcon = props => {
  return (
    <div className="details-icon">
      {props.children}
    </div>
  );
};

const DetailsDescription = props => {
  return (
    <div className="details-description">
      {props.children}
    </div>
  );
};

const AppointmentDetails = props => {
  console.log('appointmentDetails params', props.params);
  return (
    <div className="details-wrapper">
      <div className="details-header">
        
      </div>
      <div className="details-body">

      </div>
    </div>
  );
};

export default withRouter(AppointmentDetails);
