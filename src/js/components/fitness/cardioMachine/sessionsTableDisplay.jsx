import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalButton from './modalButton';
import TablePagination from '../../general/tablePagination';
import { fetchSessionsIfNeeded } from '../../../state/cardioMachineSessions/actions';
import * as _config from '../../../../../assets/data/config.json';
import '../../../../css/cardio.css';

const sessionsTableDisplay = props => {

  useEffect(() => {
    const apiUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';
    props.fetchSessionsIfNeeded(apiUrl);
  }, []);

  const renderSessionsData = () => {
    return (!!props.sessions)
      ? props.sessions.map((element, index) => {
          const date = element.startTime.split('T')[0];
          return (
            <tr key={index}>
              <td>{date}</td>
              <td>{element.machineType}</td>
              <td>{element.userName}</td>
              <ModalButton {...element} />
            </tr>
          )
      })
      : null;
  };

  const renderCircularLoader = () => {
    return (<div className='circular-loader'><CircularProgress /></div>);
  };

  const renderTableRows = () => {
    return (!props.isFetching && !!props.sessions)
      ? (<tbody>{renderSessionsData()}</tbody>)
      : null;
  };

  const renderPagination = () => {
    return (!!props.isFetching)
      ? renderCircularLoader()
      : (<TablePagination currentPage={props.currentPage}
          links={props.links}
          totalPages={props.totalPages} />);
  };

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Date</th>
          <th>Machine</th>
          <th>User</th>
          <th>Details</th>
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
  currentPage: state.cardioMachineSessions.currentPage,
  links: state.cardioMachineSessions.links,
  isFetching: state.cardioMachineSessions.isFetching,
  sessions: state.cardioMachineSessions.sessions,
  totalPages: state.cardioMachineSessions.totalPages
});
export default connect(mapStateToProps, { fetchSessionsIfNeeded })(sessionsTableDisplay);
