import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
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
    let day = '';
    try {
      day = intakeObject.intakeTime.split('T')[0];
    } catch(err) {
      console.error('issue parsing day');
    }
    return day;
  };

  const getIntakeTime = intakeObject => {
    let time = '';
    try {
      time = intakeObject.intakeTime.split('T')[1].substring(0,5);
    } catch {
      console.error('issue parsing time');
    }
    return time;
  };

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

  const renderPagination = () => {
    return (!!props.isFetching)
      ? (<div className='circular-loader'><CircularProgress /></div>)
      : (<Pagination
          currentPage={props.currentPage}
          links={props.links}
          totalPages={props.totalPages}
        />);
  };

  const renderTableHeader = () => {
    const titles = ['Day', 'Time', 'Amount', 'Type', 'User', 'Comments']
    const renderTitles = titles.map(element => { return <th>{element}</th> });
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

const mapStateToProps = state =>  ({
  currentPage: state.caffeineIntakes.currentPage,
  intakes: state.caffeineIntakes.intakes,
  isFetching: state.caffeineIntakes.isFetching,
  links: state.caffeineIntakes.links,
  totalPages: state.caffeineIntakes.totalPages
});
export default connect(mapStateToProps, { fetchIntakesIfNeeded })(displayTable);
