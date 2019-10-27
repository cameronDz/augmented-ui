import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';

const propTypes = { title: PropTypes.string.isRequired };
const header = ({ title }) => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
    </React.Fragment>);
};

header.propTypes = propTypes;
export default header;
