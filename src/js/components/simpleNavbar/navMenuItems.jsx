import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { navbarItemsStyles as styles } from './styles';

const propTypes = {
  links: PropTypes.array,
  title: PropTypes.string
};
const useStyles = makeStyles(() => styles);
const NavMenuItems = ({ links, title = '' }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const id = `menu-${title}-appbar`;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <div
        aria-controls={id}
        aria-haspopup="true"
        aria-label={`${title} menu`}
        className={classes.navTitleContainer}
        color="inherit"
        onClick={handleMenuOpen}
      >
        <div className={classes.navTitleDisplay}>{title}</div>
        <KeyboardArrowDown />
      </div>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        id={id}
        keepMounted
        onClose={handleMenuClose}
        open={isOpen}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {Array.isArray(links) &&
          links.map((link, idx) => {
            return (
              !!link && (
                <MenuItem key={link.url + idx}>
                  <Link to={`/${link.url}`}>{link.title}</Link>
                </MenuItem>
              )
            );
          })}
      </Menu>
    </Fragment>
  );
};

NavMenuItems.propTypes = propTypes;
export default NavMenuItems;
