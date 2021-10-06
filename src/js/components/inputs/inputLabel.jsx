import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string
};

const InputLabel = ({ label, name, rootClassName }) => {
  return (
    <label className={classNames(rootClassName)} htmlFor={name || null} style={{ margin: '0 10px' }}>
      {label}
    </label>
  );
};

InputLabel.propTypes = propTypes;
export default InputLabel;
