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

  render() {
    return(
      <div>
	    <div className="table-pagination" aria-label="pagination">
          <a href={this.props.links.first} className="pagination-link">1</a>
          <span className="pagination-ellipsis">&hellip;</span>
          <a href={this.props.links.prev} className="pagination-link">2</a>
          <a className="pagination-link is-current">3</a>
          <a href={this.props.links.next} className="pagination-link">4</a>
          <span className="pagination-ellipsis">&hellip;</span>
          <a href={this.props.links.last} className="pagination-link">5</a>
        </div>
      </div>
    );
  };
}

export default CardioMachineTablePagination;
