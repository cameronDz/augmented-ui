import React, { useEffect, useState, Fragment } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import {
  makeStyles,
  Button,
  CircularProgress,
  DialogContentText,
  TextField
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { SimpleDialog } from '../components/simpleDialog';
import {
  cancelToken,
  clearStatus,
  clearToken,
  fetchToken,
  livenessCheck
} from './state/actions';
import { handleFunction } from '../lib/eventHandler';
import { requestTokenDialogStyles as styles } from './styles';

const title = 'Sign in with credentials';
const propTypes = {
  cancelTokenFetch: PropType.func,
  clearTokenStatus: PropType.func,
  clearTokenUser: PropType.func,
  error: PropType.any,
  fetchUserToken: PropType.func,
  isAuthLive: PropType.bool,
  isOpen: PropType.bool,
  isProcessingRequest: PropType.bool,
  livenessTokenCheck: PropType.func,
  onClose: PropType.func,
  securedUser: PropType.string,
  success: PropType.bool,
  token: PropType.any
};
const useStyles = makeStyles(() => styles);
const RequestTokenDialog = ({
  cancelTokenFetch,
  clearTokenStatus,
  clearTokenUser,
  error,
  fetchUserToken,
  isAuthLive,
  isOpen,
  isProcessingRequest,
  livenessTokenCheck,
  onClose,
  securedUser,
  success,
  token
}) => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!isOpen) {
      handleFunction(clearTokenStatus);
      setPassword('');
    }
    if (securedUser) {
      setPassword('');
    }
    setUsername(securedUser || '');
  }, [clearTokenStatus, isOpen, securedUser]);

  useEffect(() => {
    if (isOpen && !isAuthLive) {
      handleFunction(livenessTokenCheck);
    }
  }, [isAuthLive, isOpen, livenessTokenCheck]);

  const handleActionClick = () => {
    if (token) {
      handleFunction(clearTokenUser);
    } else {
      const credentials = { username, password };
      handleFunction(fetchUserToken, credentials);
    }
  };

  const handleClose = () => {
    if (!isProcessingRequest) {
      handleFunction(onClose);
    } else {
      handleFunction(cancelTokenFetch);
    }
  };

  const handleTextKeyPress = (event) => {
    if (event?.key === 'Enter' && !!username && !!password) {
      handleActionClick();
    }
  };

  const getText = () => {
    return token
      ? 'You\'re credentials are valid.'
      : 'To create new Augmented sessions and logs, please log in with valid credentials.';
  };

  return (
    <SimpleDialog
      isOpen={isOpen}
      onClose={handleClose}
      contentHeader={title}
      contentBody={
        <Fragment>
          <div className={classes?.dialogContentContainer}>
            {isProcessingRequest
              ? (
              <CircularProgress />
                )
              : (
              <Fragment>
                {error && <Alert severity="error">Unable to validate credentials. Please try again!</Alert>}
                {success && <Alert severity="success">Successfully validated credentials!</Alert>}
                {!error && !success && <DialogContentText>{getText()}</DialogContentText>}
              </Fragment>
                )}
          </div>
          <TextField
            autoFocus
            disabled={isProcessingRequest || !!token}
            fullWidth={true}
            id="username"
            label="Username"
            margin="dense"
            onChange={(event) => setUsername(event?.target?.value)}
            onKeyPress={(event) => handleTextKeyPress(event)}
            type="text"
            value={username}
            variant="standard"
          />
          <TextField
            disabled={isProcessingRequest || !!token}
            fullWidth={true}
            id="password"
            label="Password"
            margin="dense"
            onChange={(event) => setPassword(event?.target?.value)}
            onKeyPress={(event) => handleTextKeyPress(event)}
            type="password"
            value={password}
            variant="standard"
          />
        </Fragment>
      }
      contentFooter={
        <Fragment>
          <Button onClick={handleClose}>{token ? 'Close' : 'Cancel'}</Button>
          {token
            ? (
            <Button disabled={isProcessingRequest} onClick={handleActionClick}>
              Clear Credentials
            </Button>
              )
            : (
            <Button
              disabled={isProcessingRequest || !username || !password}
              onClick={handleActionClick}
            >
              Signin
            </Button>
              )}
        </Fragment>
      }
    />
  );
};

RequestTokenDialog.propTypes = propTypes;
const mapStateToProps = (state) => ({
  error: state.auth.error,
  isAuthLive: state.auth.isLive,
  isProcessingRequest: state.auth.isFetching,
  securedUser: state.auth.username,
  success: state.auth.success,
  token: state.auth.token
});
const mapDispatchToProps = {
  cancelTokenFetch: cancelToken,
  clearTokenStatus: clearStatus,
  clearTokenUser: clearToken,
  fetchUserToken: fetchToken,
  livenessTokenCheck: livenessCheck
};
export default connect(mapStateToProps, mapDispatchToProps)(RequestTokenDialog);
