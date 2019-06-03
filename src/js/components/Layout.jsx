import React, { Component } from 'react';
import Header from './general/Header';
import Footer from './general/Footer';
import '../styles/css/layout.css';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      children: this.props.children
    }
  }

  render() {
    const {title, children} = this.state;
    return (
      <div>
        <Header title = {title} />
        {children}
        <div className="spacer"></div>
        <Footer />
      </div>
    );
  } 

}

export default Layout;
