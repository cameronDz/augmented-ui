import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchIntakesIfNeeded } from '../../../state/caffeineIntake/actions';
import '../../../../css/nutrition.css';

const displayTable = props => {

  useEffect(() => {
    props.fetchIntakesIfNeeded();
  }, []);

  const orderIntakesByDate = (a, b) => {
    let aTime, bTime;
    try {
      aTime = new Date(a.intakeTime);
      bTime = new Date(b.intakeTime);
    } catch {
      return 0;
    }
    if (aTime < bTime) {
      return 1;
    } else if (aTime > bTime) {
      return -1;
    }
    return 0;
  };

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
      if (index < 9) {
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
      }
      return null;
    });
  };

  const renderTableRows = () => {
    return (!props.isFetching && !!props.intakes)
      ? (<tbody>{renderIntakesData()}</tbody>)
      : null;
  };

  const renderCircularLoader = () => {
    return (<div className='circular-loader'><CircularProgress /></div>);
  };

  const renderPagination = () => {
    return (!!props.isFetching)
      ? renderCircularLoader()
      : null;
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
  isFetching: state.caffeineIntakes.isFetching,
  intakes: state.caffeineIntakes.intakes
});
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(displayTable);
