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
      <AppBar position="static">
        <Toolbar>
          <div className={classNames(classes.navImageLogo)}>
            <img alt="augmented-logo" src="images/aug-logo.png"/>
          </div>
          <Link to="/">Home</Link>
          <NavMenuItems links={fitnessLinks} title="Fitness" />
          <NavMenuItems links={nutrientsLinks} title="Nutrients" />
          <Link to="/help">Help</Link>
          <AuthenticateButton isSecuredUser={isSecuredUser} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

SimpleNavbar.propTypes = propTypes;
export default SimpleNavbar;
