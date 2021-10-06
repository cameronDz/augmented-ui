const greyBackground = '#f5f5f5';
const greyBorder = '#dbdbdb';

const simpleDialogStyles = {
  dialogContainer: {
    width: '580px'
  },
  dialogSection: {},
  dialogHeader: {
    backgroundColor: greyBackground,
    borderBottom: `1px solid ${greyBorder}`
  },
  dialogBody: {
    paddingBottom: '12px'
  },
  dialogFooter: {
    backgroundColor: greyBackground,
    borderTop: `1px solid ${greyBorder}`,
    minHeight: '40px'
  }
};

const cardStyles = {
  cardContainer: {
    marginBottom: '20px'
  },
  cardContent: {
    padding: '8px',
    '&.column': {
      marginBottom: '8px'
    }
  },
  '@media all and (max-width: 600px)': {
    cardContent: {
      margin: 0,
      padding: '0 4px',
      '&.column': {
        padding: 0
      }
    }
  }
};

const footerStyles = {
  footerContainer: {
    bottom: '0',
    marginTop: '-36px',
    maxHeight: '36px',
    minHeight: '36px',
    maxWidth: '100%',
    padding: '4px 0',
    textAlign: 'center'
  },
  footerVerbiage: {
    margin: 'auto',
    maxWidth: '1280px'
  },
  appTitle: {
    fontWeight: '700'
  }
};

export { cardStyles, footerStyles, simpleDialogStyles };
