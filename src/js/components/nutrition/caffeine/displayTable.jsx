import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from './pagination';
import TableRow from './tableRow';
import { orderIntakesByDate } from '../../../lib/sorts';
import { fetchIntakesIfNeeded } from '../../../state/caffeineIntake/actions';
import '../../../../css/table.css';

const displayTable = props => {
  useEffect(() => {
    props.fetchIntakesIfNeeded();
  }, []);

  const renderIntakesData = () => {
    return props.intakes.sort(orderIntakesByDate).map(element => {
      return <TableRow element={element} />;
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
    const renderTitles = titles.map(element => { return <th>{element}</th>; });
    return <thead><tr>{renderTitles}</tr></thead>;
  };

  return (
    <React.Fragment>
      <div className="table-wrapper">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
          {renderTableHeader()}
          {renderTableRows()}
        </table>
      </div>
      {renderPagination()}
    </React.Fragment>);
};

const mapStateToProps = state => ({
  currentPage: state.caffeineIntakes.currentPage,
  intakes: state.caffeineIntakes.intakes,
  isFetching: state.caffeineIntakes.isFetching,
  links: state.caffeineIntakes.links,
  totalPages: state.caffeineIntakes.totalPages
});
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(displayTable);
