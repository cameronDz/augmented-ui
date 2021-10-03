import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalButton from './modalButton';
import { getCardioSessionList } from '../state/actions';
import { splitTextKeyToArray } from '../../../lib/splits';
import * as _config from '../../../../assets/config.json';
import '../../../../css/table.css';

const downloadText = 'Download Session in JSON file.';
const propTypes = {
  getCardioSessions: PropTypes.func,
  isLoadingSession: PropTypes.bool,
  isProcessingSession: PropTypes.bool,
  sessions: PropTypes.array
};
const table = ({ getCardioSessions, isLoadingSession, isProcessingSession, sessions }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCardioSessions();
  }, []);

  useEffect(() => {
    setIsLoading(isLoadingSession || isProcessingSession);
  }, [isLoadingSession, isProcessingSession]);

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
    return (!isLoading && !!sessions) && (<tbody>{renderSessionsData()}</tbody>);
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
      <a className="card-footer-item" href={`${_config.baseApiUrl}/object/cardio`} target="_">{downloadText}</a>
      {isLoading && <div className='circular-loader'><CircularProgress /></div>}
    </Fragment>);
};

table.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoadingSession: state.cardioMachineSessions.isLoadingCardioSessions,
  isProcessingSession: state.cardioMachineSessions.isProcessingCardioSession,
  sessions: state.cardioMachineSessions.cardioSessionGetPayload
});
export default connect(mapStateToProps, { getCardioSessions: getCardioSessionList })(table);
