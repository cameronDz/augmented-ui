import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardioMachinePageButton from './CardioMachinePageButton';

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
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
        </div>            
      );        
    } else if(this.props.totalPages === 2) {
      pager = (
        <div className="table-pagination" aria-label="pagination">      
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
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
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <CardioMachinePageButton pageLink={linkTwo} currentPage={this.props.currentPage} pageNumber={2} /> 
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>     
      );   
    } else if(this.props.totalPages >= 4 && this.props.currentPage === 1) {
      pager = (
        <div className="table-pagination" aria-label="pagination">	      
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <CardioMachinePageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={2} />
          <PageEllipsis />
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />	      
        </div>	      
      );	      
    } else if(this.props.totalPages >= 4 && this.props.currentPage === this.props.totalPages) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageEllipsis />
          <CardioMachinePageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 1} />
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />       
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
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <CardioMachinePageButton pageLink={linkTwo} currentPage={this.props.currentPage} pageNumber={2} />
          <CardioMachinePageButton pageLink={linkThree} currentPage={this.props.currentPage} pageNumber={3} />
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={4} />       
        </div>        
      );  
    } else if (this.props.totalPages >= 5 && this.props.currentPage === 2) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <CardioMachinePageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={2} />
          <CardioMachinePageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={3} />  
          <PageEllipsis />   
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );      
    } else if (this.props.totalPages >= 5 && this.props.currentPage === this.props.totalPages - 1) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageEllipsis />   
          <CardioMachinePageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 2} />
          <CardioMachinePageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 1} />  
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );      
    } else if (this.props.totalPages === 5) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <CardioMachinePageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={2} />
          <CardioMachinePageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={3} />
          <CardioMachinePageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={4} />     
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={5} />  
        </div>        
      );  
    } else if (this.props.currentPage === 3) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <CardioMachinePageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={2} />
          <CardioMachinePageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={3} />
          <CardioMachinePageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={4} />  
          <PageEllipsis />   
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );     
    } else if (this.props.currentPage === this.props.totalPages - 2) {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} /> 
          <PageEllipsis />   
          <CardioMachinePageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 3} />
          <CardioMachinePageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 2} />
          <CardioMachinePageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={this.props.totalPages - 1} />  
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={this.props.totalPages} />  
        </div>    
      );     
    } else {
      pager = (
        <div className="table-pagination" aria-label="pagination">        
          <CardioMachinePageButton pageLink={this.props.links.first} currentPage={this.props.currentPage} pageNumber={1} />
          <PageEllipsis />
          <CardioMachinePageButton pageLink={this.props.links.prev} currentPage={this.props.currentPage} pageNumber={this.props.currentPage - 1} />
          <CardioMachinePageButton pageLink={this.props.links.self} currentPage={this.props.currentPage} pageNumber={this.props.currentPage} />
          <CardioMachinePageButton pageLink={this.props.links.next} currentPage={this.props.currentPage} pageNumber={this.props.currentPage + 1} />  
          <PageEllipsis />   
          <CardioMachinePageButton pageLink={this.props.links.last} currentPage={this.props.currentPage} pageNumber={5} />  
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
  cardioState: state.cardioMachineSessions
});

export default connect(mapStateToProps, null)(CardioMachineTablePagination);
