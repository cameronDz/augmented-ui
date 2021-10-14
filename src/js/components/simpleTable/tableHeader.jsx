import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const propTypes = {
  columnNames: PropTypes.array,
  includeDetails: PropTypes.bool,
  titles: PropTypes.object
};
const TableHeader = ({ columnNames, includeDetails, titles }) => {
  return (
    <TableHead>
      <TableRow>
        {Array.isArray(columnNames) &&
          columnNames.map((col, idx) => {
            return (
              col && <TableCell key={idx}>{titles?.[col] || ''}</TableCell>
            );
          })}
        {includeDetails && <TableCell></TableCell>}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = propTypes;
export default TableHeader;
