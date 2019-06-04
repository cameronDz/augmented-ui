import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Header from './general/Header';
import Footer from './general/Footer';
import '../styles/css/layout.css';

const propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

const layout = props => {

  const [children, setChildren] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setChildren(get(props, 'children', null));
    setChildren(get(props, 'title', ''));
  }, [props]);

  return (
    <React.Fragment>
      <Header title={title} />
      {children}
      <div className="spacer"></div>
      <Footer />
    </React.Fragment>);
};

layout.propTypes = propTypes;
export default layout;
