import get from 'lodash.get';

const splitTextKeyToArray = (element = {}, path ='', splitByChar = '') => {
  let array = [];
  const keyToSplit = get(element, path, '');
  if (!!keyToSplit && typeof keyToSplit.split === 'function') {
    array = keyToSplit.split(splitByChar);
  }
  return array;
};

export { splitTextKeyToArray };
