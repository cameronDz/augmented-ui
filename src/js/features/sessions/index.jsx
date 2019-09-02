import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../../components/general/Navbar';
import SessionCreator from '../../components/fitness/cardioMachine/sessionCreator';
import SessionsTableDisplay from '../../components/fitness/cardioMachine/sessionsTableDisplay';
import TabPanel from './tabPanel';

const styles = {
  hero: {
    fontSize: '26px',
    padding: '16px',
    textAlign: 'center'
  },
  root: {
    margin: '0 auto',
    maxWidth: '1280px'
  }
};

const sessions = props => {
  const { classes } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid className={classes.root} container>
        <Grid item xs={12} sm={12} md={1}></Grid>
        <Grid item xs={12} sm={12} md={10}>
          <Navbar />
          <h2 className={classes.hero}>Sessions</h2>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} >
              <Tab label="Information" />
              <Tab label="Record" />
              <Tab label="History" />
              <Tab label="Data Visualization" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <p>Information on fitness sessions</p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SessionCreator />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SessionsTableDisplay />
          </TabPanel>
          <TabPanel value={value} index={3}>
            Under construction
          </TabPanel>
        </Grid>
        <Grid item xs={12} sm={12} md={1}></Grid>
      </Grid>
    </React.Fragment>);
};

export default withStyles(styles)(sessions);
