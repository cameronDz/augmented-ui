const orderIntakesByDate = (a, b) => {
  let orderValue = 0;
  try {
    const aTime = new Date(a.intakeTime);
    const bTime = new Date(b.intakeTime);
    if (aTime < bTime) {
      orderValue = 1;
    } else if (aTime > bTime) {
      orderValue = -1;
    }
  } catch (err) {
    console.error('could not properly order intakes due to error:', err);
  }
  return orderValue;
};

export { orderIntakesByDate };
