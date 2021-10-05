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
    }
  },
  navItem: {
    marginRight: '12px'
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
