import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const propTypes = {
  pageLink: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired
};

const paginationButton = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLink, setPageLink] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setCurrentPage(get(props, 'sessions.currentPage', 0));
    setPageLink(get(props, 'pageLink', ''));
    setPageNumber(get(props, 'pageNumber', 0));
  }, [props]);

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
