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

    processPayload(payLoad)  {
      console.log("cardioState: " + JSON.stringify(this.props.cardioState));
      var array = [];
      for(var i = 0; i < payLoad.length; i++) {
        var counter = payLoad[i];
        var obj = {};
        obj.machineType = counter.machineType;
        obj.startTime = counter.startTime;
        obj.duration = counter.durationSeconds;
        obj.distance = counter.distanceMiles;
        obj.userName = counter.userName;
        obj.comment = counter.comment;
        array.push(obj);
      }
      return array;
    }
  
    onPaginationClick(link) {
      this.props.dispatchFetchSessions(link);
      fetch(link)
        .then(response => response.json())
        .then(data => this.setState({
          cardioSessions: this.processPayload(data.data),
          currentPage: data.meta._currentPage,
          totalPages: data.meta._totalPages,
          links: data.links
        })
      );
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
    cardioState: state.cardioMachineSessions
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchSessions: (link) => {
      dispatch(fetchSessionsIfNeeded(link));
    }
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CardioMachinePageButton);
