import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow as MuiTableRow } from '@material-ui/core';
import RowDetailsButton from './rowDetailsButton';

const propTypes = {
  columns: PropTypes.array,
  details: PropTypes.array,
  includeDetails: PropTypes.bool,
  rowData: PropTypes.object,
  title: PropTypes.string,
  titles: PropTypes.object
};
const TableRow = ({ columns, details, includeDetails, rowData, title, titles }) => {
  return Object.keys(rowData).length > 0 && (
    <MuiTableRow>
      {Array.isArray(columns) && columns.map((col, idx) => {
        return col && <TableCell key={col?.id || idx}>{rowData[col]}</TableCell>;
      })}
      {includeDetails && (
        <TableCell align="center">
          <RowDetailsButton
            data={rowData}
            details={details}
            title={title}
            titles={titles}
          />
        </TableCell>
      )}
    </MuiTableRow>);
};

TableRow.propTypes = propTypes;
export default TableRow;
