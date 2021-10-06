import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  columnNames: PropTypes.array,
  includeDetails: PropTypes.bool,
  titles: PropTypes.object
};
const TableHeader = ({ columnNames, includeDetails, titles }) => {
  return (
    <thead>
      <tr>
        {Array.isArray(columnNames) && columnNames.map((col, idx) => {
          return col && <th key={idx}>{titles?.[col] || ''}</th>;
        })}
        {includeDetails && <th></th>}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = propTypes;
export default TableHeader;
