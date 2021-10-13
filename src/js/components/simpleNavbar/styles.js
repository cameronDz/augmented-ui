const simpleNavbarStyles = {
  simpleNavWrapper: {
    '& .MuiAppBar-root.MuiAppBar-colorPrimary': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  navImageLogo: {
    '& img': {
      height: '28px'
    },
    '&$navItem:hover': {
      backgroundColor: 'unset',
      paddingBottom: '0',
      paddingTop: '0'
    }
  },
  navItem: {
    paddingLeft: '8px',
    paddingRight: '8px',
    '&:hover': {
      backgroundColor: '#fafafa',
      paddingBottom: '8px',
      paddingTop: '8px'
    },
    '& a': {
      color: '#3273dc',
      textDecorator: 'none'
    }
  },
  navItemEnd: {
    marginLeft: 'auto',
    marginRight: '0',
    order: '2'
  }
};

const navbarItemsStyles = {
  navTitleContainer: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex'
  },
  navTitleDisplay: {
    fontWeight: '600',
    fontVariationSettings: "'wght' 500"
  }
};

export { navbarItemsStyles, simpleNavbarStyles };
