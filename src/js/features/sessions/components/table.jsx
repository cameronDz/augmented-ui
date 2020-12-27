import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalButton from './modalButton';
import TablePagination from '../../../components/tablePagination';
import { fetchSessionsIfNeeded } from '../state/actions';
import { splitTextKeyToArray } from '../../../lib/splits';
import * as _config from '../../../../assets/config.json';
import '../../../../css/table.css';

const apiUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';
const propTypes = {
  currentPage: PropTypes.number,
  didInvalidate: PropTypes.bool,
  fetchSessionsIfNeeded: PropTypes.func,
  isFetching: PropTypes.bool,
  links: PropTypes.object,
  sessions: PropTypes.array,
  totalPages: PropTypes.number
};

const table = props => {
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
    <Fragment>
      <div className="table-wrapper">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
          {renderTableHeader()}
          {renderTableRows()}
        </table>
      </div>
      {renderPagination()}
      {renderDownloadLink()}
    </Fragment>);
};

table.propTypes = propTypes;
const mapStateToProps = state => ({
  currentPage: state.cardioMachineSessions.currentPage,
  didInvalidate: state.cardioMachineSessions.didInvalidate,
  isFetching: state.cardioMachineSessions.isFetching,
  links: state.cardioMachineSessions.links,
  sessions: state.cardioMachineSessions.sessions,
  totalPages: state.cardioMachineSessions.totalPages
});
export default connect(mapStateToProps, { fetchSessionsIfNeeded })(table);
