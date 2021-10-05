import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';

const propTypes = {
  links: PropTypes.array,
  title: PropTypes.bool
};
const NavMenuItems = ({ links, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const id = `menu-${title}-appbar`;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <div
        aria-controls="menu-fitness-appbar"
        aria-haspopup="true"
        aria-label={id}
        onClick={handleMenuOpen}
        color="inherit"
      >
        {title}
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
        {Array.isArray(links) && links.map((link, idx) => {
          return !!link && (
            <MenuItem key={link.url + idx}>
              <Link to={`/${link.url}`}>{link.title}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );
};

NavMenuItems.propTypes = propTypes;
export default NavMenuItems;
