import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './navbar';

const propTypes = {
  isSecuredUser: PropTypes.bool,
  title: PropTypes.string
};
const header = ({ isSecuredUser, title }) => {
  return (
    <Fragment>
      <Navbar isSecuredUser={isSecuredUser} />
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
const mapStateToProps = (state) => ({ isSecuredUser: !!state.auth.token });
export default connect(mapStateToProps)(header);
