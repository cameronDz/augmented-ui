import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Header from './header';
import Footer from './footer';
import '../../css/layout.css';

const propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

const layout = props => {
  const [children, setChildren] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setChildren(get(props, 'children', null));
    setTitle(get(props, 'title', ''));
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
