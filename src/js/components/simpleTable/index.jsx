import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  makeStyles,
  CircularProgress,
  Table,
  TableContainer
} from '@material-ui/core';
import TableContent from './tableContent';
import TableFooter from './tableFooter';
import TableHeader from './tableHeader';
import { simpleTableStles as styles } from './styles';

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
              rowsData={rowsData}
              title={detailsTitle}
              titles={titles}
            />
            <TableFooter
              downloadEndpoint={downloadEndpoint}
              downloadText={downloadText}
              isLoading={isLoading}
              isPaginated={isPaginated}
            />
          </Table>
        </TableContainer>
      </div>
      {isLoading && (
        <div className={classNames(classes.tableLoader)}>
          <CircularProgress />
        </div>
      )}
    </Fragment>
  );
};

SimpleTable.propTypes = propTypes;
export default SimpleTable;
