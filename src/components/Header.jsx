import React, {Component} from 'react';
import '../styles/css/bulma.css';

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
      <section className="hero">
        <div className="hero-body">       
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
