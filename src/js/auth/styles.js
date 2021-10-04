const requestTokenDialogStyles = {
  dialogContainer: {
    width: '540px',
    '& .MuiCircularProgress-root': {
      display: 'block',
      height: '80px !important',
      margin: 'auto',
      width: '80px !important'
    }
  },
  dialogContentContainer: {
    alignItems: 'center',
    display: 'flex',
    minHeight: '100px',
    '& .MuiCircularProgress-root': {
      margin: 'auto'
    }
  }
};

export { requestTokenDialogStyles };
