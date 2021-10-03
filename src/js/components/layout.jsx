import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Header from './header';
import Footer from './footer';
import '../../css/layout.css';

const propTypes = {
  children: PropTypes.object.isRequired,
  isFooterHidden: PropTypes.bool,
  isHeaderHidden: PropTypes.bool,
  title: PropTypes.string
};

const layout = ({ isFooterHidden, isHeaderHidden, ...otherProps }) => {
  const [children, setChildren] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setChildren(get(otherProps, 'children', null));
    setTitle(get(otherProps, 'title', ''));
  }, [otherProps]);

  return (
    <Fragment>
      {isHeaderHidden ? null : <Header title={title} />}
      {children}
      <div className="spacer"></div>
      {isFooterHidden ? null : <Footer />}
    </Fragment>);
};

layout.propTypes = propTypes;
export default layout;
