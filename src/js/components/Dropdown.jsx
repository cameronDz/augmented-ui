import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import onClickOutside from 'react-onclickoutside';

const propTypes = {
  list: PropTypes.array,
  resetThenSet: PropTypes.func,
  title: PropTypes.string
};

class Dropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
  }

  handleClickOutside (e) {
    this.setState({
      listOpen: false
    });
  }

  selectItem = (title, id, stateKey) => {
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey));
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render () {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;

    const renderList = () => {
      return Array.isArray(list) && list.map((item) => (
        <a className="dropdown-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>
          {item.title}
          {item.selected && <FontAwesome name="check" />}
        </a>));
    };

    const dropDownContent = () => {
      return !!listOpen && <div className="dropdown-content">{renderList()}</div>;
    };

    const listAwesomeFontName = () => {
      const name = listOpen ? 'angle-up' : 'angle-down';
      return <FontAwesome name={name} />;
    };

    return (
      <div className="dropdown is-active">
        <div className="dropdown-trigger" onClick={this.toggleList}>
          <button className="button" aria-haspopup="true" aria-controls="drowndown-menu">
            <span>{headerTitle} &nbsp;</span>
            {listAwesomeFontName()}
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          {dropDownContent()}
        </div>
      </div>);
  }
}

Dropdown.propTypes = propTypes;
export default onClickOutside(Dropdown);
