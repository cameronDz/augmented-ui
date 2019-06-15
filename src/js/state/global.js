/**
 * shared methods for state management
 */

// shared method for checking if state should be updated
export const shouldFetchState = state => {
  if (!state) {
    return true;
  } else if (!!state.isFetching) {
    return false;
  }
  return (!!state.didInvalidate);
};
