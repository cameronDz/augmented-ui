const simpleTableStles = {
  simpleTableWrapper: {
    overflowX: 'auto'
  },
  tableSelector: {
    width: '100%',
    '& thead tr': {
      borderBottom: '2px grey solid'
    },
    '& tbody tr:nth-child(even)': {
      backgroundColor: '#f5f5f5'
    }
  },
  tableLoader: {
    marginBottom: '2px',
    paddingTop: '15px',
    textAlign: 'center'
  }
};

export { simpleTableStles };
