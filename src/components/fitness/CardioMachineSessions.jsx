import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardioMachineModalButton from './CardioMachineModalButton';
import CardioMachineTablePagination from './CardioMachineTablePagination';
import * as _config from '../../../assets/data/config.json';
import '../../styles/css/cardio.css';

import { fetchSessionsIfNeeded } from '../../actions/cardioMachineSessionAction';

/**
 * Display of cardio machine sessions on a table.
 */
class CardioMachineSessions extends Component {

  componentDidMount() {
    const url = _config.apis.azure + 'CardioMachineExercises';
    const pageNumber = 1;
    const pageSize = 10;
    const params = '?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
    const link = url + params;
    this.props.dispatchFetchSessions(link);
  };

  /**
   * Renders the sessions as a table rows in a table body element.
   */
  renderData() {
    const cardioMachineSessionTableRow = this.props.sessions.map(
      (element, index) => {
        let date = element.startTime.split('T')[0];
        return (
          <tr key={index}>
            <td>{date}</td>
            <td>{element.machineType}</td>
            <td>{element.userName}</td>
            <CardioMachineModalButton {...element} />
          </tr>
        );
    }); 

    return (
      <tbody>
        {cardioMachineSessionTableRow}
      </tbody>
    );
  };

  /**
   * Component UI display.
   */
  render() {
    return (
      <div>
        <div className="table-wrapper">
          <table className="table is-bordered is-striped is-narrow is-fullwidth">
            <thead>
              <tr>
                <th>Date</th>
                <th>Machine</th>
                <th>User</th>
                <th>Details</th>
              </tr>
            </thead>
            {this.renderData()}
          </table>
        </div>
        <CardioMachineTablePagination />
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
  links: state.cardioMachineSessions.cardioMachineSessions.links,
  totalRecords: state.cardioMachineSessions.cardioMachineSessions.totalRecords,
  totalPages: state.cardioMachineSessions.cardioMachineSessions.totalPages,
  currentPage: state.cardioMachineSessions.cardioMachineSessions.currentPage,
  sessions: state.cardioMachineSessions.cardioMachineSessions.sessions,
  isFetching: state.cardioMachineSessions.cardioMachineSessions.isFetching,
  didInvalidate: state.cardioMachineSessions.cardioMachineSessions.didInvalidate,
  lastUpdated: state.cardioMachineSessions.cardioMachineSessions.lastUpdated
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchSessions: (link) => {
      dispatch(fetchSessionsIfNeeded(link));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardioMachineSessions);
