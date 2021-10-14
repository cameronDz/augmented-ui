import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  pageLink: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  sessions: PropTypes.object
};

const PaginationButton = ({
  pageLink = '',
  pageNumber = 0,
  sessions = null
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(sessions?.currentPage || 0);
  }, [sessions]);

  const onPaginationClick = (link) => {
    console.log('onPaginationClick - line: ', link);
  };

  return (
    <a
      className={classNames(
        'pagination-link',
        currentPage === pageNumber && 'is-current'
      )}
      onClick={() => onPaginationClick(pageLink)}
    >
      {pageNumber}
    </a>
  );
};

PaginationButton.propTypes = propTypes;
export default PaginationButton;
