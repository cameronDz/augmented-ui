import React from 'react';
import PropType from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { paginationStyles as styles } from './styles';

const propTypes = {
  count: PropType.number.isRequired,
  onPageChange: PropType.func.isRequired,
  page: PropType.number.isRequired,
  rowsPerPage: PropType.number.isRequired
};
const useStyles = makeStyles(() => styles);
const TablePagination = ({ count, page, rowsPerPage, onPageChange }) => {
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const hasNoMorePages = page >= Math.ceil(count / rowsPerPage) - 1;
  const classes = useStyles();
  return (
    <div className={classes.paginationRoot}>
      <IconButton disabled={page === 0} onClick={handleFirstPageButtonClick}>
        <FirstPageIcon />
      </IconButton>
      <IconButton disabled={page === 0} onClick={handleBackButtonClick}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton disabled={hasNoMorePages} onClick={handleNextButtonClick}>
        <KeyboardArrowRight />
      </IconButton>
      <IconButton disabled={hasNoMorePages} onClick={handleLastPageButtonClick}>
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

TablePagination.propTypes = propTypes;
export default TablePagination;
