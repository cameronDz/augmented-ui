import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../header/navbar';
import TabPanel from './tabPanel';

const propTypes = {
  classes: PropTypes.object,
  tabNames: PropTypes.array.isRequired,
  tabPanels: PropTypes.array.isRequired,
  title: PropTypes.string
};

const styles = {
  hero: { fontSize: '26px', padding: '16px', textAlign: 'center' },
  root: { margin: '0 auto', maxWidth: '1280px' }
};

const page = ({ classes, tabNames, tabPanels, title }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabLabels = () => {
    return !!Array.isArray(tabNames) && tabNames.map((item, key) => {
      return <Tab key={key} label={item} />;
    });
  };

  const renderTabPanels = () => {
    return !!Array.isArray(tabPanels) && tabPanels.map((item, key) => {
      return (<TabPanel index={key} key={key} value={value}>{item}</TabPanel>);
    });
  };

  return (
    <Grid className={classes.root} container>
      <Grid item xs={12} sm={12} md={1}></Grid>
      <Grid item xs={12} sm={12} md={10}>
        <Navbar />
        <h2 className={classes.hero}>{title}</h2>
        <AppBar position="static">
          <Tabs centered={true} value={value} onChange={handleChange} >
            {renderTabLabels()}
          </Tabs>
        </AppBar>
        {renderTabPanels()}
      </Grid>
      <Grid item xs={12} sm={12} md={1}></Grid>
    </Grid>);
};

page.propTypes = propTypes;
export default withStyles(styles)(page);
