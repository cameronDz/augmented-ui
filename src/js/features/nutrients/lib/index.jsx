const createValidTypesList = (types) => {
  const units = [];
  const length = Array.isArray(types) ? types.length : 0;
  for (let idx = 0; idx < length; idx++) {
    if (types[idx]?.id && types[idx]?.name) {
      units.push({ id: types[idx].id, name: types[idx].name });
    }
  }
  return units;
};

export { createValidTypesList };
