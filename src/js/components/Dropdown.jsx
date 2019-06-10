import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import onClickOutside from "react-onclickoutside";

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(e) {
    this.setState({
      listOpen: false
    })
  }

  selectItem = (title, id, stateKey) => {
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey))
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const { list } = this.props
    const { listOpen, headerTitle } = this.state
    return (
      <div className="dropdown is-active">
        <div className="dropdown-trigger" onClick={this.toggleList}>
          <button className="button" aria-haspopup="true" aria-controls="drowndown-menu">
            <span>{headerTitle} &nbsp;</span>
            {listOpen
              ? <FontAwesome name="angle-up" />
              : <FontAwesome name="angle-down" />
            }
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
        {listOpen && <div className="dropdown-content">
          {list.map((item) => (
            <a className="dropdown-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>
              {item.title} 
              {item.selected && <FontAwesome name="check" />}
            </a>
          ))}
        </div>}
      </div>
    </div>
    )
  }
}

export default onClickOutside(Dropdown);
