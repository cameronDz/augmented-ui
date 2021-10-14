const calulcateTimingSeconds = (time) => {
  let calculatedSeconds = 0;
  try {
    const timingArray = time.split(':');
    calculatedSeconds =
      Number(timingArray[0] * 3600) +
      Number(timingArray[1] * 60) +
      Number(timingArray[2]);
  } catch (error) {
    console.error('issue calculating time', error);
  }
  return calculatedSeconds;
};

export { calulcateTimingSeconds };
