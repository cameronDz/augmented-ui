const dateSwitchPickerStyles = {
  dateSwitchWrapper: {
    alignItems: 'center',
    display: 'flex'
  }
};

const outlinedSelectorStyles = {
  rootSelectorContainer: {
    display: 'inline-block',
    '&$extendedSelectorContainer': {
      '& .MuiFormControl-root': {
        width: '223px'
      }
    },
    '&$fullExtendedSelectorContainer': {
      '& .MuiFormControl-root': {
        width: '100%'
      }
    },
    '& .MuiFormControl-root': {
      width: '84px'
    },
    '& .MuiFormControl-root .MuiFormLabel-root[data-shrink=true]': {
      backgroundColor: 'white',
      padding: '0 4px',
      zIndex: '1000'
    }
  },
  extendedSelectorContainer: {},
  fullExtendedSelectorContainer: {}
};

export { dateSwitchPickerStyles, outlinedSelectorStyles };
