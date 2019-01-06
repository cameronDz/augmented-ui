import React, { Component } from 'react';

/**
 * Triple dot between buttons when multiple pages inbetween next button.
 */
class PageEllipsis extends Component {
  render() {
    return (
      <span className="pagination-ellipsis">&hellip;</span>
    );
  };
}

/**
 * 
 * @prop links Array of Strings
 * @prop currentPage 
 * @prop totalPages
 */
class PageButton extends Component {

  processPayload(payLoad)  {
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
    let classValues;
    if(this.props.currentPage === this.props.pageNumber) {
      classValues = "pagination-link is-current";
    } else { 
      classValues = "pagination-link";
    }	    

    return (
      <a className={classValues} onClick={() => this.onPaginationClick(this.props.pageLink)}>
        {this.props.pageNumber}
      </a>
    );
  }
}

/**
 * 
 * @prop links Array of Strings
 * @prop currentPage 
 * @prop totalPages
 */
class CardioMachineTablePagination extends Component {
    
  render() {
    let pager;	  

    if(this.props.totalPages === 1) {
      // one logic
    } else if(this.props.totalPages === 2) {
      // two logic
    } else if(this.props.totalPages === 3) {
      // three logic	    
    } else if(this.props.totalPages >= 4 && this.props.currentPage === 1) {
      pager = (
        <div className="table-pagination" aria-label="pagination">	      
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber="1" />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber="2" />
          <PageEllipsis />
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />	      
        </div>	      
      );	      
    }	    

    return(
      <div>
        {pager}
      </div>
    );
  };
}

export default CardioMachineTablePagination;
