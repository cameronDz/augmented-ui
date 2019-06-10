import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Navbar from  './Navbar';

const propTypes = {
  title: PropTypes.string.isRequired
};

const header = props => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle(get(props, 'title', ''));
  }, [props]);

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
