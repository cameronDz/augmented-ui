import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const tabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography component="div"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>);
};

export default tabPanel;
