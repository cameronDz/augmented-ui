import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles, Typography } from '@material-ui/core';
import { tabPanelStyles as styles } from './styles';

const propTypes = {
  children: PropTypes.object,
  index: PropTypes.number,
  value: PropTypes.number
};
const useStyles = makeStyles(() => styles);
const tabPanel = ({ children, index, value, ...other }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.tabContentWrapper}
      component="div"
      hidden={value !== index}
      role="tabpanel"
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>);
};

tabPanel.propTypes = propTypes;
export default tabPanel;
