import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

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
        <Footer />
      </div>
    );
  } 

}

export default Layout;