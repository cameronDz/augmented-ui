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
      backgroundColor: 'lightgrey'
    }
  },
  tableFooterItem: {
    alignItems: 'normal',
    justifyContent: 'normal',
    paddingLeft: 0
  },
  tableLoader: {
    marginBottom: '2px',
    paddingTop: '15px',
    textAlign: 'center'
  }
};

export { simpleTableStles };
