import React, {Component} from 'react';
import Navbar from  './Navbar';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() {
    const {title} = this.state;
    return (
      <div>
        <Navbar />
        <section className="hero">
          <div className="hero-body">       
            <div className="container">
              <h1 className="title">{title}</h1>
            </div>
          </div>
        </section>
      </div>
    );
  };
}

export default Header;
