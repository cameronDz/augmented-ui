const splitZuluStringToLocalDayTime = (date) => {
  const split = {};
  if (date && date.endsWith('Z')) {
    const local = new Date(date).toLocaleString();
    const arr = local.split(', ');
    split.day = arr[0];
    split.time = arr[1];
  }
  return split;
};

export { splitZuluStringToLocalDayTime };
