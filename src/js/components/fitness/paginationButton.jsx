import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { fetchSessionsIfNeeded } from '../../actions/cardioMachineSessionAction';

const propTypes = {
  pageLink: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired
};

const paginationButton = props => {

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLink, setPageLink] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setCurrentPage(get(props, 'sessions.currentPage', 0));
    setPageLink(get(props, 'pageLink', ''));
    setPageNumber(get(props, 'pageNumber', 0));
  }, [props]);

  const onPaginationClick = link => {
    props.dispatchFetchSessions(link);
  };

  const getClassName = () => {
    return (currentPage === pageNumber)
      ? "pagination-link"
      : "pagination-link is-current";
  };

  return (<a className={getClassName()} onClick={() => onPaginationClick(pageLink)}>{pageNumber}</a>);
};

const mapStateToProps = state =>  ({
    sessions: state.cardioMachineSessions.cardioMachineSessions
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchSessions: (link) => {
      dispatch(fetchSessionsIfNeeded(link));
    }
  };
};

paginationButton.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(paginationButton);
