import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  children: PropTypes.object,
  index: PropTypes.number,
  value: PropTypes.number
};
const tabPanel = ({ children, index, value, ...other }) => {
  return (
    <Typography component="div"
      hidden={value !== index}
      role="tabpanel"
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>);
};

tabPanel.propTypes = propTypes;
export default tabPanel;
