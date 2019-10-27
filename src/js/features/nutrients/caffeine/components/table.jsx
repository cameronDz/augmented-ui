import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from './pagination';
import TableRow from './tableRow';
import { orderIntakesByDate } from '../../../../lib/sorts';
import { fetchIntakesIfNeeded } from '../state/actions';
import '../../../../../css/table.css';

const propTypes = {
  currentPage: PropTypes.number,
  fetchIntakesIfNeeded: PropTypes.func,
  isFetching: PropTypes.bool,
  intakes: PropTypes.array,
  links: PropTypes.object,
  totalPages: PropTypes.number
};

const table = props => {
  useEffect(() => {
    props.fetchIntakesIfNeeded();
  }, []);

  const renderIntakesData = () => {
    return Array.isArray(props.intakes) && props.intakes.sort(orderIntakesByDate).map((item, key) => {
      return <TableRow element={item} key={key}/>;
    });
  };

  const renderTableRows = () => {
    return (!props.isFetching && !!props.intakes) && (<tbody>{renderIntakesData()}</tbody>);
  };

  const renderPagination = () => {
    return (props.isFetching)
      ? (<div className='circular-loader'><CircularProgress /></div>)
      : (<Pagination
        currentPage={props.currentPage}
        links={props.links}
        totalPages={props.totalPages}
      />);
  };

  const renderTableHeader = () => {
    const titles = ['Day', 'Time', 'Amount', 'Type', 'User', 'Comments'];
    const renderTitles = titles.map((item, key) => { return <th key={key}>{item}</th>; });
    return <thead><tr>{renderTitles}</tr></thead>;
  };

  return (
    <Fragment>
      <div className="table-wrapper">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
          {renderTableHeader()}
          {renderTableRows()}
        </table>
      </div>
      {renderPagination()}
    </Fragment>);
};

const mapStateToProps = state => ({
  currentPage: state.caffeineIntakes.currentPage,
  intakes: state.caffeineIntakes.intakes,
  isFetching: state.caffeineIntakes.isFetching,
  links: state.caffeineIntakes.links,
  totalPages: state.caffeineIntakes.totalPages
});
table.propTypes = propTypes;
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(table);
