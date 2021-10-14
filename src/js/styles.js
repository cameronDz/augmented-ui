const appStyles = {
  appContainer: {
    minHeight: '100%'
  },
  '@global': {
    html: {
      height: '100%',
      overflowY: 'auto'
    },
    body: {
      fontFamily: 'sans-serif',
      height: '100%',
      margin: 0,
      padding: 0
    },
    '.MuiFormControl-root, .MuiButtonBase-root.MuiButton-root.MuiButton-contained':
      {
        marginRight: '12px',
        marginTop: '12px'
      },
    a: {
      color: '#3273dc',
      textDecoration: 'none'
    }
  }
};

export { appStyles };
