import React, { useEffect, useState } from 'react';
import get from 'lodash.get';
import '../../../css/card.css';

const card = props => {

  const [child, setChild] = useState();
  const [footer, setFooter] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setChild(get(props, 'child', null));
    setFooter(get(props, 'footer', null));
    setTitle(get(props, 'title', ''));
  }, []);

  const renderHeader = () => {
    return (
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>);
  };

  const renderChild = () => {
    return (
      <div className="card-content">
        <div className="content">
          {child}
        </div>
      </div>);
  };

  const renderFooter = () => {
    return (!!footer)
      ? (<footer className="card-footer">
          <div>
            {footer}
          </div>
        </footer>)
      : null;
  };

  const shouldRenderCard = () => {
    if (!!title) {
      return (
        <div className="card">
          {renderHeader()}
          {renderChild()}
          {renderFooter()}
        </div>);
    }
    return null;
  }

  return (
    <React.Fragment>
      {shouldRenderCard()}
    </React.Fragment>);
};

export default card;
