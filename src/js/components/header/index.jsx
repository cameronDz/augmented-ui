import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';

const propTypes = { title: PropTypes.string };
const header = ({ title }) => {
  return (
    <Fragment>
      <Navbar />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
    </Fragment>);
};

header.propTypes = propTypes;
export default header;
