import React, { Component } from 'react';

/**
 *
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
 */
class PageButton extends Component {

  constructor(props) {
    super(props);
  };

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
    return (
      <a className="pagination-link" onClick={() => this.onPaginationClick(this.props.pageLink)}>
        {this.props.pageNumber}
      </a>
    );
  }
}

/**
 * 
 */
class CardioMachineTablePagination extends Component {
    
  /**
   * Expected props;
   * links: ["self": "", "first": "", "last": "", "prev": "", "next": ""]
   * currentPage: int
   * totalPages: int
   */
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
          <div className="table-pagination" aria-label="pagination">
          <PageButton pageLink={this.props.links.first} pageNumber="1" />
          <PageEllipsis />
          <PageButton pageLink={this.props.links.prev} pageNumber="2" />
          <a className="pagination-link is-current">3</a>
          <PageButton pageLink={this.props.links.next} pageNumber="4" />
          <PageEllipsis />
          <PageButton pageLink={this.props.links.last} pageNumber="5" />
        </div>
      </div>
    );
  };
}

export default CardioMachineTablePagination;
