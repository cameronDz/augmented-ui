const orderIntakesByDate = (a, b) => {
  let aTime, bTime;
  try {
    aTime = new Date(a.intakeTime);
    bTime = new Date(b.intakeTime);
  } catch {
    return 0;
  }
  if (aTime < bTime) {
    return 1;
  } else if (aTime > bTime) {
    return -1;
  }
  return 0;
};

export { orderIntakesByDate };