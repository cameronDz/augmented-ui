import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchIntakesIfNeeded } from '../../../state/caffeineIntake/actions';
import * as _config from '../../../../../assets/data/config.json';

const displayTable = props => {

  useEffect(() => {
    const apiUrl = _config.apis.azure + 'CaffeineNutrientIntakes';
    props.fetchIntakesIfNeeded(apiUrl);
  }, []);

  const renderIntakesData = () => {
    return (!!props.intakes)
      ? props.intakes.map((element, index) => {
          return (
            <tr key={index}>
              <td>{element.intakeTime}</td>
              <td>{element.amount}</td>
              <td>{element.amountType}</td>
              <td>{element.userName}</td>
              <td>{element.comment}</td>
            </tr>);
        })
      : null;
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
          <th>Date</th>
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
