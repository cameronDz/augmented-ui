import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { fetchIntakesIfNeeded } from '../state/actions';
import '../../../../css/table.css';

const propTypes = {
  fetchIntakesIfNeeded: PropTypes.func,
  pageLink: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired
};

const pageButton = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLink, setPageLink] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setCurrentPage(get(props, 'intakes.currentPage', 0));
    setPageLink(get(props, 'pageLink', ''));
    setPageNumber(get(props, 'pageNumber', 0));
  }, [props]);

  const onPaginationClick = link => {
    props.fetchIntakesIfNeeded(link);
  };

  const getClassName = () => {
    return (currentPage === pageNumber)
      ? 'pagination-link'
      : 'pagination-link is-current';
  };

  return (<a className={getClassName()} onClick={() => onPaginationClick(pageLink)}>{pageNumber}</a>);
};

pageButton.propTypes = propTypes;
const mapStateToProps = state => ({ intakes: state.caffeineIntakes });
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(pageButton);
