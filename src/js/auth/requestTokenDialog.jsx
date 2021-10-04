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
import { SimpleDialog } from '../components/simpleDialog';
import {
  cancelToken,
  clearError,
  clearToken,
  fetchToken,
  livenessCheck
} from './state/actions';
import { handleFunction } from '../lib/eventHandler';
import { requestTokenDialogStyles as styles } from './styles';

const title = 'Sign in with credentials';
const propTypes = {
  cancelTokenFetch: PropType.func,
  clearTokenError: PropType.func,
  clearTokenUser: PropType.func,
  error: PropType.any,
  fetchUserToken: PropType.func,
  isAuthLive: PropType.bool,
  isOpen: PropType.bool,
  isProcessingRequest: PropType.bool,
  livenessTokenCheck: PropType.func,
  onClose: PropType.func,
  securedUser: PropType.string,
  token: PropType.any
};
const useStyles = makeStyles(() => styles);
const RequestTokenDialog = ({
  cancelTokenFetch,
  clearTokenError,
  clearTokenUser,
  error,
  fetchUserToken,
  isAuthLive,
  isOpen,
  isProcessingRequest,
  livenessTokenCheck,
  onClose,
  securedUser,
  token
}) => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!isOpen) {
      handleFunction(clearTokenError);
      setPassword('');
    }
    if (securedUser) {
      setPassword('');
    }
    setUsername(securedUser || '');
  }, [clearTokenError, isOpen, securedUser]);

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
    let text = 'To create new Augmented sessions and logs, please log in with valid credentials.';
    if (token) {
      text = 'You\'re credentials are valid.';
    } else if (error) {
      text = 'Unable to verify credentials. Please, try again.';
    }
    return text;
  };

  return (
    <SimpleDialog
      isOpen={isOpen}
      onClose={handleClose}
      contentHeader={title}
      contentBody={
        <Fragment>
          <div className={classes?.dialogContentContainer}>
            {isProcessingRequest ? (
              <CircularProgress />
            ) : (
              <DialogContentText>{getText()}</DialogContentText>
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
          {token ? (
            <Button disabled={isProcessingRequest} onClick={handleActionClick}>
              Clear Credentials
            </Button>
          ) : (
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
  token: state.auth.token
});
const mapDispatchToProps = {
  cancelTokenFetch: cancelToken,
  clearTokenError: clearError,
  clearTokenUser: clearToken,
  fetchUserToken: fetchToken,
  livenessTokenCheck: livenessCheck
};
export default connect(mapStateToProps, mapDispatchToProps)(RequestTokenDialog);
