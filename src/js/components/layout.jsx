import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import '../../css/layout.css';

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
      <div className="spacer"></div>
      {!isFooterHidden && <Footer />}
    </Fragment>);
};

layout.propTypes = propTypes;
export default layout;
