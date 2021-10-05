import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';
import AuthenticateButton from './authenticateButton';
import NavMenuItems from './navMenuItems';
import { fitnessLinks, nutrientsLinks } from './links';
import { simpleNavbarStyles as styles } from './styles';

const propTypes = { isSecuredUser: PropTypes.bool };
const useStyles = makeStyles(() => styles);
const SimpleNavbar = ({ isSecuredUser }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.simpleNavWrapper)}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <div className={classNames(classes.navItem, classes.navImageLogo)}>
            <img alt="augmented-logo" src="images/aug-logo.png"/>
          </div>
          <div className={classNames(classes.navItem)}>
            <Link to="/">Home</Link>
          </div>
          <div className={classNames(classes.navItem)}>
            <NavMenuItems links={fitnessLinks} title="Fitness" />
          </div>
          <div className={classNames(classes.navItem)}>
            <NavMenuItems links={nutrientsLinks} title="Nutrients" />
          </div>
          <div className={classNames(classes.navItem)}>
            <Link to="/help">Help</Link>
          </div>
          <div className={classNames(classes.navItemEnd)}>
            <AuthenticateButton isSecuredUser={isSecuredUser} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SimpleNavbar.propTypes = propTypes;
export default SimpleNavbar;
