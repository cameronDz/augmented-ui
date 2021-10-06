import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, CircularProgress } from '@material-ui/core';
import TableContent from './tableContent';
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
  rowsData: PropTypes.array,
  titles: PropTypes.object
};

const useStyles = makeStyles(() => styles);
const SimpleTable = ({
  columns,
  details,
  detailsTitle,
  downloadEndpoint,
  downloadText,
  includeDetails = true,
  isLoading,
  rowsData,
  titles
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classNames(classes.simpleTableWrapper, 'nssd-table-wrapper')}>
        <table className={classNames(classes.tableSelector)}>
          <TableHeader columnNames={columns} includeDetails={includeDetails} titles={titles} />
          <TableContent
            columnNames={columns}
            detailNames={details}
            includeDetails={includeDetails}
            rowsData={rowsData}
            title={detailsTitle}
            titles={titles}
          />
        </table>
      </div>
      {downloadText && downloadEndpoint && (
        <a className={classNames(classes.tableFooterItem)} href={`${_config.baseApiUrl}/${downloadEndpoint}`} target="_">
          {downloadText}
        </a>
      )}
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
