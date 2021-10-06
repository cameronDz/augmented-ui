import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';

const propTypes = {
  children: PropTypes.object.isRequired,
  isFooterHidden: PropTypes.bool
};

const layout = ({ isFooterHidden, ...otherProps }) => {
  const [children, setChildren] = useState();

  useEffect(() => {
    setChildren(otherProps?.children || null);
  }, [otherProps]);

  return (
    <Fragment>
      {children}
      <div style={{ margin: '5px', padding: '5px' }}></div>
      {!isFooterHidden && <Footer />}
    </Fragment>);
};

layout.propTypes = propTypes;
export default layout;
