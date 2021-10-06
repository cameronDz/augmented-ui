import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { footerStyles as styles } from './styles';
import _package from '../../../package.json';

const useStyles = makeStyles(() => styles);
const footer = () => {
  const homepageUrl = _package.author.url;
  const name = _package.author.name;
  const repositoryUrl = _package.repository.url;

  const classes = useStyles();
  return (
    <footer className={classNames('nssd-footer-container', classes.footerContainer)}>
      <p className={classNames(classes.footerVerbiage)}>
        <span className={classNames(classes.appTitle)}>
          {`Augmented @v${_package.version}`}
        </span>
        <span>. Created by </span>
        <a href={homepageUrl} target="_">{name}</a>
        <span>. Repository on </span>
        <a href={repositoryUrl} target="_">GitHub</a>
        <span>.</span>
      </p>
    </footer>);
};

export default footer;
