import React from 'react';
import PropType from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles
} from '@material-ui/core';
import { handleFunction } from '../lib/eventHandler';
import { simpleDialogStyles as styles } from './styles';

const propTypes = {
  contentBody: PropType.any,
  contentFooter: PropType.any,
  contentHeader: PropType.any,
  isOpen: PropType.bool,
  onClose: PropType.func
};
const useStyles = makeStyles(() => styles);
const SimpleDialog = ({
  contentBody,
  contentFooter,
  contentHeader,
  isOpen,
  onClose
}) => {
  const classes = useStyles();
  const handleClose = () => {
    handleFunction(onClose);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <div className={classes.dialogContainer}>
        <div className={classes.dialogHeader}>
          <DialogTitle>{contentHeader}</DialogTitle>
        </div>
        <div className={classes.dialogBody}>
          <DialogContent>{contentBody}</DialogContent>
        </div>
        <div className={classes.dialogFooter}>
          {!!contentFooter && <DialogActions>{contentFooter}</DialogActions>}
        </div>
      </div>
    </Dialog>
  );
};

SimpleDialog.propTypes = propTypes;
export { SimpleDialog };
