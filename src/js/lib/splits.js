import get from 'lodash.get';

const splitTextKeyToArray = (element = {}, path = '', splitByChar = '') => {
  const keyToSplit = get(element, path, '');
  const canSplitKeyIntoArray = (!!keyToSplit && typeof keyToSplit.split === 'function');
  return canSplitKeyIntoArray ? keyToSplit.split(splitByChar) : [];
};

export { splitTextKeyToArray };
