import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalButton from './modalButton';
import { fetchSessionsIfNeeded } from '../state/actions';
import { splitTextKeyToArray } from '../../../lib/splits';
import * as _config from '../../../../assets/config.json';
import '../../../../css/table.css';

const cardioSessionGetPath = 'json/object/cardio';
const apiUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';
const propTypes = {
  didInvalidate: PropTypes.bool,
  fetchSessionsIfNeeded: PropTypes.func,
  isFetching: PropTypes.bool,
  sessions: PropTypes.array
};
const table = ({ didInvalidate, fetchSessionsIfNeeded, isFetching, sessions }) => {
  const downloadText = 'Download Session in JSON file.';
  useEffect(() => {
    fetchSessionsIfNeeded(apiUrl);
  }, []);

  useEffect(() => {
    if (didInvalidate) {
      fetchSessionsIfNeeded(apiUrl);
    }
  }, [didInvalidate]);

  const renderSessionsData = () => {
    return Array.isArray(sessions) && sessions.map((element, index) => {
      const date = splitTextKeyToArray(element, 'startTime', 'T')[0];
      return (
        <tr key={index}>
          <td>{date}</td>
          <td>{element.machineType}</td>
          <td>{element.userName}</td>
          <ModalButton {...element} />
        </tr>);
    });
  };

  const renderTableRows = () => {
    return (!isFetching && !!sessions) && (<tbody>{renderSessionsData()}</tbody>);
  };

  const renderTableHeader = () => {
    const titles = ['Date', 'Machine', 'User', 'Details'];
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
      <a className="card-footer-item" href={_config.apis.heroku + cardioSessionGetPath} target="_">{downloadText}</a>
      {isFetching && <div className='circular-loader'><CircularProgress /></div>}
    </Fragment>);
};

table.propTypes = propTypes;
const mapStateToProps = state => ({
  didInvalidate: state.cardioMachineSessions.didInvalidate,
  isFetching: state.cardioMachineSessions.isFetching,
  sessions: state.cardioMachineSessions.sessions
});
export default connect(mapStateToProps, { fetchSessionsIfNeeded })(table);
