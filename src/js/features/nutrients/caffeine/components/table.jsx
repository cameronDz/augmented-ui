import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import TableRow from './tableRow';
import { getCaffeineList } from '../state/actions';
import { orderIntakesByDate } from '../../../../lib/sorts';
import '../../../../../css/table.css';

const propTypes = {
  caffeine: PropTypes.array,
  getCaffeineList: PropTypes.func,
  isLoadingCaffeine: PropTypes.bool
};
const table = ({ caffeine, getCaffeineList, isLoadingCaffeine }) => {
  useEffect(() => {
    getCaffeineList();
  }, []);

  const renderIntakesData = () => {
    return Array.isArray(caffeine) && caffeine.sort(orderIntakesByDate).map((item, key) => {
      return <TableRow element={item} key={key}/>;
    });
  };

  const renderTableRows = () => {
    return (!isLoadingCaffeine && !!caffeine) && (<tbody>{renderIntakesData()}</tbody>);
  };

  const renderTableHeader = () => {
    const titles = ['Day', 'Time', 'Amount', 'Type', 'User', 'Comments'];
    const renderTitles = titles.map((item, key) => { return <th key={key}>{item}</th>; });
    return <thead><tr>{renderTitles}</tr></thead>;
  };

  return (
    <div className="table-wrapper">
      <table className="table is-bordered is-striped is-narrow is-fullwidth">
        {renderTableHeader()}
        {renderTableRows()}
      </table>
      {isLoadingCaffeine && <div className='circular-loader'><CircularProgress /></div>}
    </div>);
};

const mapStateToProps = state => ({
  caffeine: state.caffeineIntakes.caffeineGetPayload,
  isLoadingCaffeine: state.caffeineIntakes.isLoadingCaffeine
});
table.propTypes = propTypes;
export default connect(mapStateToProps, { getCaffeineList })(table);
