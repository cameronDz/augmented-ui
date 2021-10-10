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
      width: '223px',
      '& .MuiFormControl-root': {
        paddingRight: '12px',
        width: '100%'
      }
    }
  },
  extendedSelectorContainer: {}
};

export { dateSwitchPickerStyles, outlinedSelectorStyles };
