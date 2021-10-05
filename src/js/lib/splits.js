const splitTextKeyToArray = (element = {}, path = '', splitByChar = '') => {
  const isSplittable = typeof element?.[path]?.split === 'function';
  return isSplittable ? element[path].split(splitByChar) : [];
};

export { splitTextKeyToArray };
