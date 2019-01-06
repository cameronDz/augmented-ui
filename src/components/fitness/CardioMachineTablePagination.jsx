import React, { Component } from 'react';

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
    return(
      <div>
          <div className="table-pagination" aria-label="pagination">
          <a onClick={() => this.onPaginationClick(this.props.links.first)} className="pagination-link">1</a>
          <span className="pagination-ellipsis">&hellip;</span>
          <a onClick={() => this.onPaginationClick(this.props.links.prev)} className="pagination-link">2</a>
          <a className="pagination-link is-current">3</a>
          <a onClick={() => this.onPaginationClick(this.props.links.next)} className="pagination-link">4</a>
          <span className="pagination-ellipsis">&hellip;</span>
          <a onClick={() => this.onPaginationClick(this.props.links.last)} className="pagination-link">5</a>
        </div>
      </div>
    );
  };
}

export default CardioMachineTablePagination;
