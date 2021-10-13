import React from 'react';
import PropTypes from 'prop-types';
import { TableBody } from '@material-ui/core';
import TableRow from './tableRow';

const propTypes = {
  columnNames: PropTypes.array,
  detailNames: PropTypes.array,
  includeDetails: PropTypes.bool,
  rowsData: PropTypes.array,
  title: PropTypes.string,
  titles: PropTypes.object
};
const TableContent = ({ columnNames, detailNames, includeDetails, rowsData, title, titles }) => {
  return (
    <TableBody>
      {Array.isArray(rowsData) && rowsData.map((row, idx) => {
        return (
          <TableRow
            key={row?.id || idx}
            columns={columnNames}
            details={detailNames}
            includeDetails={includeDetails}
            rowData={row}
            title={title}
            titles={titles}
          />
        );
      })}
    </TableBody>
  );
};

TableContent.propTypes = propTypes;
export default TableContent;
