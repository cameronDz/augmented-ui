import React from 'react';
import PropTypes from 'prop-types';
import '../../css/card.css';

const propTypes = {
  child: PropTypes.any,
  footer: PropTypes.any,
  title: PropTypes.string
};
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
    return !!footer && <footer className="card-footer">{footer}</footer>;
  };

  return !!title && (
    <div className="card">
      {renderHeader()}
      {renderChild()}
      {renderFooter()}
    </div>);
};

card.propTypes = propTypes;
export default card;
