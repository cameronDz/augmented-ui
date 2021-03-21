import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../../../css/table.css';

const propTypes = {
  currentPage: PropTypes.number,
  pageLink: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired
};

const pageButton = ({ currentPage, pageLink, pageNumber }) => {
  const onPaginationClick = link => {
    console.log('unhandled click: ', link);
  };

  return (
    <a className={'pagination-link' + (currentPage === pageNumber) ? ' is-current' : ''}
      onClick={() => onPaginationClick(pageLink)}
    >
      {pageNumber}
    </a>);
};

pageButton.propTypes = propTypes;
const mapStateToProps = state => ({ intakes: state.caffeineIntakes });
export default connect(mapStateToProps)(pageButton);
