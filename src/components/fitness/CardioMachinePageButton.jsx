import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSessionsIfNeeded } from '../../actions/cardioMachineSessionAction';

/**
 * 
 * @prop links Array of Strings
 * @prop currentPage 
 * @prop totalPages
 */
class CardioMachinePageButton extends Component {
  
    onPaginationClick(link) {
      this.props.dispatchFetchSessions(link);
    };
  
    render() {
      let classValues = "pagination-link";
      if(this.props.currentPage === this.props.pageNumber) {
        classValues += " is-current";
      }
  
      return (
        <a className={classValues} onClick={() => this.onPaginationClick(this.props.pageLink)}>
          {this.props.pageNumber}
        </a>
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
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CardioMachinePageButton);
