const orderByDateKey = (a, b, key) => {
  let orderValue = 0;
  if (key) {
    try {
      const aTime = new Date(a?.[key]).getTime();
      const bTime = new Date(b?.[key]).getTime();
      if (aTime < bTime) {
        orderValue = 1;
      } else if (aTime > bTime) {
        orderValue = -1;
      }
    } catch (err) {
      console.error('could not properly order intakes due to error:', err);
    }
  }
  return orderValue;
};

export { orderByDateKey };
