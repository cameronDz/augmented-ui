import React, { useEffect, useState } from 'react';
import get from 'lodash.get';

const card = props => {

  const [child, setChild] = useState();
  const [footer, setFooter] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setChild(get(props, 'child', null));
    setFooter(get(props, 'footer', null));
    setTitle(get(props, 'title', ''));
  }, []);

  const renderFooter = () =>{
    return (!!footer)
      ? (<footer className="card-footer">
          <div>
            {footer}
          </div>
        </footer>)
      : null;
  };

  return (!!title)
    ? (<div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
        <div className="card-content">
          <div className="content">	    
            {child}
          </div>
        </div>
        {renderFooter()}
      </div>)
    : null;
};

export default card;
