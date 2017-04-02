import React, { Component } from 'react';
import Footer from '../../components/Footer'
import './styles.scss';

const Nav = props => {
  return (
    <div className="app-header">
      {props.children}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Nav/>
        <div className="app-body">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;



