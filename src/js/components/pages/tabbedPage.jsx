import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  makeStyles,
  AppBar,
  Grid,
  Tab,
  Tabs
} from '@material-ui/core';
import SimpleNavbar from '../simpleNavbar';
import TabPanel from './tabPanel';
import { tabbedPageStyles as styles } from './styles';

const propTypes = {
  isTabsCentered: PropTypes.bool,
  isSecuredUser: PropTypes.bool,
  tabNames: PropTypes.array.isRequired,
  tabPanels: PropTypes.array.isRequired,
  title: PropTypes.string
};
const useStyles = makeStyles(() => styles);
const TabbedPage = ({ isTabsCentered = false, isSecuredUser = false, tabNames = [], tabPanels = [], title = '' }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const renderTabLabels = () => {
    return !!Array.isArray(tabNames) && tabNames.map((item, key) => {
      return <Tab key={key} label={item} />;
    });
  };

  const renderTabPanels = () => {
    return !!Array.isArray(tabPanels) && tabPanels.map((item, idx) => {
      return <TabPanel key={item?.id || idx} index={idx} value={value}>{item}</TabPanel>;
    });
  };

  const classes = useStyles();
  return (
    <Grid className={classes.pageRoot} container>
      <Grid item xs={12} sm={12} md={1}></Grid>
      <Grid item xs={12} sm={12} md={10}>
        <SimpleNavbar isSecuredUser={isSecuredUser} />
        <AppBar position="static">
          <Tabs centered={isTabsCentered} value={value} onChange={handleChange} >
            {renderTabLabels()}
          </Tabs>
        </AppBar>
        {renderTabPanels()}
      </Grid>
      <Grid item xs={12} sm={12} md={1}></Grid>
    </Grid>);
};

TabbedPage.propTypes = propTypes;
const mapStateToProps = (state) => ({ isSecuredUser: !!state.auth.token });
export default connect(mapStateToProps)(TabbedPage);
