import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import get from 'lodash.get';
import PageButton from './pageButton';

const propTypes = {
  links: PropType.object.isRequired,
  totalPages: PropType.number.isRequired,
  currentPage: PropType.number.isRequired
};

const pagination = props => {
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

  const displayPrevSelfNextButtons = (prevPage = 0, selfPage = 0, nextPage = 0) => {
    return (
      <React.Fragment>
        <PageButton pageLink={prevLink} pageNumber={prevPage} />
        <PageButton pageLink={selfLink} pageNumber={selfPage} />
        <PageButton pageLink={nextLink} pageNumber={nextPage} />
      </React.Fragment>);
  };

  let pager;
  if (totalPages === 0 ) {
    pager = null;
  } else if (totalPages === 1) {
    pager = (<PageButton pageLink={firstLink} pageNumber={1} />);
  } else if (totalPages === 2) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages === 3) {
    if (currentPage === 2) {
      pager = displayPrevSelfNextButtons(1, 2, 3);
    } else {}
      const linkTwo = (currentPage === 1)
        ? nextLink
        : prevLink;
      pager = (<React.Fragment>
                <PageButton pageLink={firstLink} pageNumber={1} />
                <PageButton pageLink={linkTwo} pageNumber={2} />
                <PageButton pageLink={lastLink} pageNumber={3} />
              </React.Fragment>);
  } else if (totalPages >= 4 && currentPage === 1) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              <PageButton pageLink={nextLink} pageNumber={2} />
              {renderPageEllipsis()}
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages >= 4 && currentPage === totalPages) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              <PageButton pageLink={prevLink} pageNumber={totalPages - 1} />
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages === 4) {
    if (currentPage === 2) {
      pager = (<React.Fragment>
                {displayPrevSelfNextButtons(1, 2, 3)}
                <PageButton pageLink={lastLink} pageNumber={4} />
              </React.Fragment>);
    } else {
      pager = (<React.Fragment>
                <PageButton pageLink={firstLink} pageNumber={1} />
                {displayPrevSelfNextButtons(2, 3, 4)}
              </React.Fragment>);
    }
  } else if (totalPages >= 5 && currentPage === 2) {
    pager = (<React.Fragment>
              {displayPrevSelfNextButtons(1, 2, 3)}
              {renderPageEllipsis()}
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (totalPages >= 5 && currentPage === totalPages - 1) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              {displayPrevSelfNextButtons(totalPages-2, totalPages-1, totalPages)}
            </React.Fragment>);
  } else if (totalPages === 5) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              {displayPrevSelfNextButtons(2, 3, 4)}
              <PageButton pageLink={lastLink} pageNumber={5} />
            </React.Fragment>);
  } else if (currentPage === 3) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              {displayPrevSelfNextButtons(2, 3, 4)}
              {renderPageEllipsis()}
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else if (currentPage === totalPages - 2) {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              {displayPrevSelfNextButtons(totalPages-3, totalPages-2, totalPages-1)}
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  } else {
    pager = (<React.Fragment>
              <PageButton pageLink={firstLink} pageNumber={1} />
              {renderPageEllipsis()}
              {displayPrevSelfNextButtons(currentPage-1, currentPage, currentPage+1)}
              {renderPageEllipsis()}
              <PageButton pageLink={lastLink} pageNumber={totalPages} />
            </React.Fragment>);
  }
  return (<div className="table-pagination" aria-label="pagination">{pager}</div>);
};

pagination.propTypes = propTypes;
export default pagination;
