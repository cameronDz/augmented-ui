import React from 'react';
import '../../../css/card.css';

const card = ({ child, footer, title }) => {

  const renderHeader = () => {
    return (
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>);
  };

  const renderChild = () => {
    return (
      <div className="card-content">
        <div className="content">{child}</div>
      </div>);
  };

  const renderFooter = () => {
    return !!footer && (
      <footer className="card-footer">
        <div>{footer}</div>
      </footer>);
  };

  return !! title && (
    <div className="card">
      {renderHeader()}
      {renderChild()}
      {renderFooter()}
    </div>);
};

export default card;
