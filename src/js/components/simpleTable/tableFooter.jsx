import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  TableFooter as MuiTableFooter,
  TablePagination as MuiTablePagination,
  TableRow
} from '@material-ui/core';
import TablePagination from './tablePagination';
import { handleFunction } from '../../lib/eventHandler';

const propTypes = {
  isPaginated: PropTypes.bool,
  onChangePage: PropTypes.func,
  onChangeRows: PropTypes.func,
  page: PropTypes.number,
  rowCount: PropTypes.number,
  rowsPerPage: PropTypes.number
};
const TableFooter = ({
  isPaginated,
  onChangePage = null,
  onChangeRows = null,
  page = 0,
  rowCount = 0,
  rowsPerPage = 5
}) => {
  const handleLabelDisplay = ({ from, to, count }) => {
    const toAmount = to > -1 ? to : count;
    return `${from}-${toAmount} of ${count}`;
  };

  return (
    <Fragment>
      {isPaginated && rowCount > 0 && (
        <MuiTableFooter>
          <TableRow>
            <MuiTablePagination
              ActionsComponent={TablePagination}
              count={rowCount}
              labelDisplayedRows={handleLabelDisplay}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_event, newPage) =>
                handleFunction(onChangePage, newPage)
              }
              onRowsPerPageChange={(event) =>
                handleFunction(onChangeRows, event)
              }
            />
          </TableRow>
        </MuiTableFooter>
      )}
    </Fragment>
  );
};

TableFooter.propTypes = propTypes;
export default TableFooter;
