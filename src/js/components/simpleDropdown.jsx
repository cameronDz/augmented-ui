import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  list: PropTypes.array,
  resetThenSet: PropTypes.func,
  selectedId: PropTypes.string,
  title: PropTypes.string
};
const SimpleDropdown = ({ list, resetThenSet, selectedId, title }) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title || '');

  useEffect(() => {
    setHeaderTitle(title);
  }, []);

  const handleSelectItem = (updatedTitle, id, stateKey) => {
    setListOpen(false);
    setHeaderTitle(updatedTitle);
    resetThenSet(id, stateKey);
  };

  const handleToggleList = () => {
    setListOpen((prev) => {
      return !prev;
    });
  };

  const renderList = () => {
    return list?.map((item) => {
      return !!item && (
        <a className="dropdown-item" key={item.id} onClick={() => handleSelectItem(item.title, item.id, item.key)}>
          <span>{item.title} </span>
          {item.id === selectedId && <FontAwesome name="check" />}
        </a>);
    });
  };

  const listAwesomeFontName = () => {
    const name = listOpen ? 'angle-up' : 'angle-down';
    return <FontAwesome name={name} />;
  };

  return (
    <ClickAwayListener onClickAway={() => setListOpen(false)}>
      <div className="dropdown is-active">
        <div className="dropdown-trigger" onClick={handleToggleList}>
          <button className="button" aria-haspopup="true" aria-controls="drowndown-menu">
            <span>{headerTitle} &nbsp;</span>
            {listAwesomeFontName()}
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          {!!listOpen && <div className="dropdown-content">{renderList()}</div>}
        </div>
      </div>
    </ClickAwayListener>);
};

SimpleDropdown.propTypes = propTypes;
export default SimpleDropdown;
