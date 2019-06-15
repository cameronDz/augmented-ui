import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchIntakesIfNeeded } from '../../../state/caffeineIntake/actions';

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

  // temporarily limit the number of elements while not paginating
  const renderIntakesData = () => {
    return props.intakes.sort(orderIntakesByDate).map((element, index) => {
      if (index < 9) {
        let day, time;
        try {
          day = element.intakeTime.split('T')[0];
          time = element.intakeTime.split('T')[1].substring(0,5);
        } catch {
          day = '';
          time = '';
        }
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
    let ret = null;
    if (!!props.isFetching) {
      ret = (<div className='circular-loader'><CircularProgress /></div>);
    } else if (!props.isFetching && !!props.intakes) {
      ret = (<tbody>{renderIntakesData()}</tbody>);
    }
    return ret;
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
    </div>);
};

const mapStateToProps = state =>  ({
  isFetching: state.caffeineIntakes.isFetching,
  intakes: state.caffeineIntakes.intakes
});
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(displayTable);
