import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import get from 'lodash.get';
import PaginationButton from './paginationButton';

const propTypes = {
  links: PropType.object.isRequired,
  totalPages: PropType.number.isRequired,
  currentPage: PropType.number.isRequired
};

const tablePagination = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const [firstLink, setFirstLink] = useState('');
  const [lastLink, setLastLink] = useState('');
  const [nextLink, setNextLink] = useState('');
  const [prevLink, setPrevLink] = useState('');
  const [selfLink, setSelfLink] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setSelfLink(get(props, 'links.self', ''))
    setCurrentPage(get(props, 'currentPage', 0))
    setFirstLink(get(props, 'links.first', ''))
    setLastLink(get(props, 'links.last', ''))
    setNextLink(get(props, 'links.next', ''))
    setPrevLink(get(props, 'links.prev', ''))
    setTotalPages(get(props, 'totalPages', 0))
  }, [props]);

  const renderPageEllipsis = () => {
    return (<span className="pagination-ellipsis">&hellip;</span>);
  };

  let pager;
  if (totalPages === 0 ) {
    pager = null;
  } else if (totalPages === 1) {
    pager = (<PaginationButton pageLink={firstLink} pageNumber={1} />);
  } else if (totalPages === 2) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages === 3) {
    const linkTwo = (currentPage === 1)
      ? nextLink
      : (currentPage === 3)
        ? prevLink
        : selfLink;
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={linkTwo} pageNumber={2} />
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages >= 4 && currentPage === 1) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={nextLink} pageNumber={2} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages >= 4 && currentPage === totalPages) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={prevLink} pageNumber={totalPages - 1} />
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages === 4) {
    const linkTwo = (currentPage === 2)
      ? selfLink
      : prevLink;
    const linkThree = (currentPage === 2)
      ? nextLink
      : selfLink;
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={linkTwo} pageNumber={2} />
              <PaginationButton pageLink={linkThree} pageNumber={3} />
              <PaginationButton pageLink={lastLink} pageNumber={4} />
            </React.Fragment>);
  } else if (totalPages >= 5 && currentPage === 2) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={selfLink} pageNumber={2} />
              <PaginationButton pageLink={nextLink} pageNumber={3} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages >= 5 && currentPage === totalPages - 1) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={prevLink} pageNumber={totalPages - 2} />
              <PaginationButton pageLink={selfLink} pageNumber={totalPages - 1} />
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages === 5) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={prevLink} pageNumber={2} />
              <PaginationButton pageLink={selfLink} pageNumber={3} />
              <PaginationButton pageLink={nextLink} pageNumber={4} />
              <PaginationButton pageLink={lastLink} pageNumber={5} />
            </React.Fragment>);
  } else if (currentPage === 3) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              <PaginationButton pageLink={prevLink} pageNumber={2} />
              <PaginationButton pageLink={selfLink} pageNumber={3} />
              <PaginationButton pageLink={nextLink} pageNumber={4} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (currentPage === totalPages - 2) {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={prevLink} pageNumber={totalPages - 3} />
              <PaginationButton pageLink={selfLink} pageNumber={totalPages - 2} />
              <PaginationButton pageLink={nextLink} pageNumber={totalPages - 1} />
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else {
    pager = (<React.Fragment>
              <PaginationButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={prevLink} pageNumber={currentPage - 1} />
              <PaginationButton pageLink={selfLink} pageNumber={currentPage} />
              <PaginationButton pageLink={nextLink} pageNumber={currentPage + 1} />
              {renderPageEllipsis()}
              <PaginationButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  }
  return (<div className="table-pagination" aria-label="pagination">{pager}</div>);
};

tablePagination.propTypes = propTypes;
export default tablePagination;
