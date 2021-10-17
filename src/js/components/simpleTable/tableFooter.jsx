import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  TableFooter as MuiTableFooter,
  TablePagination as MuiTablePagination,
  TableRow
} from '@material-ui/core';
import TablePagination from './tablePagination';
import { handleFunction } from '../../lib/eventHandler';
import _config from '../../../assets/config.json';

const propTypes = {
  downloadText: PropTypes.string,
  downloadEndpoint: PropTypes.string,
  isLoading: PropTypes.bool,
  isPaginated: PropTypes.bool,
  onChangePage: PropTypes.func,
  onChangeRows: PropTypes.func,
  page: PropTypes.number,
  rowCount: PropTypes.number,
  rowsPerPage: PropTypes.number
};
const TableFooter = ({
  downloadText,
  downloadEndpoint,
  isLoading,
  isPaginated,
  onChangePage = null,
  onChangeRows = null,
  page = 0,
  rowCount = 0,
  rowsPerPage = 5
}) => {
  return (
    <Fragment>
      {isPaginated && rowCount > 0 && (
        <MuiTableFooter>
          <TableRow>
            <MuiTablePagination
              ActionsComponent={TablePagination}
              colSpan={3}
              count={rowCount}
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
      {!isLoading && downloadText && downloadEndpoint && (
        <a href={`${_config.baseApiUrl}/${downloadEndpoint}`} target="_">
          {downloadText}
        </a>
      )}
    </Fragment>
  );
};

TableFooter.propTypes = propTypes;
export default TableFooter;
