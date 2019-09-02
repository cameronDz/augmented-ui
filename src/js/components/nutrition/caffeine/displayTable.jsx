import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from './pagination';
import { orderIntakesByDate } from '../../../lib/sorts';
import { fetchIntakesIfNeeded } from '../../../state/caffeineIntake/actions';
import '../../../../css/table.css';

const displayTable = props => {

  useEffect(() => {
    props.fetchIntakesIfNeeded();
  }, []);

  const getIntakeDay = intakeObject => {
    try {
      return intakeObject.intakeTime.split('T')[0];
    } catch {
      return '';
    }
  };

  const getIntakeTime = intakeObject => {
    try {
      return intakeObject.intakeTime.split('T')[1].substring(0,5);
    } catch {
      return '';
    }
  };

  // temporarily limit the number of elements while not paginating
  const renderIntakesData = () => {
    return props.intakes.sort(orderIntakesByDate).map((element, index) => {
      const day = getIntakeDay(element);
      const time = getIntakeTime(element);
      return (
        <tr key={index}>
          <td>{day}</td>
          <td>{time}</td>
          <td>{element.amount}</td>
          <td>{element.amountType}</td>
          <td>{element.userName}</td>
          <td>{element.comment}</td>
        </tr>);
    });
  };

  const renderTableRows = () => {
    return (!props.isFetching && !!props.intakes) && (<tbody>{renderIntakesData()}</tbody>);
  };

  const renderCircularLoader = () => {
    return (<div className='circular-loader'><CircularProgress /></div>);
  };

  const renderPagination = () => {
    return (!!props.isFetching)
      ? renderCircularLoader()
      : (<Pagination
          currentPage={props.currentPage}
          links={props.links}
          totalPages={props.totalPages} />);
  };

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Type</th>
          <th>User</th>
          <th>Comments</th>
        </tr>
      </thead>);
  };

  return (
    <div>
      <div className="table-wrapper">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
          {renderTableHeader()}
          {renderTableRows()}
        </table>
      </div>
      {renderPagination()}
    </div>);
};

const mapStateToProps = state =>  ({
  currentPage: state.caffeineIntakes.currentPage,
  intakes: state.caffeineIntakes.intakes,
  isFetching: state.caffeineIntakes.isFetching,
  links: state.caffeineIntakes.links,
  totalPages: state.caffeineIntakes.totalPages
});
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(displayTable);
