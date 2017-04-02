import React from 'react';
import './styles.scss';
const Profile = () => {
    return (
        <div>
            <div className="header">
                <img className="image-header" src="http://facet-foundation.org/site/wp-content/uploads/2015/10/charity-featured-lesotho.jpg" />
                <img className="photo" src="https://www.biography.com/.image/t_share/MTQ0ODc4NzUxMTE5ODQ1MTYy/neil_gorsuch_united_states_court_of_appeals_for_the_tenth_circuit_boston_herald_public_domain_via_wikimedia_commons_profile.jpg" />
            </div>
            <div className="name"><h1>Juan del Pueblo</h1></div>
            <div className="title"><h3>Profesor Computadoras</h3></div>
            <div className="bio"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            <div className="contact"><h4>Telefono: 787-123-4567</h4></div>
            <div className="contact"><h4>Pueblo: San Juan, PR</h4></div>
        </div>
    );
};

export default Profile;
