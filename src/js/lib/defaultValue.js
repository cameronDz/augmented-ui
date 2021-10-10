const defaultValue = (value = null, defValue = '') => {
  return value || defValue;
};

const eventDefaultValue = (event = null, defValue = '') => {
  return event?.target?.value || defValue;
};

export { defaultValue, eventDefaultValue };
