import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import _config from '../../../assets/config.json';

const propTypes = {
  downloadText: PropTypes.string,
  downloadEndpoint: PropTypes.string,
  isLoading: PropTypes.bool,
  isPaginated: PropTypes.bool
};
const TableFooter = ({ downloadText, downloadEndpoint, isLoading, isPaginated }) => {
  return (
    <Fragment>
      {!isLoading && downloadText && downloadEndpoint && (
        <a href={`${_config.baseApiUrl}/${downloadEndpoint}`} target="_">
          {downloadText}
        </a>
      )}
    </Fragment>
  );
};

TableFooter.propTypes = propTypes;
export default TableFooter;
