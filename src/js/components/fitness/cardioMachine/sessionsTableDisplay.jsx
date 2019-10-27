import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalButton from './modalButton';
import TablePagination from '../../general/tablePagination';
import { fetchSessionsIfNeeded } from '../../../state/cardioMachineSessions/actions';
import { splitTextKeyToArray } from '../../../lib/splits';
import * as _config from '../../../../../assets/data/config.json';
import '../../../../css/table.css';

const propTypes = {
  currentPage: PropTypes.number,
  didInvalidate: PropTypes.bool,
  fetchSessionsIfNeeded: PropTypes.func,
  isFetching: PropTypes.bool,
  links: PropTypes.object,
  sessions: PropTypes.array,
  totalPages: PropTypes.number
};

const sessionsTableDisplay = props => {
  const apiUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';
  useEffect(() => {
    props.fetchSessionsIfNeeded(apiUrl);
  }, []);

  useEffect(() => {
    if (props.didInvalidate) {
      props.fetchSessionsIfNeeded(apiUrl);
    }
  }, [props.didInvalidate]);

  const renderDownloadLink = () => {
    const url = _config.apis.azure + 'CardioMachineExercises?csv=csv';
    return <a className="card-footer-item" href={url}>Download Intakes as CSV file.</a>;
  };

  const renderPagination = () => {
    return (props.isFetching)
      ? <div className='circular-loader'><CircularProgress /></div>
      : (<TablePagination currentPage={props.currentPage}
        links={props.links}
        totalPages={props.totalPages}
      />);
  };

  const renderSessionsData = () => {
    return Array.isArray(props.sessions) && props.sessions.map((element, index) => {
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
    return (!props.isFetching && !!props.sessions) && (<tbody>{renderSessionsData()}</tbody>);
  };

  const renderTableHeader = () => {
    const titles = ['Date', 'Machine', 'User', 'Details'];
    const renderTitles = titles.map((item, key) => { return <th key={key}>{item}</th>; });
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
      {renderDownloadLink()}
    </React.Fragment>);
};

const mapStateToProps = state => ({
  currentPage: state.cardioMachineSessions.currentPage,
  didInvalidate: state.cardioMachineSessions.didInvalidate,
  links: state.cardioMachineSessions.links,
  isFetching: state.cardioMachineSessions.isFetching,
  sessions: state.cardioMachineSessions.sessions,
  totalPages: state.cardioMachineSessions.totalPages
});
sessionsTableDisplay.propTypes = propTypes;
export default connect(mapStateToProps, { fetchSessionsIfNeeded })(sessionsTableDisplay);
