import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  pageLink: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  sessions: PropTypes.object
};

const paginationButton = ({ pageLink = '', pageNumber = 0, sessions = null }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(sessions?.currentPage || 0);
  }, [sessions]);

  const onPaginationClick = link => {
    console.log('onPaginationClick - line: ', link);
  };

  return (
    <a className={'pagination-link' + (currentPage === pageNumber) ? ' is-current' : ''}
      onClick={() => onPaginationClick(pageLink)}>
      {pageNumber}
    </a>);
};

paginationButton.propTypes = propTypes;
const mapStateToProps = state => ({ sessions: state.cardioMachineSessions });
export default connect(mapStateToProps)(paginationButton);
