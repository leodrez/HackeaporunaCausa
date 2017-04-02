import React from 'react';
import { Link } from 'react-router';
import './styles.scss';

const FooterButton = ({ children, ...rest }) => {
  return (
    <button{...rest} className="footer-btn">
      {children}
    </button>
  )
};

const Footer = () => {
  return (
    <div className="app-footer">
      <FooterButton>
        <Link to="/institutions" className="footer-link">
          <i className="fa fa-institution" aria-hidden="true"></i>
        </Link>
      </FooterButton>
      <FooterButton>
        <Link to="/appointments" className="footer-link">
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </Link>
      </FooterButton>
      <FooterButton>
        <Link to="/profile" className="footer-link">
          <i className="fa fa-user" aria-hidden="true"></i>
        </Link>
      </FooterButton>
    </div>
  )
};

export default Footer;
