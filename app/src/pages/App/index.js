import React, { Component } from 'react';
import Footer from '../../components/Footer'
import './styles.scss';
import { getFirstUser } from '../../api';

const Nav = props => {
  return (
    <div className="app-header">
      {props.children}
    </div>
  );
};

const childrenWithProps = (
  children,
  props
) => React.Children.map(children, (child) => React.cloneElement(child, { appState: props }));

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    getFirstUser().then(data => {
      if (!data) {
        return;
      }

      this.setState({ ...data[0] });
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <Nav />
        <div className="app-body">
          {childrenWithProps(this.props.children, this.state)}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;



