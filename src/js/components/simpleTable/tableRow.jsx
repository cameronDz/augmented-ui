import React from 'react';
import PropTypes from 'prop-types';
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
    <tr>
      {Array.isArray(columns) && columns.map((col, idx) => {
        return col && <td key={col?.id || idx}>{rowData[col]}</td>;
      })}
      {includeDetails && (
        <RowDetailsButton
          data={rowData}
          details={details}
          title={title}
          titles={titles}
        />
      )}
    </tr>);
};

TableRow.propTypes = propTypes;
export default TableRow;
