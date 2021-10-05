import React, { Fragment, useEffect, useState } from 'react';
import PropType from 'prop-types';
import PaginationButton from './paginationButton';

const propTypes = {
  links: PropType.object.isRequired,
  totalPages: PropType.number.isRequired,
  currentPage: PropType.number.isRequired
};

const tablePagination = ({ currentPage = 0, links = null, totalPages = 0 }) => {
  const [firstLink, setFirstLink] = useState('');
  const [lastLink, setLastLink] = useState('');
  const [nextLink, setNextLink] = useState('');
  const [prevLink, setPrevLink] = useState('');
  const [selfLink, setSelfLink] = useState('');

  useEffect(() => {
    setSelfLink(links?.self || '');
    setFirstLink(links?.first || '');
    setLastLink(links?.last || '');
    setNextLink(links?.next || '');
    setPrevLink(links?.prev || '');
  }, [links]);

  const renderPageEllipsis = () => {
    return (<span className="pagination-ellipsis">&hellip;</span>);
  };

  const displayPrevSelfNextButtons = (prevPage = 0, selfPage = 0, nextPage = 0) => {
    return (
      <Fragment>
        <PaginationButton pageLink={prevLink} pageNumber={prevPage} />
        <PaginationButton pageLink={selfLink} pageNumber={selfPage} />
        <PaginationButton pageLink={nextLink} pageNumber={nextPage} />
      </Fragment>);
  };

  let pager;
  if (totalPages === 0) {
    pager = null;
  } else if (totalPages === 1) {
    pager = (<PaginationButton pageLink={firstLink} pageNumber={1} />);
  } else if (totalPages === 2) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  } else if (totalPages === 3) {
    if (currentPage === 2) {
      pager = displayPrevSelfNextButtons(1, 2, 3);
    } else {
      const linkTwo = (currentPage === 1)
        ? nextLink
        : prevLink;
      pager = (<Fragment>
        <PaginationButton pageLink={firstLink} pageNumber={1} />
        <PaginationButton pageLink={linkTwo} pageNumber={2} />
        <PaginationButton pageLink={lastLink} pageNumber={3} />
      </Fragment>);
    }
  } else if (totalPages >= 4 && currentPage === 1) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      <PaginationButton pageLink={nextLink} pageNumber={2} />
      {renderPageEllipsis()}
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  } else if (totalPages >= 4 && currentPage === totalPages) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      {renderPageEllipsis()}
      <PaginationButton pageLink={prevLink} pageNumber={totalPages - 1} />
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  } else if (totalPages === 4) {
    if (currentPage === 2) {
      pager = (<Fragment>
        {displayPrevSelfNextButtons(1, 2, 3)}
        <PaginationButton pageLink={lastLink} pageNumber={4} />
      </Fragment>);
    } else {
      pager = (<Fragment>
        <PaginationButton pageLink={firstLink} pageNumber={1} />
        {displayPrevSelfNextButtons(2, 3, 4)}
      </Fragment>);
    }
  } else if (totalPages >= 5 && currentPage === 2) {
    pager = (<Fragment>
      {displayPrevSelfNextButtons(1, 2, 3)}
      {renderPageEllipsis()}
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  } else if (totalPages >= 5 && currentPage === totalPages - 1) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      {renderPageEllipsis()}
      {displayPrevSelfNextButtons(totalPages - 2, totalPages - 1, totalPages)}
    </Fragment>);
  } else if (totalPages === 5) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      {displayPrevSelfNextButtons(2, 3, 4)}
      <PaginationButton pageLink={lastLink} pageNumber={5} />
    </Fragment>);
  } else if (currentPage === 3) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      {displayPrevSelfNextButtons(2, 3, 4)}
      {renderPageEllipsis()}
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  } else if (currentPage === totalPages - 2) {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      {renderPageEllipsis()}
      {displayPrevSelfNextButtons(totalPages - 3, totalPages - 2, totalPages - 1)}
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  } else {
    pager = (<Fragment>
      <PaginationButton pageLink={firstLink} pageNumber={1} />
      {renderPageEllipsis()}
      {displayPrevSelfNextButtons(currentPage - 1, currentPage, currentPage + 1)}
      {renderPageEllipsis()}
      <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
    </Fragment>);
  }
  return (<div className="table-pagination" aria-label="pagination">{pager}</div>);
};

tablePagination.propTypes = propTypes;
export default tablePagination;
