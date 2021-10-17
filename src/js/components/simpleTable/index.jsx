import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  makeStyles,
  CircularProgress,
  Table,
  TableContainer
} from '@material-ui/core';
import { defaultValue, eventDefaultValue } from '../../lib/defaultValue';
import TableContent from './tableContent';
import TableFooter from './tableFooter';
import TableHeader from './tableHeader';
import { simpleTableStles as styles } from './styles';
import _config from '../../../assets/config.json';

const propTypes = {
  columns: PropTypes.array,
  details: PropTypes.array,
  detailsTitle: PropTypes.string,
  downloadText: PropTypes.string,
  downloadEndpoint: PropTypes.string,
  includeDetails: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPaginated: PropTypes.bool,
  rowsData: PropTypes.array,
  titles: PropTypes.object
};

const rootSelector = 'nssd-table-wrapper';
const useStyles = makeStyles(() => styles);
const SimpleTable = ({
  columns,
  details,
  detailsTitle,
  downloadEndpoint,
  downloadText,
  includeDetails = true,
  isLoading,
  isPaginated = false,
  rowsData,
  titles
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage) => {
    setPage(defaultValue(newPage, 0));
  };

  const handleChangeRows = (event) => {
    setRowsPerPage(eventDefaultValue(event, 5));
    setPage(0);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <div className={classNames(classes.simpleTableWrapper, rootSelector)}>
        <TableContainer>
          <Table className={classNames(classes.tableSelector)} size="small">
            <TableHeader
              columnNames={columns}
              includeDetails={includeDetails}
              titles={titles}
            />
            <TableContent
              columnNames={columns}
              detailNames={details}
              includeDetails={includeDetails}
              rowsData={
                rowsPerPage > 0
                  ? defaultValue(rowsData, []).slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                  : rowsData
              }
              title={detailsTitle}
              titles={titles}
            />
            <TableFooter
              isPaginated={isPaginated}
              onChangePage={handleChangePage}
              onChangeRows={handleChangeRows}
              page={page}
              rowCount={defaultValue(rowsData?.length, 0)}
              rowsPerPage={rowsPerPage}
            />
          </Table>
        </TableContainer>
      </div>
      {isLoading && (
        <div className={classNames(classes.tableLoader)}>
          <CircularProgress />
        </div>
      )}
      {!isLoading && downloadText && downloadEndpoint && (
        <a href={`${_config.baseApiUrl}/${downloadEndpoint}`} target="_">
          {downloadText}
        </a>
      )}
    </Fragment>
  );
};

SimpleTable.propTypes = propTypes;
export default SimpleTable;
