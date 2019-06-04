import React, { useEffect, useState } from 'react';
import get from 'lodash.get';

const card = props => {

  const [child, setChild] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setChild(get(props, 'child', null));
    setTitle(get(props, 'title', ''));
  }, []);

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
      </div>)
    : null;
};

export default card;
