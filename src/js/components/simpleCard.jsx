import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { cardStyles as styles } from './styles';

const propTypes = {
  child: PropTypes.any,
  footer: PropTypes.any,
  title: PropTypes.string
};
const useStyles = makeStyles(() => styles);
const SimpleCard = ({ child, footer, title }) => {
  const classes = useStyles();
  const renderHeader = () => {
    return (
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>);
  };

  const renderChild = () => {
    return (
      <div className={classNames('card-content', classes.cardContent)}>
        <div className="content">{child}</div>
      </div>);
  };

  const renderFooter = () => {
    return !!footer && <footer className="card-footer">{footer}</footer>;
  };

  return !!title && (
    <div className={classNames('card', classes.cardContainer)}>
      {renderHeader()}
      {renderChild()}
      {renderFooter()}
    </div>);
};

SimpleCard.propTypes = propTypes;
export default SimpleCard;
