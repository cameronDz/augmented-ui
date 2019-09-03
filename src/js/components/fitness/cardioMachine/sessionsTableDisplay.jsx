import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalButton from './modalButton';
import TablePagination from '../../general/tablePagination';
import { fetchSessionsIfNeeded } from '../../../state/cardioMachineSessions/actions';
import * as _config from '../../../../../assets/data/config.json';
import '../../../../css/table.css';

const sessionsTableDisplay = props => {

  useEffect(() => {
    const apiUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';
    props.fetchSessionsIfNeeded(apiUrl);
  }, []);

  const renderSessionsData = () => {
    return (!!props.sessions) && props.sessions.map((element, index) => {
      const date = element.startTime.split('T')[0];
      return (
        <tr key={index}>
          <td>{date}</td>
          <td>{element.machineType}</td>
          <td>{element.userName}</td>
          <ModalButton {...element} />
        </tr>
      );
    });
  };

  const renderTableRows = () => {
    return (!props.isFetching && !!props.sessions) && (<tbody>{renderSessionsData()}</tbody>);
  };

  const renderPagination = () => {
    return (!!props.isFetching)
      ? <div className='circular-loader'><CircularProgress /></div>
      : (<TablePagination currentPage={props.currentPage}
          links={props.links}
          totalPages={props.totalPages} />);
  };

  const renderTableHeader = () => {
    const titles = ['Date', 'Machine', 'User', 'Details'];
    const renderTitles = titles.map(item => { return <th>{item}</th>; });
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
  currentPage: state.cardioMachineSessions.currentPage,
  links: state.cardioMachineSessions.links,
  isFetching: state.cardioMachineSessions.isFetching,
  sessions: state.cardioMachineSessions.sessions,
  totalPages: state.cardioMachineSessions.totalPages
});
export default connect(mapStateToProps, { fetchSessionsIfNeeded })(sessionsTableDisplay);
