import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { IconButton } from '@material-ui/core';
import { SimpleDialog } from '../simpleDialog';

const propTypes = {
  data: PropTypes.object,
  details: PropTypes.array,
  title: PropTypes.string,
  titles: PropTypes.object
};

const RowDetailsButton = ({ data, details = null, title = '', titles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <td style={{ textAlign: 'center' }}>
      <IconButton onClick={() => setIsOpen(true)}>
        <ErrorOutlineIcon />
      </IconButton>
      <SimpleDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contentHeader={title}
        contentBody={
          <Fragment>
            {Array.isArray(details) && details.map((item, idx) => {
              return titles?.[item] && (
                <div key={idx}>
                  <span>{titles[item]}</span>
                  {`: ${!!data?.[item] || data?.[item] === 0 ? data[item] : ''}`}
                </div>
              );
            })}
          </Fragment>
        }
      />
    </td>);
};

RowDetailsButton.propTypes = propTypes;
export default RowDetailsButton;
