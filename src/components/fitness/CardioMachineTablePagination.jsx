import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessionsIfNeeded } from '../../actions/cardioMachineSessionAction';

/**
 * Triple dot between buttons when multiple pages inbetween next button.
 */
class PageEllipsis extends Component {
  render() {  
    return (
      <span className="pagination-ellipsis">&hellip;</span>
    );
  };
};

/**
 * 
 * @prop links Array of Strings
 * @prop currentPage 
 * @prop totalPages
 */
class PageButton extends Component {

  processPayload(payLoad)  {
    console.log("cardioState: " + this.props.cardioState);
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
    dispatch(fetchPostsIfNeeded(link));
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

/**
 * 
 * @prop links Array of Strings
 * @prop currentPage 
 * @prop totalPages
 */
class CardioMachineTablePagination extends Component {
    
  render() {
    let pager;	  

    if (this.props.totalPages === 0 ) {
      pager = (
        <div className="table-pagination" aria-label="pagination">
        </div>
      );
    } else if(this.props.totalPages === 1) {
      pager = (
        <div className="table-pagination" aria-label="pagination">      
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
        </div>            
      );        
    } else if(this.props.totalPages === 2) {
      pager = (
        <div className="table-pagination" aria-label="pagination">      
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>     
      );               
    } else if(this.props.totalPages === 3) {
      let linkTwo;
      if(this.props.currentPage === 1) {
        linkTwo = this.props.links.next;
      } else if (this.props.currentPage === 3) {
        linkTwo = this.props.links.prev;
      } else {
        linkTwo = this.props.links.self;
      }
      
      pager = (
        <div className="table-pagination" aria-label="pagination">      
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageButton pageLink={linkTwo} currentPage={this.props.currentPage} pageNumber={2} /> 
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>     
      );   
    } else if(this.props.totalPages >= 4 && this.props.currentPage === 1) {
      pager = (
        <div className="table-pagination" aria-label="pagination">	      
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={2} />
          <PageEllipsis />
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />	      
        </div>	      
      );	      
    } else if(this.props.totalPages >= 4 && this.props.currentPage === this.props.totalPages) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageEllipsis />
          <PageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 1} />
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />       
        </div>        
      );        
    } else if (this.props.totalPages === 4) {
      let linkTwo;
      let linkThree;
      if(this.props.currentPage === 2) {
        linkTwo = this.props.links.self;
        linkThree = this.props.links.next;
      } else {
        linkTwo = this.props.links.prev;
        linkThree = this.props.links.self;
      } 
      
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageButton pageLink={linkTwo} currentPage={this.props.currentPage} pageNumber={2} />
          <PageButton pageLink={linkThree} currentPage={this.props.currentPage} pageNumber={3} />
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={4} />       
        </div>        
      );  
    } else if (this.props.totalPages >= 5 && this.props.currentPage === 2) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={2} />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={3} />  
          <PageEllipsis />   
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );      
    } else if (this.props.totalPages >= 5 && this.props.currentPage === this.props.totalPages - 1) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageEllipsis />   
          <PageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 2} />
          <PageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 1} />  
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );      
    } else if (this.props.totalPages === 5) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={2} />
          <PageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={3} />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={4} />     
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={5} />  
        </div>        
      );  
    } else if (this.props.currentPage === 3) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={2} />
          <PageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={3} />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={4} />  
          <PageEllipsis />   
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );     
    } else if (this.props.currentPage === this.props.totalPages - 2) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageEllipsis />   
          <PageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 3} />
          <PageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 2} />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 1} />  
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );     
    } else {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <PageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageEllipsis />
          <PageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.currentPage - 1} />
          <PageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={this.props.currentPage} />
          <PageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={this.props.currentPage + 1} />  
          <PageEllipsis />   
          <PageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={5} />  
        </div>    
      );  
    }
    
    return(
      <div>
        {pager}
      </div>
    );
  };
};

const mapStateToProps = state =>  ({
  cardioState: state.cardioMachineSessionState
});

export default connect(mapStateToProps, null)(CardioMachineTablePagination);
